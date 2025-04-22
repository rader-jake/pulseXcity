'use client';

import Link from "next/link";
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-white tracking-tight">
          pulse <span className="text-orange-400">X</span> city
        </h1>

        {/* Nav Links */}
        <nav className="flex items-center space-x-6">
          <Link
            href="/events"
            className="text-white/80 hover:text-orange-300 transition font-medium"
          >
            Events
          </Link>

          <Link
            href="/map"
            className="text-white/80 hover:text-orange-300 transition font-medium"
          >
            Map
          </Link>

          <Link
            href="/login"
            className="text-white/60 hover:text-white transition font-medium"
          >
            Login
          </Link>

          <Link href="/create">
  <motion.button
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="bg-gradient-to-r from-rose-500 to-orange-400 text-black font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform"
  >
    Create Event
  </motion.button>
</Link>


          {/* <Link
            href="/signup"
            className="ml-2 text-black font-semibold bg-gradient-to-r from-orange-400 to-rose-500 px-4 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Sign Up
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
