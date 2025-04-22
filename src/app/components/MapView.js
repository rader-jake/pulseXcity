// components/MapView.js
'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicHVsc2V4Y2l0eSIsImEiOiJjbTlwNnl1YXEwZ3pvMmxvYXZmYmhvdm5oIn0.7eKvf9IiUYaqrMvU4OwMNw';

export default function MapView() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-73.9632, 40.7081], // Default to a central location
      zoom: 12,
    });

    // Add markers for each event
    const events = [
      { name: 'Run Club at Domino Park', coordinates: [-73.9632, 40.7081] },
      { name: 'Summer Run to The Summer Club', coordinates: [-73.948, 40.704] },
    ];

    events.forEach((event) => {
      new mapboxgl.Marker()
        .setLngLat(event.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${event.name}</h3>`))
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} className="w-full h-[500px] rounded-lg shadow-lg" />;
}
