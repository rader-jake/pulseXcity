'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const events = [
  {
    id: 1,
    name: 'RawDawg Running Club',
    date: 'April 27, 2025',
    time: '10:00 AM',
    location: 'Domino Park, Brooklyn',
    image: '/flyer1.png',
    tag: 'Free'
  },
  {
    id: 2,
    name: 'Sunset HIIT Workout',
    date: 'May 3, 2025',
    time: '6:30 PM',
    location: 'Hudson Yards, Manhattan',
    image: '/flyer2.png',
    tag: 'Limited Spots'
  }
];

export default function EventListPage() {
  const [view, setView] = useState('list');

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Explore Events</h1>

      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${view === 'list' ? 'bg-white text-black' : 'bg-white/10 text-white'}`}
          onClick={() => setView('list')}
        >
          List View
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${view === 'map' ? 'bg-white text-black' : 'bg-white/10 text-white'}`}
          onClick={() => setView('map')}
        >
          Map View
        </button>
      </div>

      {view === 'list' ? (
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <motion.div
                whileHover={{ scale: 1.03, rotate: '-0.3deg' }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl overflow-hidden shadow-xl bg-black border border-white/10 cursor-pointer hover:shadow-white/20 transition-shadow duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-2 py-1 rounded-full">
                    {event.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-1">{event.name}</h2>
                  <p className="text-sm text-white/70">{event.date} • {event.time}</p>
                  <p className="text-sm text-white/60 mt-1">{event.location}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="h-96 bg-white/10 rounded-2xl flex items-center justify-center text-white/70">
          [Map view coming soon]
        </div>
      )}
    </div>
  );
}
