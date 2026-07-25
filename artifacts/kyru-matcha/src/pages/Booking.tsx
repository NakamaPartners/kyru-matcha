const services = [
  { num: '01', label: 'pop-up appearances',  sub: 'markets, festivals, storefronts' },
  { num: '02', label: 'brand activations',   sub: 'collabs, drops, launches' },
  { num: '03', label: 'private events',      sub: 'workshops, tastings, gatherings' },
  { num: '04', label: 'wholesale inquiry',   sub: 'ongoing supply & partnerships' },
];

export default function Booking() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh] border-b border-black/[0.07]">

        {/* Left — type */}
        <div className="flex flex-col justify-between px-10 md:px-16 pt-14 pb-12 md:border-r border-black/[0.07]">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-30">
            booking · collabs · events
          </p>

          <div>
            <h1
              className="font-display lowercase tracking-[-0.05em] leading-[0.85]"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 10rem)' }}
            >
              let's work<br />together.
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-[#181916]/40 leading-snug max-w-md mt-10">
              "if you think we'd be a good fit —<br />we probably are."
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.instagram.com/kyrumatcha/"
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center justify-between bg-[#181916] text-white px-7 py-5 hover:bg-black transition-colors max-w-xs"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest">dm @kyrumatcha</span>
              <span className="font-mono group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <p className="font-mono text-[9px] uppercase tracking-widest opacity-20">
              virginia born · raised · always moving
            </p>
          </div>
        </div>

        {/* Right — photo */}
        <div className="hidden md:block relative min-h-full">
          <img
            src="/images/booking-hero.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '60% 50%' }}
          />
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="border-b border-black/[0.07]">
        <div className="px-10 md:px-16 py-10 border-b border-black/[0.07] flex items-baseline justify-between">
          <h2 className="font-display lowercase tracking-[-0.04em]" style={{ fontSize: 'clamp(1.8rem,4vw,4rem)' }}>
            what we do.
          </h2>
          <p className="font-mono text-[9px] uppercase tracking-widest opacity-25 hidden md:block">
            4 services
          </p>
        </div>

        {services.map((s) => (
          <div
            key={s.num}
            className="border-b border-black/[0.07] px-10 md:px-16 py-8 flex items-center gap-8 group hover:bg-[#F9F8F5] transition-colors"
          >
            <span className="font-mono text-[9px] opacity-20 shrink-0 w-6">{s.num}</span>
            <div className="flex-1">
              <p className="font-sans text-xl md:text-2xl font-medium lowercase tracking-tight">{s.label}</p>
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-25 mt-1">{s.sub}</p>
            </div>
            <span className="font-mono text-sm opacity-0 group-hover:opacity-40 transition-opacity">→</span>
          </div>
        ))}
      </section>

      {/* ── PRICING ──────────────────────────────────────────────── */}
      <section className="border-b border-black/[0.07]">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left — headline */}
          <div className="px-10 md:px-16 py-14 md:border-r border-black/[0.07] border-b md:border-b-0 flex flex-col justify-between gap-12">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-25 mb-6">
                read before you dm
              </p>
              <h2
                className="font-display lowercase tracking-[-0.05em] leading-[0.85]"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)' }}
              >
                here's<br />how it<br />works.
              </h2>
            </div>
            <p className="font-serif italic text-lg text-[#181916]/35 leading-relaxed max-w-xs">
              "no decks, no proposals — just a dm and we'll figure it out."
            </p>
          </div>

          {/* Right — receipt */}
          <div className="px-10 md:px-16 py-14 flex flex-col gap-0">
            <div className="flex items-baseline justify-between pb-6 border-b border-black/[0.12]">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">booking fee</span>
              <span className="font-sans font-medium tracking-tight" style={{ fontSize: 'clamp(2rem,4vw,4.5rem)' }}>
                $200 <span className="text-base opacity-30">flat</span>
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
                <span className="font-sans text-sm lowercase text-[#181916]/55">{item}</span>
              </div>
            ))}

            <div className="mt-6 flex items-start gap-3 px-4 py-4 bg-[#F9F8F5]">
              <span className="font-mono text-[10px] opacity-35 shrink-0 mt-[1px]">*</span>
              <p className="font-mono text-[9px] uppercase tracking-wide opacity-35 leading-relaxed">
                +$50 if event is over 30 miles from Richmond, VA 23294
              </p>
            </div>

            <p className="font-mono text-[9px] uppercase tracking-wide opacity-20 leading-relaxed mt-5">
              On-site beverages billed separately unless pre-paid.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2">

        <div className="px-10 md:px-16 py-16 md:border-r border-black/[0.07] border-b md:border-b-0 flex flex-col justify-between gap-10">
          <h2
            className="font-display lowercase tracking-[-0.05em] leading-[0.85]"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6.5rem)' }}
          >
            reach<br />out.
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-base leading-relaxed lowercase text-[#181916]/50 max-w-sm">
              we're a small team and we move fast. dm us on instagram and we'll
              figure out the rest together.
            </p>
            <p className="font-sans text-sm leading-relaxed lowercase text-[#181916]/35 max-w-sm">
              for formal inquiries — agency, wholesale, large-scale events — email works too.
            </p>
          </div>
          <p className="font-serif italic text-[#181916]/20 text-lg">
            we're open to interesting things.
          </p>
        </div>

        <div className="px-10 md:px-16 py-16 flex flex-col justify-center gap-4">
          <p className="font-mono text-[9px] uppercase tracking-widest opacity-20 mb-2">
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
            className="group flex items-center justify-between border border-black/15 px-8 py-5 hover:border-black/40 transition-colors"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest opacity-40">kyrumatcha@gmail.com</span>
            <span className="font-mono opacity-20 group-hover:opacity-50 transition-opacity">↗</span>
          </a>
        </div>
      </section>

    </main>
  );
}
