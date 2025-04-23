export default function FontSelector({ selectedFont, onChange }) {
    const fonts = ['Space Grotesk', 'Orbitron', 'Monoton', 'Pacifico', 'Merriweather', 'Anton'];
  
    return (
      <div>
        <label className="block text-sm font-medium mb-1">Font Style</label>
        <div className="flex flex-wrap gap-2">
          {fonts.map((font) => (
            <button
                type="button"
              key={font}
              onClick={() => onChange(font)} 
              className={`px-4 py-2 rounded-xl border text-sm transition ${
                selectedFont === font ? 'bg-orange-500 text-white' : 'bg-white/10'
              }`}
              style={{ fontFamily: font }}
            >
              {font}
            </button>
          ))}
        </div>
      </div>
    );
  }
  