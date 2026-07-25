export default function About() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] overflow-x-hidden">

      {/* ── HERO COLLAGE — flyer spread ─────────────────────────── */}
      <section className="relative overflow-hidden bg-white" style={{ minHeight: '100vh' }}>

        {/* Big "kyru." top-left, bleeds off */}
        <div aria-hidden="true"
          className="absolute font-display lowercase leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(6rem,18vw,20rem)', top: '-0.08em', left: '-0.04em', opacity: 1, zIndex: 2, color: '#181916' }}>
          kyru.
        </div>

        {/* Big "about." bottom-right, bleeds off */}
        <div aria-hidden="true"
          className="absolute font-display lowercase leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(5rem,14vw,17rem)', bottom: '-0.06em', right: '-0.03em', opacity: 0.08, zIndex: 2, color: '#181916' }}>
          about.
        </div>

        {/* ── Photos — scattered, pinboard feel ── */}

        {/* 1 — top-center, portrait, slight CCW tilt */}
        <div className="absolute overflow-hidden shadow-sm"
          style={{ top: '9%', left: '28%', width: 'clamp(140px,18vw,280px)', transform: 'rotate(-2.5deg)', zIndex: 3 }}>
          <div style={{ aspectRatio: '3/4' }}>
            <img src="/images/about-2.webp" alt="" fetchPriority="high" decoding="async"
              className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 2 — upper-right, large portrait, slight CW */}
        <div className="absolute overflow-hidden shadow-sm"
          style={{ top: '5%', right: '7%', width: 'clamp(170px,22vw,340px)', transform: 'rotate(1.8deg)', zIndex: 3 }}>
          <div style={{ aspectRatio: '3/4' }}>
            <img src="/images/about-3.webp" alt="" fetchPriority="high" decoding="async"
              className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 3 — mid-left, small square, strong tilt */}
        <div className="absolute overflow-hidden shadow-sm"
          style={{ top: '38%', left: '12%', width: 'clamp(110px,14vw,210px)', transform: 'rotate(-4deg)', zIndex: 3 }}>
          <div style={{ aspectRatio: '1/1' }}>
            <img src="/images/about-4.webp" alt="" loading="lazy" decoding="async"
              className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 4 — center-right, landscape, slight tilt */}
        <div className="absolute overflow-hidden shadow-sm"
          style={{ top: '40%', left: '38%', width: 'clamp(180px,26vw,400px)', transform: 'rotate(2.2deg)', zIndex: 3 }}>
          <div style={{ aspectRatio: '4/3' }}>
            <img src="/images/about-5.webp" alt="" loading="lazy" decoding="async"
              className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 5 — lower-left, large portrait */}
        <div className="absolute overflow-hidden shadow-sm"
          style={{ bottom: '8%', left: '16%', width: 'clamp(150px,20vw,300px)', transform: 'rotate(-1.5deg)', zIndex: 3 }}>
          <div style={{ aspectRatio: '3/4' }}>
            <img src="/images/about-6.webp" alt="" loading="lazy" decoding="async"
              className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 6 — lower-right, portrait, CW tilt */}
        <div className="absolute overflow-hidden shadow-sm"
          style={{ bottom: '5%', right: '10%', width: 'clamp(140px,18vw,270px)', transform: 'rotate(3deg)', zIndex: 3 }}>
          <div style={{ aspectRatio: '3/4' }}>
            <img src="/images/about-7.webp" alt="" loading="lazy" decoding="async"
              className="w-full h-full object-cover" />
          </div>
        </div>

        {/* ── Scattered text labels ── */}

        <p className="absolute font-mono text-[9px] uppercase tracking-widest opacity-30 pointer-events-none"
          style={{ top: '28%', left: '13%', zIndex: 4, transform: 'rotate(-90deg)', transformOrigin: 'left center', whiteSpace: 'nowrap' }}>
          viet-owned · matcha-obsessed
        </p>

        <p className="absolute font-mono text-[9px] uppercase tracking-widest opacity-25 pointer-events-none"
          style={{ top: '22%', right: '8%', zIndex: 4, textAlign: 'right' }}>
          since 2023
        </p>

        <p className="absolute font-serif italic text-xl md:text-2xl pointer-events-none"
          style={{ top: '53%', left: '13%', zIndex: 4, opacity: 0.55, maxWidth: 220, lineHeight: 1.3, transform: 'rotate(-1deg)' }}>
          "serious matcha, unserious people."
        </p>

        <p className="absolute font-mono text-[9px] uppercase tracking-widest opacity-20 pointer-events-none"
          style={{ bottom: '22%', right: '8%', zIndex: 4 }}>
          richmond · dc · norfolk
        </p>

        {/* Asterisk decorations — like the flyer refs */}
        <span className="absolute font-sans font-bold text-3xl opacity-[0.06] pointer-events-none select-none"
          style={{ top: '32%', left: '46%', zIndex: 2 }}>✳</span>
        <span className="absolute font-sans font-bold text-4xl opacity-[0.05] pointer-events-none select-none"
          style={{ bottom: '30%', left: '4%', zIndex: 2 }}>✳</span>

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
