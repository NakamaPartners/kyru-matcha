const events = [
  {
    date: '07.25',
    day: 'SAT',
    year: '2026',
    city: 'Richmond',
    state: 'VA',
    venue: 'District Candle Lab · Mosaic District',
    time: '11am – 5pm',
    status: 'confirmed',
    note: 'this weekend.',
  },
  {
    date: '08.09',
    day: 'SUN',
    year: '2026',
    city: 'Washington',
    state: 'DC',
    venue: 'TBA',
    time: 'TBA',
    status: 'coming soon',
    note: null,
  },
  {
    date: '08.23',
    day: 'SAT',
    year: '2026',
    city: 'Norfolk',
    state: 'VA',
    venue: 'TBA',
    time: 'TBA',
    status: 'coming soon',
    note: null,
  },
];

export default function Events() {
  return (
    <main className="bg-white text-[#181916] pt-[72px]">

      {/* ── Dual-video hero ──────────────────────────────────────── */}
      <div className="grid grid-cols-2 border-b border-black/[0.07]" style={{ height: '92vh', minHeight: 520 }}>
        {(['event-v1.mp4', 'event-v2.mp4'] as const).map((file, i) => (
          <div key={i} className={`relative overflow-hidden ${i === 0 ? 'border-r border-black/[0.07]' : ''}`}>
            <video
              src={`/images/${file}`}
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlaid label on left video */}
        <div className="absolute bottom-8 left-8 pointer-events-none">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">summer 2026</p>
          <p className="font-serif italic text-white/70 text-2xl mt-1">find us.</p>
        </div>
      </div>

      {/* ── Event rows — poster-sized ────────────────────────────── */}
      {events.map((e, i) => (
        <div
          key={i}
          className={`border-b border-black/[0.07] px-8 md:px-16 py-12 md:py-16 ${
            e.status === 'confirmed' ? 'bg-[#181916] text-white' : 'bg-white'
          }`}
        >
          {/* Top row: weekday + status */}
          <div className="flex items-center justify-between mb-4">
            <p className={`font-mono text-[9px] uppercase tracking-widest ${e.status === 'confirmed' ? 'text-white/35' : 'opacity-30'}`}>
              {e.day} · {e.year}
            </p>
            <div className="flex items-center gap-4">
              {e.note && (
                <span className="font-serif italic text-white/50 text-sm">{e.note}</span>
              )}
              <span className={`font-mono text-[9px] uppercase tracking-widest border px-3 py-1 ${
                e.status === 'confirmed'
                  ? 'border-white/30 text-white/70'
                  : 'border-black/15 opacity-25'
              }`}>
                {e.status}
              </span>
            </div>
          </div>

          {/* City — giant poster type */}
          <div className="flex items-end gap-4 md:gap-8">
            <h2 className={`font-sans font-medium lowercase tracking-[-0.04em] leading-[0.85] ${
              e.status === 'confirmed'
                ? 'text-[18vw] md:text-[12vw] text-white'
                : 'text-[18vw] md:text-[12vw] text-[#181916]/20'
            }`}>
              {e.city}
            </h2>
            <span className={`font-mono text-sm md:text-base mb-1 md:mb-2 ${
              e.status === 'confirmed' ? 'text-white/40' : 'opacity-20'
            }`}>
              {e.state}
            </span>
          </div>

          {/* Venue + time */}
          <p className={`font-mono text-[10px] uppercase tracking-widest mt-4 ${
            e.status === 'confirmed' ? 'text-white/35' : 'opacity-20'
          }`}>
            {e.venue !== 'TBA' ? `${e.venue}${e.time !== 'TBA' ? ` · ${e.time}` : ''}` : 'venue & time TBA — follow along for updates'}
          </p>
        </div>
      ))}

      {/* ── Footer note ─────────────────────────────────────────── */}
      <div className="px-8 md:px-16 py-10 flex items-center justify-between border-t border-black/[0.07]">
        <p className="font-serif italic text-lg opacity-40">more cities soon.</p>
        <a
          href="https://www.instagram.com/kyrumatcha/"
          target="_blank" rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-widest opacity-30 hover:opacity-70 transition-opacity"
        >
          @kyrumatcha ↗
        </a>
      </div>
    </main>
  );
}
