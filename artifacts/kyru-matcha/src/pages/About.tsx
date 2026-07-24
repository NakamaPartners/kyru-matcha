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
    setTimeout(() => {
      setPrev(null);
      setFading(false);
    }, 700);
  }, [current, fading]);

  // Auto-advance every 4s
  useEffect(() => {
    const t = setTimeout(() => {
      goTo((current + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(t);
  }, [current, goTo]);

  return (
    <div className="relative w-full overflow-hidden bg-[#0e0e0e]" style={{ height: '88vh', minHeight: 480 }}>

      {/* Previous slide — fades out */}
      {prev !== null && (
        <img
          key={`prev-${prev}`}
          src={slides[prev]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: fading ? 0 : 1, transition: 'opacity 700ms ease' }}
        />
      )}

      {/* Current slide — fades in */}
      <img
        key={`cur-${current}`}
        src={slides[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: fading ? 1 : 1, transition: 'opacity 700ms ease' }}
      />

      {/* Slide counter — top right */}
      <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest text-white/40 select-none">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* Dot nav — bottom center */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>

      {/* Left / right tap zones */}
      <button
        className="absolute left-0 top-0 h-full w-1/2 focus:outline-none cursor-w-resize"
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous"
      />
      <button
        className="absolute right-0 top-0 h-full w-1/2 focus:outline-none cursor-e-resize"
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next"
      />
    </div>
  );
}

export default function About() {
  return (
    <main className="bg-white text-[#181916] pt-[72px]">

      {/* ── Slideshow ────────────────────────────────────── */}
      <Slideshow />

      {/* ── About text ───────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] border-t border-black/[0.07]">

        {/* Left — heading */}
        <div className="px-8 md:px-16 py-16 md:border-r border-black/[0.07]">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 mb-4">our thing</p>
          <h1 className="font-sans text-5xl md:text-6xl font-medium lowercase tracking-[-0.04em] leading-[0.9]">
            we're<br />kyru
          </h1>
        </div>

        {/* Right — copy */}
        <div className="px-8 md:px-16 py-16 flex flex-col gap-6 border-t md:border-t-0 border-black/[0.07]">
          <p className="text-base leading-relaxed lowercase text-[#181916]/65 max-w-md">
            viet-owned. matcha-obsessed. we started as a pop-up because we
            wanted to do something we actually cared about — specialty matcha,
            done right, without the pretension.
          </p>
          <p className="text-base leading-relaxed lowercase text-[#181916]/65 max-w-md">
            every drink is made to order. every pop-up is a little different.
            we're serious about the matcha. less serious about everything else.
          </p>
          <p className="text-base leading-relaxed lowercase text-[#181916]/65 max-w-md">
            find us in richmond, dc, norfolk — and wherever else the summer takes us.
          </p>

          <div className="pt-4 border-t border-black/[0.07] flex items-center gap-8">
            <a
              href="https://www.instagram.com/kyrumatcha/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest hover:opacity-50 transition-opacity"
            >
              @kyrumatcha ↗
            </a>
            <a
              href="https://www.tiktok.com/@kyrukev"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-70 transition-opacity"
            >
              @kyrukev ↗
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}
