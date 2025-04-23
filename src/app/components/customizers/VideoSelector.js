const videoOptions = [
    { label: 'Laser Show', url: '/laser-show.mp4' },
    { label: 'Fireworks', url: '/fireworks.mp4' },
    { label: 'Night Sky', url: '/night-sky.mp4' },
    { label: 'City Skyline at Night', url: '/night-city-skyline.mp4' },
    { label: 'Bubbles', url: '/bubbles.mp4' },
  ];
  
  export default function VideoSelector({ selectedVideo, onChange }) {
    

    return (

        
      <div>
        <label className="block text-sm font-medium mb-2">Background Video</label>
        <div className="grid grid-cols-2 gap-4">
          {videoOptions.map((video) => (
            <button
                type="button"
              key={video.url}
              onClick={() => onChange(video.url)}
              className={`p-2 border ${selectedVideo === video.url ? 'border-pink-500' : 'border-white/20'} rounded-lg text-sm`}
            >
              {video.label}
            </button>
          ))}
          <button
          type="button"
  onClick={() => onChange('')}
  className="mt-2 text-xs text-red-400 underline"
>
  Clear Video
</button>

        </div>
      </div>
    );
  }
  