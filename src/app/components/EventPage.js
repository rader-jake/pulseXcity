// components/EventPage.js

import { useState } from 'react';
import EventsList from './EventsList';
import MapView from './MapView';
import { motion } from 'framer-motion';

const transitionVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export default function EventPage() {
  const [view, setView] = useState('list'); // 'list' or 'map'

  return (
    <div className="space-y-6">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setView('list')}
          className={`py-2 px-4 rounded-lg ${view === 'list' ? 'bg-orange-500' : 'bg-gray-700'}`}
        >
          List View
        </button>
        <button
          onClick={() => setView('map')}
          className={`py-2 px-4 rounded-lg ${view === 'map' ? 'bg-orange-500' : 'bg-gray-700'}`}
        >
          Map View
        </button>
      </div>

      <motion.div
        key={view}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        {view === 'list' ? <EventsList /> : <MapView />}
      </motion.div>
    </div>
  );
}
