export default function BackgroundSelector({ selectedBg, onChange }) {
    const backgrounds = ['sunset', 'waves', 'grid', 'stars'];
  
    return (
      <div>
        <label className="block text-sm font-medium mb-1">Background Preset</label>
        <div className="flex gap-2 flex-wrap">
          {backgrounds.map((bg) => (
            <button
                type="button"
              key={bg}
              onClick={() => onChange(bg)}
              className={`px-4 py-2 rounded-xl border text-sm transition ${
                selectedBg === bg ? 'bg-pink-500 text-white' : 'bg-white/10'
              }`}
            >
              {bg}
            </button>
          ))}
        </div>
      </div>
    );
  }
  