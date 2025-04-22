'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';

export default function CreateEventPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    description: '',
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', formData);
    setIsSubmitted(true)
  };

  const variants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  const [flyer, setFlyer] = useState(null);

const handleFlyerChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setFlyer(URL.createObjectURL(file));
  }
};


  return (
    <>
    <Header/>
    <div className="max-w-xl mx-auto mt-24 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-xl text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Create an Event</h1>

      <div className="mb-8">
  <label className="block text-sm font-medium mb-2">Upload Flyer</label>
  <input
    type="file"
    accept="image/*"
    onChange={handleFlyerChange}
    className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 transition"
  />
  {flyer && (
    <img
      src={flyer}
      alt="Flyer Preview"
      className="mt-4 rounded-xl w-full object-cover max-h-[300px] border border-white/10 shadow-lg"
    />
  )}
</div>

{isSubmitted ? (
  <div className="text-center py-12">
    <h2 className="text-3xl font-bold mb-4">🎉 Your Event is Live!</h2>
    <p className="text-lg text-white/80 mb-6">We’ll send you a confirmation email with your event details.</p>
    <button
      className="bg-orange-600 hover:bg-orange-700 transition text-white font-semibold py-2 px-4 rounded-full"
      onClick={() => setIsSubmitted(false)}
    >
      Create Another Event
    </button>
  </div>
) : (
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* your existing form fields go here */}


      {/* <form onSubmit={handleSubmit}> */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div>
                <label className="block mb-1 text-sm font-medium">Event Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black/30 p-2 border border-white/10 focus:outline-none"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1 text-sm font-medium">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-black/30 p-2 border border-white/10 focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm font-medium">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-black/30 p-2 border border-white/10 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="w-full mt-4 bg-orange-500 hover:bg-orange-600 py-2 rounded-lg font-semibold transition"
              >
                Next
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div>
                <label className="block mb-1 text-sm font-medium">Location</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black/30 p-2 border border-white/10 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full rounded-lg bg-black/30 p-2 border border-white/10 focus:outline-none"
                />
              </div>

              <div className="flex justify-between gap-2 mt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 bg-white/10 hover:bg-white/20 py-2 rounded-lg font-medium transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-gradient-to-r from-orange-400 to-rose-500 hover:brightness-110 py-2 rounded-lg font-semibold transition"
                >
                  Publish
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

  </form>
)}
    </div>
    </>
  );
}
