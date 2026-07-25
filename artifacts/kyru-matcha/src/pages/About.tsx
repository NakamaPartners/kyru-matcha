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

      {/* ── STATS — staggered baseline ──────────────────────────── */}
      <section className="border-t border-black/[0.07] overflow-hidden">
        <div className="flex items-end gap-0 border-b border-black/[0.07]">
          {[
            { n: '2023', label: 'founded',     size: '8vw',  pb: '3rem' },
            { n: '10+',  label: 'pop-ups',     size: '13vw', pb: '1rem' },
            { n: '3',    label: 'states',      size: '10vw', pb: '2rem' },
            { n: '∞',    label: 'cups poured', size: '15vw', pb: '0.5rem' },
          ].map((s, i) => (
            <div key={i}
              className="flex-1 px-6 md:px-10 border-r last:border-r-0 border-black/[0.07]"
              style={{ paddingBottom: s.pb, paddingTop: '2rem' }}>
              <p className="font-display lowercase leading-none tracking-[-0.04em]"
                style={{ fontSize: `clamp(2.5rem,${s.size},9rem)` }}>{s.n}</p>
              <p className="font-mono text-[8px] uppercase tracking-widest opacity-25 mt-3">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY — editorial spread ─────────────────────────────── */}
      <section className="border-b border-black/[0.07]">

        {/* Giant pull quote — full width */}
        <div className="px-8 md:px-16 pt-16 pb-10 border-b border-black/[0.07]">
          <h1 className="font-display lowercase tracking-[-0.05em] leading-[0.85]"
            style={{ fontSize: 'clamp(2.8rem,7vw,8rem)' }}>
            started as a feeling.<br />turned into a thing.
          </h1>
        </div>

        {/* Two-column spread */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr]">

          {/* Left — big photo + label */}
          <div className="md:border-r border-black/[0.07] border-b md:border-b-0 relative overflow-hidden"
            style={{ minHeight: 360 }}>
            <img src="/images/about-1.webp" alt="" loading="lazy" decoding="async"
              className="w-full h-full object-cover" style={{ minHeight: 360 }} />
            {/* overlay label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/60">
                kyru matcha team
              </p>
            </div>
          </div>

          {/* Right — copy, scattered */}
          <div className="px-8 md:px-14 py-14 flex flex-col gap-7">

            <p className="font-mono text-[9px] uppercase tracking-widest opacity-30">our thing</p>

            <p className="text-lg leading-relaxed lowercase text-[#181916]/60 max-w-lg">
              kyru is viet-owned and obsessed with specialty matcha. we started as a pop-up
              because we wanted to make something we actually cared about — not a brand,
              not a concept — just really good matcha, made to order, in places we love.
            </p>

            <p className="text-base leading-relaxed lowercase text-[#181916]/40 max-w-lg">
              we're picky about what we pour. ceremonial grade, whisked to order —
              we'd rather do fewer pop-ups and do them right than chase volume.
            </p>

            {/* Scattered mid-quote */}
            <div className="py-5 border-y border-black/[0.07]" style={{ transform: 'rotate(-0.5deg)' }}>
              <p className="font-serif italic text-2xl md:text-3xl text-[#181916]/35 leading-snug max-w-md">
                "the people behind it are the same ones at the table."
              </p>
            </div>

            <p className="text-base leading-relaxed lowercase text-[#181916]/40 max-w-lg">
              small on purpose. we set up the booth, pour the drinks, and pack up at
              the end of the night — every time.
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
      </section>

      {/* ── CLOSING statement ───────────────────────────────────── */}
      <div className="px-8 md:px-16 py-16 md:py-24 flex items-end justify-between gap-6">
        <p className="font-display lowercase tracking-[-0.05em] leading-[0.85] text-[#181916]/10"
          style={{ fontSize: 'clamp(3rem,9vw,10rem)' }}>
          see you<br />out there.
        </p>
        <p className="font-serif italic text-base text-[#181916]/25 text-right max-w-[180px] leading-snug shrink-0 mb-2">
          "find us when you least expect it."
        </p>
      </div>

    </main>
  );
}
