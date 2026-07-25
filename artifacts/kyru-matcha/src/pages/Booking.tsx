const services = [
  { num: '01', label: 'pop-up appearances',  sub: 'markets · festivals · storefronts', size: 'clamp(2rem,4.5vw,5.5rem)' },
  { num: '02', label: 'brand activations',   sub: 'collabs · drops · launches',        size: 'clamp(1.6rem,3.5vw,4.2rem)' },
  { num: '03', label: 'private events',      sub: 'workshops · tastings · gatherings', size: 'clamp(1.8rem,4vw,4.8rem)'  },
  { num: '04', label: 'wholesale inquiry',   sub: 'ongoing supply & partnerships',      size: 'clamp(1.4rem,2.8vw,3.4rem)' },
];

export default function Booking() {
  return (
    <main className="text-[#181916] pt-[72px] min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_44%] min-h-[88vh] border-b border-black/[0.07]">

        {/* Left — type pushing the column */}
        <div className="flex flex-col justify-between px-8 md:px-14 pt-12 pb-10 md:border-r border-black/[0.07] overflow-hidden">

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
            style={{ objectPosition: '30% 80%' }}
          />
        </div>
      </section>

      {/* ── SERVICES — two-col with photo collage ────────────────── */}
      <section className="border-b border-black/[0.07] grid grid-cols-1 md:grid-cols-[1.1fr_1fr]"
        style={{ backgroundImage: "url('/images/texture-tan.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

        {/* Left — header + services */}
        <div className="px-8 md:px-14 py-14 md:border-r border-black/[0.15]">
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="font-display lowercase tracking-[-0.04em] leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 5.5rem)' }}
            >
              what we do.
            </h2>
            
          </div>

          <div className="flex flex-col gap-8">
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`flex items-baseline gap-6 ${i % 2 === 1 ? 'md:pl-16' : ''}`}
              >
                <div>
                  <p
                    className="font-display lowercase tracking-[-0.04em] leading-none"
                    style={{ fontSize: s.size }}
                  >
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — clean photo stack */}
        <div className="hidden md:flex flex-col gap-6 p-10 justify-center">

          <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img src="/images/svc-collab-cups.webp" alt="" loading="lazy" decoding="async"
              className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-700" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img src="/images/svc-need-matcha.webp" alt="" loading="lazy" decoding="async"
                className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-700" />
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img src="/images/svc-drinks-tray.jpg" alt="" loading="lazy" decoding="async"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
            </div>
          </div>

        </div>
      </section>

      {/* ── PRICING — organized chaos ─────────────────────────────── */}
      <section className="border-b border-black/[0.07] relative overflow-hidden px-8 md:px-14 py-16">

        {/* Headline */}
        <div className="relative z-10 mb-12" style={{ marginLeft: '2%' }}>
          <h2
            className="font-display lowercase tracking-[-0.05em] leading-[0.84]"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 8rem)' }}
          >
            here's<br />how it<br />works.
          </h2>
        </div>

        {/* Price — huge, off-axis, floats right */}
        <div className="relative z-10 flex justify-end mb-10 pr-[5%]">
          <div>
            <p className="font-sans font-medium tracking-tight leading-none" style={{ fontSize: 'clamp(3.5rem, 8vw, 9rem)' }}>
              $200<span className="text-[0.3em] opacity-50 ml-2 align-middle">flat</span>
            </p>
          </div>
        </div>

        {/* Includes list — scattered, not a table */}
        <div className="relative z-10 flex flex-wrap gap-x-10 gap-y-4 mb-14 max-w-2xl" style={{ marginLeft: '6%' }}>
          {[
            ['up to 2 hrs beverage service'],
            ['custom drink preparation'],
            ['cart setup & breakdown'],
            ['marketing materials'],
            ['travel expenses'],
          ].map(([item], i) => (
            <div key={i} className={i % 2 === 1 ? 'mt-3' : ''}>
              <span className="font-mono text-[10px] opacity-70 mr-2">—</span>
              <span className="font-sans text-base lowercase text-[#181916]/80">{item}</span>
            </div>
          ))}
        </div>

        

        {/* Italic quote — lower left, ambient */}
        <p
          className="relative z-10 font-serif italic text-lg text-[#181916]/55 leading-relaxed max-w-xs mt-10"
          
        >
          "no decks, no proposals — just a dm and we'll figure it out."
        </p>

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
            <p className="font-sans text-base leading-relaxed lowercase text-[#181916]/75">
              we're a small team and we move fast. dm us on instagram and we'll figure out the rest together.
            </p>
            <p className="font-sans text-sm leading-relaxed lowercase text-[#181916]/55">
              for formal inquiries — agency, wholesale, large-scale — email works too.
            </p>
          </div>
          <p className="font-serif italic text-[#181916]/45 text-lg">
            we're open to interesting things.
          </p>
        </div>

        <div className="px-8 md:px-14 py-16 flex flex-col justify-center gap-4">
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
            <span className="font-mono opacity-40 group-hover:opacity-45 transition-opacity">↗</span>
          </a>
        </div>
      </section>

    </main>
  );
}
