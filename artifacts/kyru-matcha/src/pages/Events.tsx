import { useState, useRef, useEffect } from 'react';

const VIDEOS = ['/images/event-v1-hq.mp4', '/images/event-v2-hq.mp4', '/images/event-v3-hq.mp4'];

const confirmed = {
  date: '07.25',
  day: 'SAT',
  year: '2026',
  city: 'Richmond',
  state: 'VA',
  venue: 'District Candle Lab · Mosaic District',
  time: '11am – 5pm',
  note: 'this weekend.',
};

const upcoming = [
  {
    date: '08.09', day: 'SUN', year: '2026',
    city: 'Washington', state: 'DC',
    venue: 'TBA', time: 'TBA',
  },
  {
    date: '08.23', day: 'SAT', year: '2026',
    city: 'Norfolk', state: 'VA',
    venue: 'TBA', time: 'TBA',
  },
];

function VideoEventHero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext]       = useState<number | null>(null);
  const [fading, setFading]   = useState(false);

  const handleEnded = () => {
    const nextIdx = (current + 1) % VIDEOS.length;
    setNext(nextIdx);
    setFading(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setFading(true)));
  };

  useEffect(() => {
    if (!fading || next === null) return;
    const timer = setTimeout(() => {
      setCurrent(next);
      setNext(null);
      setFading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [fading, next]);

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: 'calc(100vh - 72px)', minHeight: 480 }}
    >
      {/* ── Video background ── */}
      <video
        key={current}
        src={VIDEOS[current]}
        autoPlay muted playsInline preload="auto"
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ transition: 'opacity 0.7s ease', opacity: fading ? 0 : 1 }}
      />
      {next !== null && (
        <video
          key={`next-${next}`}
          src={VIDEOS[next]}
          autoPlay muted playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ transition: 'opacity 0.7s ease', opacity: fading ? 1 : 0 }}
        />
      )}

      {/* ── Dark overlay — gradient top + full dim ── */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55" />

      {/* ── Content ── */}
      <div className="absolute inset-0 flex flex-col justify-between px-8 md:px-16 py-10">

        {/* Top row */}
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">
            {confirmed.day} · {confirmed.date} · {confirmed.year}
          </p>
          <div className="flex items-center gap-4">
            <span className="font-serif italic text-white/50 text-sm">{confirmed.note}</span>
            <span className="font-mono text-[9px] uppercase tracking-widest border border-white/30 text-white/70 px-3 py-1">
              confirmed
            </span>
          </div>
        </div>

        {/* City — giant, bleeds across full width */}
        <div>
          <div className="flex items-end gap-4 md:gap-6 overflow-hidden">
            <h1 className="font-display lowercase tracking-[-0.05em] leading-[0.82] text-[22vw] md:text-[16vw] text-white">
              {confirmed.city}
            </h1>
            <span className="font-mono text-base md:text-xl text-white/40 mb-2 md:mb-4 shrink-0">
              {confirmed.state}
            </span>
          </div>

          {/* Bottom info row */}
          <div className="flex items-end justify-between mt-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
              {confirmed.venue} · {confirmed.time}
            </p>

            {/* Dot indicators */}
            <div className="flex gap-2 items-center">
              {VIDEOS.map((_, i) => (
                <span
                  key={i}
                  className="block rounded-full transition-all duration-500"
                  style={{
                    width:   i === current ? 18 : 6,
                    height:  6,
                    background: 'white',
                    opacity: i === current ? 0.6 : 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <main className="bg-white text-[#181916] pt-[72px]">

      <VideoEventHero />

      {/* ── Upcoming event rows ──────────────────────────────────── */}
      {upcoming.map((e, i) => (
        <div
          key={i}
          className="border-b border-black/[0.07] px-8 md:px-16 py-12 md:py-16 bg-white"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="font-mono text-[9px] uppercase tracking-widest opacity-30">
              {e.day} · {e.year}
            </p>
            <span className="font-mono text-[9px] uppercase tracking-widest border border-black/15 px-3 py-1 opacity-25">
              coming soon
            </span>
          </div>

          <div className="flex items-end gap-4 md:gap-8">
            <h2 className="font-display lowercase tracking-[-0.04em] leading-[0.85] text-[18vw] md:text-[12vw] text-[#181916]/20">
              {e.city}
            </h2>
            <span className="font-mono text-sm md:text-base mb-1 md:mb-2 opacity-20">{e.state}</span>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-widest mt-4 opacity-20">
            venue & time TBA — follow along for updates
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
