'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import FontSelector from '../components/customizers/FontSelector';
import VideoSelector from '../components/customizers/VideoSelector';
import LivePreview from '../components/customizers/LivePreview';
import confetti from 'canvas-confetti';
import ReactConfetti from 'react-confetti';
import { useRouter } from 'next/navigation';

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    description: '',
  });

  const [font, setFont] = useState('Space Grotesk');
  const [bgVideo, setBgVideo] = useState('');
  const [flyer, setFlyer] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

//   useEffect(() => {
//     if (showConfetti) {
//         setShowConfetti(false);
//     }
//   }, [showConfetti]);




const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // set initial size
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  
  
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFlyerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFlyer(imageUrl);
    }
  };

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullForm = {
      ...formData,
      font,
      bgVideo,
      flyer,
    };
    console.log('Submitted Event:', fullForm);
    setShowConfetti(true);
    setShowConfirmation(true);
  };
  
  


  const closeConfirmation = () => {
    setShowConfirmation(false);
    setShowConfetti(false);
    router.push('/events');

  };

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto mt-20 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-6 text-center">Create Your Event</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Event Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-black/30 p-3 border border-white/10 focus:outline-none"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black/30 p-3 border border-white/10 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black/30 p-3 border border-white/10 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-black/30 p-3 border border-white/10 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
                className="w-full rounded-lg bg-black/30 p-3 border border-white/10 focus:outline-none"
              />
            </div>

            {/* Flyer Upload */}
            <div>
              <label className="block text-sm font-medium">Upload Flyer</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFlyerUpload}
                className="text-sm file:bg-orange-500 file:text-white file:px-3 file:py-1 file:rounded-full"
              />
              <p className="text-xs text-white/60 mt-1">Recommended size: 1080×1350px (4:5 aspect ratio)</p>

              {/* Display the uploaded flyer image */}
              {flyer && <img src={flyer} alt="Flyer Preview" className="mt-4 w-full max-w-xs rounded-lg" />}
            </div>

            <FontSelector selectedFont={font} onChange={setFont} />
            <VideoSelector selectedVideo={bgVideo} onChange={setBgVideo} />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:brightness-110 transition font-bold py-3 rounded-xl mt-6"
            >
              🚀 Launch Event
            </button>
          </div>

          <LivePreview
            formData={formData}
            font={font}
            bgVideo={bgVideo}
            flyer={flyer}
          />
        </form>
      </div>

      {/* Confirmation Modal */}

      {showConfetti && (
  <div className="fixed inset-0 z-50 pointer-events-none">
    <ReactConfetti
      width={windowDimensions.width}
      height={windowDimensions.height}
      numberOfPieces={200}
      recycle={false}
      gravity={0.2}
    />
  </div>
)}


{showConfirmation && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
    <div className="bg-white p-6 rounded-xl text-center w-full max-w-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Event Launched!</h2>
      <p className="text-gray-600 mb-4">
        Your event has been successfully launched. Let&apos;s celebrate!
      </p>
      <button
        type="button"
        onClick={closeConfirmation}
        className="bg-orange-500 text-white px-6 py-2 rounded-full mt-4"
      >
        Close
      </button>
    </div>
  </div>
)}


      


    </>
  );
}
