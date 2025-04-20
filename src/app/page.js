'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ReserveForm from './components/ReserveForm';
import Map from './components/Map';
import Link from 'next/link';
import Header from './components/Header'


export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
    setTimeout(() => {
      const el = document.getElementById('signup-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200); // slight delay to allow form to render
  };

  return (
    <>


      <main className="relative min-h-screen overflow-hidden text-white">
      <Header/>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/runclub-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
          <div className="max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4"
            >
              [Some Run Club]
        
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4"
            >
              pulse X city
        
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-200 mb-6"
            >
              Saturday, August 2nd · 4PM EST
              <br />
              Domino Park → The Summer Club, Queens
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onClick={handleClick}
              className="bg-gradient-to-r from-rose-500 to-orange-400 text-black font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform"
            >
              Reserve Your Spot
            </motion.button>
          </div>
        </div>

        <Map/>
      </main>

      {/* Reserve Form (conditionally visible) */}
      <ReserveForm isVisible={showForm} />
    </>
  );
}
