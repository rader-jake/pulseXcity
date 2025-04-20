// components/Map.js
'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicHVsc2V4Y2l0eSIsImEiOiJjbTlwNnl1YXEwZ3pvMmxvYXZmYmhvdm5oIn0.7eKvf9IiUYaqrMvU4OwMNw';

export default function Map() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-73.9632, 40.7081], // Domino Park, Brooklyn
      zoom: 12,
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-[500px] rounded-xl shadow-xl border border-white/10"
    />
  );
}
