'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicHVsc2V4Y2l0eSIsImEiOiJjbTlwNnl1YXEwZ3pvMmxvYXZmYmhvdm5oIn0.7eKvf9IiUYaqrMvU4OwMNw';

export default function Map() {
  const mapContainerRef = useRef(null);

  const route = [
    [-73.968567, 40.713409], // Domino Park
    [-73.960841, 40.710429], // Start Williamsburg Bridge
    [-73.985736, 40.717737], // End Williamsburg Bridge
    [-73.976522, 40.714442], // East River path
    [-73.961711, 40.760257], // Start Queensboro Bridge
    [-73.940486, 40.751026], // End bridge in Queens
    [-73.948918, 40.753973], // The Summer Club
  ];

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-73.958, 40.735],
      zoom: 12,
    });

    map.on('load', () => {
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [],
          },
        },
      });

      map.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route',
        paint: {
          'line-color': '#ff5500',
          'line-width': 5,
          'line-opacity': 0.8,
        },
      });

      // Add animated dot
      // 🏃 Add animated runner emoji marker
const runnerEl = document.createElement('div');
runnerEl.textContent = '🏃';
runnerEl.style.fontSize = '24px';

const runnerMarker = new mapboxgl.Marker(runnerEl)
  .setLngLat(route[0])
  .addTo(map);


      // Animation logic
      let progress = 0;
      const speed = 0.002;

      function animateRoute() {
        if (progress < 1) {
          progress += speed;
          const currentIndex = Math.floor(progress * (route.length - 1));
          const nextIndex = Math.min(currentIndex + 1, route.length - 1);
      
          const start = route[currentIndex];
          const end = route[nextIndex];
          const segmentProgress = (progress * (route.length - 1)) % 1;
      
          const interpolated = [
            start[0] + (end[0] - start[0]) * segmentProgress,
            start[1] + (end[1] - start[1]) * segmentProgress,
          ];
      
          const lineSlice = route.slice(0, currentIndex + 1);
          lineSlice.push(interpolated);
      
          map.getSource('route').setData({
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: lineSlice,
            },
          });
      
          // Move runner emoji
          runnerMarker.setLngLat(interpolated);
      
          requestAnimationFrame(animateRoute);
        }
      }

      // 🎯 Add checkpoint emoji markers
const checkpoints = [
  { coords: [-73.968567, 40.713409], emoji: '🏁', label: 'Start: Domino Park' },
  { coords: [-73.960841, 40.710429], emoji: '🌉', label: 'Williamsburg Bridge Start' },
  { coords: [-73.985736, 40.717737], emoji: '🌉', label: 'Williamsburg Bridge End' },
  { coords: [-73.976522, 40.714442], emoji: '🌊', label: 'East River Path' },
  { coords: [-73.961711, 40.760257], emoji: '🌉', label: 'Queensboro Bridge Start' },
  { coords: [-73.940486, 40.751026], emoji: '🌉', label: 'Queensboro Bridge End' },
  { coords: [-73.948918, 40.753973], emoji: '🏁', label: 'Finish: Summer Club' },
];

checkpoints.forEach(({ coords, emoji, label }) => {
  const el = document.createElement('div');
  el.textContent = emoji;
  el.style.fontSize = '20px';
  el.title = label;

  new mapboxgl.Marker(el).setLngLat(coords).addTo(map);
});

animateRoute();

      

      // Fit bounds to the full route
      const bounds = route.reduce((b, coord) => b.extend(coord), new mapboxgl.LngLatBounds(route[0], route[0]));
      map.fitBounds(bounds, {
        padding: 100,
        duration: 2000,
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-[500px] rounded-xl shadow-xl border border-white/10 mt-12"
    />
  );
}
