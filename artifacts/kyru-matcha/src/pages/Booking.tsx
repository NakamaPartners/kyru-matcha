const services = [
  { num: '01', label: 'pop-up appearances',  sub: 'markets · festivals · storefronts', size: 'clamp(2rem,4.5vw,5.5rem)' },
  { num: '02', label: 'brand activations',   sub: 'collabs · drops · launches',        size: 'clamp(1.6rem,3.5vw,4.2rem)' },
  { num: '03', label: 'private events',      sub: 'workshops · tastings · gatherings', size: 'clamp(1.8rem,4vw,4.8rem)'  },
  { num: '04', label: 'wholesale inquiry',   sub: 'ongoing supply & partnerships',      size: 'clamp(1.4rem,2.8vw,3.4rem)' },
];

export default function Booking() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_44%] min-h-[88vh] border-b border-black/[0.07]">

        {/* Left — type pushing the column */}
        <div className="flex flex-col justify-between px-8 md:px-14 pt-12 pb-10 md:border-r border-black/[0.07] overflow-hidden">

          <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-25">
            booking · collabs · events
          </p>

          {/* H1 that slightly oversteps its grid lane */}
          <div style={{ marginLeft: '-0.04em' }}>
            <h1
              className="font-display lowercase tracking-[-0.05em] leading-[0.82]"
              style={{ fontSize: 'clamp(4rem, 9.5vw, 12rem)' }}
            >
              let's work<br />together.
            </h1>

            {/* Pull quote — offset slightly, small rotation */}
            <p
              className="font-serif italic text-lg md:text-xl text-[#181916]/40 leading-snug max-w-sm mt-10"
              style={{ transform: 'rotate(-0.8deg)', transformOrigin: 'left center' }}
            >
              "if you think we'd be a good fit —<br />we probably are."
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://www.instagram.com/kyrumatcha/"
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center justify-between bg-[#181916] text-white px-7 py-5 hover:bg-black transition-colors self-start min-w-[260px]"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest">dm @kyrumatcha</span>
              <span className="font-mono group-hover:translate-x-1 transition-transform ml-6">→</span>
            </a>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-18">
              virginia born · raised · always moving
            </p>
          </div>
        </div>

        {/* Right — photo */}
        <div className="hidden md:block relative">
          <img
            src="/images/booking-hero.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '60% 50%' }}
          />
          {/* Subtle left edge fade */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ── SERVICES — typographic scale variation ────────────────── */}
      <section className="border-b border-black/[0.07]">

        {/* Header row */}
        <div className="px-8 md:px-14 pt-10 pb-8 border-b border-black/[0.07] flex items-baseline justify-between">
          <h2
            className="font-display lowercase tracking-[-0.04em] leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 5.5rem)' }}
          >
            what we do.
          </h2>
          <p className="font-mono text-[8px] uppercase tracking-widest opacity-20 hidden md:block">
            four services
          </p>
        </div>

        {/* Service rows — each name at a different scale */}
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`border-b border-black/[0.07] px-8 md:px-14 py-7 flex items-center gap-6 group hover:bg-[#F9F8F5] transition-colors ${i % 2 === 1 ? 'md:pl-24' : ''}`}
          >
            <span className="font-mono text-[8px] opacity-15 shrink-0 w-5 hidden md:block">{s.num}</span>
            <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:gap-6">
              <p
                className="font-display lowercase tracking-[-0.04em] leading-none"
                style={{ fontSize: s.size }}
              >
                {s.label}
              </p>
              <p className="font-mono text-[8px] uppercase tracking-widest opacity-25 mt-1 md:mt-0">{s.sub}</p>
            </div>
            <span className="font-mono text-sm opacity-0 group-hover:opacity-35 transition-opacity shrink-0">→</span>
          </div>
        ))}
      </section>

      {/* ── PRICING ──────────────────────────────────────────────── */}
      <section className="border-b border-black/[0.07] relative overflow-hidden">

        {/* Ghost $200 */}
        <div
          aria-hidden="true"
          className="absolute select-none pointer-events-none font-sans font-medium leading-none hidden md:block"
          style={{ fontSize: 'clamp(8rem,24vw,22rem)', bottom: '-0.05em', right: '-0.01em', opacity: 0.03, lineHeight: 1 }}
        >
          $200
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2">

          {/* Left */}
          <div className="px-8 md:px-14 py-14 md:border-r border-black/[0.07] border-b md:border-b-0 flex flex-col justify-between gap-12">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-22 mb-6">
                read before you dm
              </p>
              <h2
                className="font-display lowercase tracking-[-0.05em] leading-[0.84]"
                style={{ fontSize: 'clamp(2.8rem, 6.5vw, 8rem)' }}
              >
                here's<br />how it<br />works.
              </h2>
            </div>
            <p
              className="font-serif italic text-lg text-[#181916]/30 leading-relaxed max-w-xs"
              style={{ transform: 'rotate(-1deg)', transformOrigin: 'left bottom' }}
            >
              "no decks, no proposals — just a dm and we'll figure it out."
            </p>
          </div>

          {/* Right — receipt */}
          <div className="px-8 md:px-14 py-14 flex flex-col gap-0">
            <div className="flex items-baseline justify-between pb-6 border-b border-dashed border-black/[0.12]">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-35">booking fee</span>
              <span className="font-sans font-medium tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem,4.5vw,5rem)' }}>
                $200 <span className="text-base opacity-28">flat</span>
              </span>
            </div>

            {[
              'up to 2 hrs beverage service',
              'custom drink preparation',
              'cart setup & breakdown',
              'marketing materials',
              'travel expenses',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-4 border-b border-black/[0.05]">
                <span className="font-mono text-[8px] opacity-15">—</span>
                <span className="font-sans text-sm lowercase text-[#181916]/50">{item}</span>
              </div>
            ))}

            <div className="mt-6 flex items-start gap-3 px-4 py-4 bg-[#F9F8F5]">
              <span className="font-mono text-[10px] opacity-30 shrink-0 mt-[1px]">*</span>
              <p className="font-mono text-[9px] uppercase tracking-wide opacity-30 leading-relaxed">
                +$50 if event is over 30 miles from Richmond, VA 23294
              </p>
            </div>

            <p className="font-mono text-[9px] uppercase tracking-wide opacity-18 leading-relaxed mt-4">
              On-site beverages billed separately unless pre-paid.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2">

        <div className="px-8 md:px-14 py-16 md:border-r border-black/[0.07] border-b md:border-b-0 flex flex-col justify-between gap-8 overflow-hidden">
          <h2
            className="font-display lowercase tracking-[-0.05em] leading-[0.83]"
            style={{ fontSize: 'clamp(3rem, 7vw, 9rem)', marginLeft: '-0.03em' }}
          >
            reach<br />out.
          </h2>
          <div className="flex flex-col gap-4 max-w-sm">
            <p className="font-sans text-base leading-relaxed lowercase text-[#181916]/50">
              we're a small team and we move fast. dm us on instagram and we'll figure out the rest together.
            </p>
            <p className="font-sans text-sm leading-relaxed lowercase text-[#181916]/30">
              for formal inquiries — agency, wholesale, large-scale — email works too.
            </p>
          </div>
          <p className="font-serif italic text-[#181916]/18 text-lg">
            we're open to interesting things.
          </p>
        </div>

        <div className="px-8 md:px-14 py-16 flex flex-col justify-center gap-4">
          <p className="font-mono text-[9px] uppercase tracking-widest opacity-18 mb-2">
            fastest response via dm
          </p>
          <a
            href="https://www.instagram.com/kyrumatcha/"
            target="_blank" rel="noreferrer"
            className="group flex items-center justify-between bg-[#181916] text-white px-8 py-6 hover:bg-black transition-colors"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest">dm @kyrumatcha</span>
            <span className="font-mono text-lg group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="mailto:kyrumatcha@gmail.com"
            className="group flex items-center justify-between border border-black/12 px-8 py-5 hover:border-black/35 transition-colors"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest opacity-35">kyrumatcha@gmail.com</span>
            <span className="font-mono opacity-18 group-hover:opacity-45 transition-opacity">↗</span>
          </a>
        </div>
      </section>

    </main>
  );
}
