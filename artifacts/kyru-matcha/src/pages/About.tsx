export default function About() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] overflow-x-hidden">

      {/* ── HERO — poster layout, 3 photos ──────────────────────── */}
      <section className="relative overflow-hidden bg-white" style={{ minHeight: '100vh' }}>

        {/* "kyru." — nempel top-left */}
        <div aria-hidden="true"
          className="absolute font-display lowercase leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(5rem,16vw,18rem)', top: '-0.1em', left: '-0.04em', zIndex: 2, color: '#181916' }}>
          kyru.
        </div>

        {/* "about." — ghosted bottom-right */}
        <div aria-hidden="true"
          className="absolute font-display lowercase leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(4rem,12vw,14rem)', bottom: '-0.06em', right: '-0.03em', opacity: 0.07, zIndex: 2, color: '#181916' }}>
          about.
        </div>

        {/* ── Photo 1 — dominant, center-left, tall portrait ── */}
        <div className="absolute overflow-hidden"
          style={{ top: '12%', left: '22%', width: 'clamp(200px,30vw,460px)', transform: 'rotate(-2deg)', zIndex: 5 }}>
          <div style={{ aspectRatio: '3/4' }}>
            <img src="/images/about-3.webp" alt="" fetchPriority="high" decoding="async"
              className="w-full h-full object-cover" />
          </div>
          {/* caption tape */}
          <p className="font-mono text-[8px] uppercase tracking-widest opacity-30 mt-1 pl-[2px]">
            the team · pop-up vol. iv
          </p>
        </div>

        {/* ── Photo 2 — upper-right, medium, opposite tilt ── */}
        <div className="absolute overflow-hidden"
          style={{ top: '8%', right: '6%', width: 'clamp(160px,22vw,320px)', transform: 'rotate(2.5deg)', zIndex: 4 }}>
          <div style={{ aspectRatio: '4/5' }}>
            <img src="/images/about-5.webp" alt="" fetchPriority="high" decoding="async"
              className="w-full h-full object-cover" />
          </div>
          <p className="font-mono text-[8px] uppercase tracking-widest opacity-30 mt-1 text-right pr-[2px]">
            richmond, va
          </p>
        </div>

        {/* ── Photo 3 — lower-right, small, stacked below #2 ── */}
        <div className="absolute overflow-hidden"
          style={{ bottom: '10%', right: '9%', width: 'clamp(130px,16vw,240px)', transform: 'rotate(-1.8deg)', zIndex: 4 }}>
          <div style={{ aspectRatio: '1/1' }}>
            <img src="/images/about-7.webp" alt="" loading="lazy" decoding="async"
              className="w-full h-full object-cover" />
          </div>
          <p className="font-mono text-[8px] uppercase tracking-widest opacity-30 mt-1 pl-[2px]">
            07.25.26
          </p>
        </div>

        {/* ── Scattered text — flyer labels ── */}

        {/* vertical side label */}
        <p className="absolute font-mono text-[9px] uppercase tracking-widest opacity-25 pointer-events-none select-none"
          style={{ top: '40%', left: '9%', zIndex: 4, writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
          viet-owned · matcha-obsessed
        </p>

        {/* bold pull quote — mid-left open space */}
        <p className="absolute font-serif italic pointer-events-none select-none"
          style={{ top: '58%', left: '8%', zIndex: 4, fontSize: 'clamp(1rem,1.6vw,1.4rem)', opacity: 0.5, maxWidth: 200, lineHeight: 1.35, transform: 'rotate(-1.5deg)' }}>
          "serious matcha,<br/>unserious people."
        </p>

        {/* year stamp — floats near photo gap */}
        <p className="absolute font-mono text-[10px] uppercase tracking-[0.2em] opacity-20 pointer-events-none select-none"
          style={{ top: '30%', left: '54%', zIndex: 4, transform: 'rotate(90deg)', transformOrigin: 'left top', whiteSpace: 'nowrap' }}>
          est. 2023
        </p>

        {/* cities — lower-left open space */}
        <p className="absolute font-mono text-[9px] uppercase tracking-widest opacity-20 pointer-events-none select-none"
          style={{ bottom: '18%', left: '8%', zIndex: 4 }}>
          richmond · dc · norfolk
        </p>

        {/* ✳ accent mark */}
        <span className="absolute font-sans font-bold text-2xl opacity-[0.07] pointer-events-none select-none"
          style={{ top: '50%', left: '20%', zIndex: 2 }}>✳</span>

      </section>

      {/* ── STATS — scattered baseline ───────────────────────────── */}
      <section className="border-t border-black/[0.07] overflow-hidden relative px-8 md:px-14 py-12">
        {/* Ghost word behind */}
        <span aria-hidden="true" className="absolute right-0 bottom-0 font-display lowercase leading-none opacity-[0.03] pointer-events-none select-none"
          style={{ fontSize: 'clamp(8rem,20vw,20rem)' }}>pop-up</span>

        <div className="relative z-10 flex flex-wrap items-end gap-x-12 gap-y-6">
          <div style={{ transform: 'rotate(-1.2deg)', marginBottom: '1rem' }}>
            <p className="font-display lowercase leading-none tracking-[-0.05em]"
              style={{ fontSize: 'clamp(3rem,10vw,9rem)' }}>10+</p>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-25 mt-2">pop-ups</p>
          </div>
          <div style={{ transform: 'rotate(0.8deg)', marginBottom: '3.5rem' }}>
            <p className="font-display lowercase leading-none tracking-[-0.05em]"
              style={{ fontSize: 'clamp(1.8rem,5vw,5rem)' }}>2023</p>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-25 mt-2">founded</p>
          </div>
          <div style={{ transform: 'rotate(-0.5deg)', marginBottom: '2rem' }}>
            <p className="font-display lowercase leading-none tracking-[-0.05em]"
              style={{ fontSize: 'clamp(2.5rem,7vw,7rem)' }}>3</p>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-25 mt-2">states</p>
          </div>
          <div style={{ transform: 'rotate(1.5deg)' }}>
            <p className="font-display lowercase leading-none tracking-[-0.05em]"
              style={{ fontSize: 'clamp(4rem,13vw,12rem)' }}>∞</p>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-25 mt-2">cups poured</p>
          </div>
        </div>
      </section>

      {/* ── STORY — chaos spread ──────────────────────────────────── */}
      <section className="border-t border-black/[0.07] border-b relative overflow-hidden px-8 md:px-14 py-16">

        {/* Headline — tilted, big */}
        <div style={{ transform: 'rotate(-0.6deg)', marginLeft: '1%' }} className="mb-14 relative z-10">
          <h1 className="font-display lowercase tracking-[-0.05em] leading-[0.85]"
            style={{ fontSize: 'clamp(2.8rem,7vw,8rem)' }}>
            started as a feeling.<br />turned into a thing.
          </h1>
        </div>

        {/* Photo — floats right, overlapping */}
        <div className="absolute overflow-hidden hidden md:block"
          style={{ top: '8%', right: '5%', width: 'clamp(180px,22vw,320px)', transform: 'rotate(2deg)', zIndex: 3 }}>
          <div style={{ aspectRatio: '3/4' }}>
            <img src="/images/about-1.webp" alt="" loading="lazy" decoding="async"
              className="w-full h-full object-cover" />
          </div>
          <p className="font-mono text-[8px] uppercase tracking-widest opacity-25 mt-1">kyru matcha team</p>
        </div>

        {/* Copy — staggered, not a column */}
        <div className="relative z-10 max-w-lg mb-10" style={{ transform: 'rotate(0.4deg)', marginLeft: '4%' }}>
          <p className="font-mono text-[8px] uppercase tracking-widest opacity-25 mb-4">our thing</p>
          <p className="text-lg leading-relaxed lowercase text-[#181916]/60">
            kyru is viet-owned and obsessed with specialty matcha. we started as a pop-up
            because we wanted to make something we actually cared about — not a brand,
            not a concept — just really good matcha, made to order, in places we love.
          </p>
        </div>

        {/* Pull quote — off-axis, big */}
        <div className="relative z-10 mb-10" style={{ transform: 'rotate(-1.1deg)', marginLeft: '10%', maxWidth: '55%' }}>
          <p className="font-serif italic text-[#181916]/30 leading-snug"
            style={{ fontSize: 'clamp(1.4rem,2.5vw,2.8rem)' }}>
            "the people behind it are the same ones at the table."
          </p>
        </div>

        <div className="relative z-10 max-w-md" style={{ transform: 'rotate(0.3deg)', marginLeft: '2%' }}>
          <p className="text-base leading-relaxed lowercase text-[#181916]/40">
            small on purpose. ceremonial grade, whisked to order — we'd rather do fewer
            pop-ups and do them right than chase volume.
          </p>
        </div>

        {/* Socials — bottom right drift */}
        <div className="relative z-10 flex items-center gap-8 mt-12 justify-end pr-[4%]"
          style={{ transform: 'rotate(-0.4deg)' }}>
          <a href="https://www.instagram.com/kyrumatcha/" target="_blank" rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest hover:opacity-50 transition-opacity">
            @kyrumatcha ↗
          </a>
          <a href="https://www.tiktok.com/@kyrukev" target="_blank" rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-70 transition-opacity">
            @kyrukev ↗
          </a>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden px-8 md:px-16 py-20">
        <p className="font-display lowercase tracking-[-0.05em] leading-[0.85] text-[#181916]/08 absolute inset-0 flex items-center pl-8 pointer-events-none select-none"
          style={{ fontSize: 'clamp(4rem,12vw,14rem)' }} aria-hidden="true">
          see you.
        </p>
        <div style={{ transform: 'rotate(-0.8deg)', marginLeft: '5%' }}>
          <p className="font-display lowercase tracking-[-0.05em] leading-[0.85] relative z-10"
            style={{ fontSize: 'clamp(3rem,9vw,10rem)' }}>
            see you<br />out there.
          </p>
        </div>
        <p className="font-serif italic text-base text-[#181916]/25 leading-snug mt-8 ml-auto mr-[6%] max-w-[200px] text-right"
          style={{ transform: 'rotate(1deg)' }}>
          "find us when you least expect it."
        </p>
      </div>

    </main>
  );
}
