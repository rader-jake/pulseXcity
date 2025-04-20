'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ReserveForm({ isVisible }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to a server or service
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          id="signup-form"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="bg-black/80 text-white py-24 px-6 min-h-screen flex items-center justify-center"
        >
          <div className="w-full max-w-xl backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8">
            {!submitted ? (
              <>
                <h2 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-300 to-yellow-400">
                  Reserve Your Spot
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full bg-white/10 text-white placeholder-white/70 px-5 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-white/10 text-white placeholder-white/70 px-5 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                  <input
                    type="text"
                    placeholder="Instagram Handle (optional)"
                    className="w-full bg-white/10 text-white placeholder-white/70 px-5 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-500 to-orange-400 text-black font-bold py-3 rounded-xl hover:scale-105 transition-transform"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400">
                  You're in!
                </h2>
                <p className="text-white/80 mb-6">We’ll see you August 2nd at Domino Park 👟</p>
                <p className="text-sm text-white/50">You’ll get an email closer to the event with more details.</p>
              </motion.div>
            )}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
