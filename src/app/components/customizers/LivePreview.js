// components/customizers/LivePreview.js

export default function LivePreview({ formData, font, bgPreset, bgVideo, flyer }) {
    const { name, date, time, location, description } = formData;
    const background = flyer
  ? `url(${flyer}) center/cover no-repeat`
  : bgVideo
    ? undefined
    : bgPreset || 'linear-gradient(to right, #000000, #333333)';
  
    return (
    //   <div className="relative h-full w-full rounded-xl overflow-hidden border border-white/10 shadow-xl">

<div
  className="rounded-xl shadow-2xl overflow-hidden border border-white/10"
  style={{
    background,
    height: '450px',
    width: '360px',
    position: 'relative',
  }}
>
  {bgVideo && !flyer && (
    <video
      src={bgVideo}
      autoPlay
      muted
      loop
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
  )}
  <div className="relative z-10 p-6 text-white" style={{ fontFamily: font }}>
    <h2 className="text-2xl font-bold">{formData.name}</h2>
    <p className="text-sm mt-2">{formData.date} @ {formData.time}</p>
    <p className="text-sm">{formData.location}</p>
    <p className="text-xs mt-4">{formData.description}</p>
  </div>
</div>

    //     {/* Background Video */}
    //     {bgVideo ? (
    //       <video
    //         src={bgVideo}
    //         className="absolute top-0 left-0 w-full h-full object-cover z-0"
    //         autoPlay
    //         loop
    //         muted
    //         playsInline
    //       />
    //     ) : (
    //       <div className="absolute top-0 left-0 w-full h-full bg-black z-0" />
    //     )}
  
    //     {/* Overlay Content */}
    //     <div
    //       className="relative z-10 h-full w-full p-6 text-white flex flex-col justify-center backdrop-blur-md bg-black/30"
    //       style={{ fontFamily: font }}
    //     >
    //       <h2 className="text-3xl font-bold mb-2">{name || 'Your Event Name'}</h2>
    //       <p className="text-lg mb-1">{date && time ? `${date} • ${time}` : 'Date & Time'}</p>
    //       <p className="text-lg mb-1">{location || 'Location'}</p>
    //       <p className="mt-4">{description || 'Event Description goes here...'}</p>
    //     </div>
    //   </div>
    );
  }
  