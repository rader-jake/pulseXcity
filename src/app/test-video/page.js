'use client';

import { useState } from 'react';

export default function TestVideoPage() {
  const [videoUrl, setVideoUrl] = useState('/run.mp4'); // local file path

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
        src={videoUrl}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
        <h1 className="text-4xl font-bold">Testing Background Video</h1>
        <button
          onClick={() =>
            setVideoUrl((prev) =>
              prev === '/run.mp4'
                ? 'https://www.w3schools.com/html/mov_bbb.mp4'
                : '/run.mp4'
            )
          }
          className="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition"
        >
          Toggle Video
        </button>
      </div>
    </div>
  );
}
