'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AuthForm({ isLogin = true }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You'd hook this up to auth logic (e.g. Supabase, Firebase, custom API)
    console.log(`${isLogin ? 'Logging in' : 'Signing up'} with`, email, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black/80 min-h-screen flex items-center justify-center px-6"
    >
      <div className="w-full max-w-md bg-white/10 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          {isLogin ? 'Welcome Back' : 'Create Your Account'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-orange-400 text-black font-bold py-3 rounded-xl hover:scale-105 transition-transform"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
