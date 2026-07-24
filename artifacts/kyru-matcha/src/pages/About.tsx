import { useState, useEffect, useCallback } from "react";

const slides = [
  "/images/about-1.png",
  "/images/about-2.png",
  "/images/about-3.jpg",
  "/images/about-4.jpg",
  "/images/about-5.jpg",
  "/images/about-6.jpg",
  "/images/about-7.jpg",
];

function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (idx === current || fading) return;
    setPrev(current);
    setFading(true);
    setCurrent(idx);
    setTimeout(() => { setPrev(null); setFading(false); }, 700);
  }, [current, fading]);

  useEffect(() => {
    const t = setTimeout(() => goTo((current + 1) % slides.length), 4200);
    return () => clearTimeout(t);
  }, [current, goTo]);

  return (
    <div className="relative w-full overflow-hidden bg-[#0e0e0e]" style={{ height: '88vh', minHeight: 480 }}>
      {prev !== null && (
        <img key={`prev-${prev}`} src={slides[prev]} alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: fading ? 0 : 1, transition: 'opacity 700ms ease' }} />
      )}
      <img key={`cur-${current}`} src={slides[current]} alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1, transition: 'opacity 700ms ease' }} />

      {/* Counter */}
      <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest text-white/35 select-none">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* Pill dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            className="transition-all duration-400"
            style={{
              width: i === current ? 20 : 6, height: 6, borderRadius: 3,
              background: i === current ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.2)',
            }} />
        ))}
      </div>

      <button className="absolute left-0 top-0 h-full w-1/2 focus:outline-none cursor-w-resize"
        onClick={() => goTo((current - 1 + slides.length) % slides.length)} aria-label="Previous" />
      <button className="absolute right-0 top-0 h-full w-1/2 focus:outline-none cursor-e-resize"
        onClick={() => goTo((current + 1) % slides.length)} aria-label="Next" />
    </div>
  );
}

const stats = [
  { n: '2023', label: 'founded' },
  { n: '10+',  label: 'pop-ups' },
  { n: '3',    label: 'states' },
  { n: '∞',    label: 'cups poured' },
];

export default function About() {
  return (
    <main className="bg-white text-[#181916] pt-[72px]">

      {/* ── Slideshow ───────────────────────────────────────────── */}
      <Slideshow />

      {/* ── Big statement ───────────────────────────────────────── */}
      <div className="border-t border-black/[0.07] px-8 md:px-16 py-16 md:py-20">
        <h1 className="font-sans text-5xl md:text-7xl lg:text-[6vw] font-medium lowercase tracking-[-0.04em] leading-[0.9] max-w-4xl">
          started as a feeling.<br />turned into a thing.
        </h1>
      </div>

      {/* ── Stats strip ─────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-black/[0.07]">
        {stats.map((s) => (
          <div key={s.n} className="border-r last:border-r-0 border-black/[0.07] px-8 md:px-12 py-10 border-b md:border-b-0">
            <p className="font-sans text-4xl md:text-5xl font-medium tracking-[-0.04em]">{s.n}</p>
            <p className="font-mono text-[9px] uppercase tracking-widest opacity-30 mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Story + voice ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] border-t border-black/[0.07]">

        {/* Left — label */}
        <div className="px-8 md:px-16 py-14 md:border-r border-black/[0.07] border-b md:border-b-0">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 mb-4">our thing</p>
          <p className="font-serif italic text-3xl text-[#181916]/50 leading-snug max-w-[200px]">
            serious matcha, unserious people.
          </p>
        </div>

        {/* Right — copy */}
        <div className="px-8 md:px-16 py-14 flex flex-col gap-6">
          <p className="text-lg leading-relaxed lowercase text-[#181916]/60 max-w-lg">
            kyru is viet-owned and obsessed with specialty matcha. we started as a pop-up
            because we wanted to make something we actually cared about — not a brand,
            not a concept — just really good matcha, made to order, in places we love.
          </p>
          <p className="text-base leading-relaxed lowercase text-[#181916]/45 max-w-lg">
            we're picky about what we pour. we use ceremonial grade, we whisk to order,
            and we'd rather do fewer pop-ups and do them right than chase volume.
          </p>
          <p className="text-base leading-relaxed lowercase text-[#181916]/45 max-w-lg">
            the people behind it are the same ones at the table — making the drinks,
            setting up the booth, packing up at the end of the night. small on purpose.
          </p>

          {/* Inline quote */}
          <p className="font-serif italic text-2xl text-[#181916]/30 py-4 border-y border-black/[0.07] my-2 max-w-lg">
            "find us when you least expect it."
          </p>

          <div className="flex items-center gap-8 pt-2">
            <a href="https://www.instagram.com/kyrumatcha/" target="_blank" rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest hover:opacity-50 transition-opacity">
              @kyrumatcha ↗
            </a>
            <a href="https://www.tiktok.com/@kyrukev" target="_blank" rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-70 transition-opacity">
              @kyrukev ↗
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}
