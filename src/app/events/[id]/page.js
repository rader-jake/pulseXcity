'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/app/components/Header';

export default function EventDetailPage() {
  const params = useParams();
  const id = params.id;
  const [event, setEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  const attendees = [
    {
      id: 1,
      name: 'John Doe',
      profileImage: '/head1.png',
      city: 'Brooklyn, NY',
    },
    {
      id: 2,
      name: 'Jane Smith',
      profileImage: '/head2.png',
      city: 'Manhattan, NY',
    },
    {
      id: 3,
      name: 'Mark Lee',
      profileImage: '/head3.png',
      city: 'Queens, NY',
    },
    {
      id: 4,
      name: 'Emma Clark',
      profileImage: '/head4.png',
      city: 'Bronx, NY',
    },
  ];

  useEffect(() => {
    const sampleEvents = [
      {
        id: '1',
        name: 'RawDawg Running Club',
        date: 'April 27, 2025',
        time: '10:00 AM',
        location: 'Domino Park, Brooklyn',
        description: 'A chill 5K jog with vibes and good company.',
        image: '/flyer1.png'
      },
      {
        id: '2',
        name: 'Sunset HIIT Workout',
        date: 'May 3, 2025',
        time: '6:30 PM',
        location: 'Hudson Yards, Manhattan',
        description: 'Bring the sweat with a sunset workout!',
        image: '/flyer2.png'
      }
    ];

    const found = sampleEvents.find((e) => e.id === id);
    setEvent(found);
  }, [id]);

  if (!event) return <div className="p-10 text-center">Loading event...</div>;

  return (
    <>
    <Header/>
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] z-0" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-xl mb-10"
        >
          <img src={event.image} alt={event.name} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">{event.name}</h1>
            <p className="text-sm text-white/80">{event.date} • {event.time}</p>
            <p className="text-sm text-white/60">{event.location}</p>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="mt-6 space-y-6"
>
  <p className="text-white/80 text-lg leading-relaxed">{event.description}</p>

  <button
  onClick={() => setShowModal(true)}
  className="relative inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-base font-semibold tracking-wide transition-all duration-300 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 shadow-lg hover:shadow-orange-500/40 hover:scale-105"
>
  <span className="z-10">Reserve Your Spot</span>
  <span className="absolute inset-0 rounded-full bg-white opacity-5 blur-sm animate-pulse pointer-events-none" />
</button>

</motion.div>


{/* Who's Going Section */}
<div className="mt-12">
          <h2 className="text-2xl text-white font-semibold mb-6">Who's Going</h2>
          <div className="grid grid-cols-4 gap-6">
            {attendees.map((attendee) => (
              <motion.div
                key={attendee.id}
                whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src={attendee.profileImage}
                    alt={attendee.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-2 text-white text-sm font-medium">{attendee.name}</p>
                <p className="text-white text-xs">{attendee.city}</p>
              </motion.div>
            ))}
          </div>
        </div>




      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black rounded-2xl p-6 w-[90%] max-w-md shadow-2xl border border-white/10"
            >
              {submitted ? (
                <div className="text-center text-white space-y-4">
                  <h2 className="text-2xl font-semibold">You're in!</h2>
                  <p>We'll see you at {event.name} 🎉</p>
                  <button
                    className="mt-4 text-orange-500 underline"
                    onClick={() => {
                      setShowModal(false);
                      setSubmitted(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <h2 className="text-xl font-semibold text-white mb-4">Reserve your spot</h2>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none"
                  />
                  <textarea
                    placeholder="Any notes?"
                    rows="3"
                    className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-orange-600 w-full py-3 rounded-xl text-white hover:bg-orange-700 transition"
                  >
                    Reserve
                  </button>
                  <button
                    type="button"
                    className="text-white text-sm underline block mt-3 mx-auto"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}
