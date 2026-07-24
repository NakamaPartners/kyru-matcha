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

      {/* ── Dual-video hero — horizontal crop ───────────────────── */}
      <div className="border-b border-black/[0.07]">

        {/* Label row above the videos */}
        <div className="flex items-center justify-between px-8 md:px-16 py-5 border-b border-black/[0.07]">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">summer 2026</p>
          <p className="font-serif italic text-lg opacity-40">find us.</p>
        </div>

        {/* Asymmetric split — v1 dominant (3/5), v2 accent (2/5) */}
        <div className="grid grid-cols-[3fr_2fr]" style={{ height: '60vh', minHeight: 320 }}>
          {/* v1 — primary, crops portrait to wide landscape */}
          <div className="relative overflow-hidden border-r border-black/[0.07]">
            <video
              src="/images/event-v1.mp4"
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          {/* v2 — tighter crop, accent panel */}
          <div className="relative overflow-hidden">
            <video
              src="/images/event-v2.mp4"
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Subtle date stamp overlay on accent panel */}
            <div className="absolute bottom-4 right-4 text-right pointer-events-none">
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">summer · 2026</p>
            </div>
          </div>
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
