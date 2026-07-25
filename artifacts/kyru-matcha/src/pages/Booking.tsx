const services = [
  { label: 'pop-up appearances',  sub: 'markets, festivals, storefronts' },
  { label: 'brand activations',   sub: 'collabs, drops, launches' },
  { label: 'private events',      sub: 'workshops, tastings, gatherings' },
  { label: 'wholesale inquiry',   sub: 'ongoing supply & partnerships' },
];

export default function Booking() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] min-h-screen">

      {/* ── Hero header ─────────────────────────────────────────── */}
      <div className="border-b border-black/[0.07] overflow-hidden">
        {/* Split: text left / image right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_42%] min-h-[60vh]">

          {/* Left — headline */}
          <div className="flex flex-col justify-between px-8 md:px-16 pt-16 pb-10 md:border-r border-black/[0.07]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 mb-8">pop-ups · events · collabs</p>
              <h1 className="font-display lowercase tracking-[-0.05em] leading-[0.82] text-[18vw] md:text-[11vw]">
                let's work<br />together
              </h1>
            </div>

            {/* Pull quote pinned to bottom of text col */}
            <div className="mt-12 pt-8 border-t border-black/[0.07]">
              <p className="font-serif italic text-xl md:text-2xl text-[#181916]/50 max-w-md leading-snug">
                "if you think we'd be a good fit — we probably are."
              </p>
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-20 mt-5">
                virginia born · raised · always moving
              </p>
            </div>
          </div>

          {/* Right — photo bleeding to edge */}
          <div className="relative hidden md:block min-h-[60vh]">
            <img
              src="/images/booking-hero.webp"
              alt="kyru matcha cups at a pop-up"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '60% 80%' }}
            />
            {/* thin left-edge fade into white */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ── What we do — service rows ────────────────────────────── */}
      <div className="border-b border-black/[0.07]">
        {services.map((s, i) => (
          <div
            key={i}
            className="border-b border-black/[0.07] px-8 md:px-16 py-7 flex items-center justify-between group hover:bg-[#F9F8F5] transition-colors"
          >
            <div>
              <p className="font-sans text-xl md:text-2xl font-medium lowercase tracking-tight">{s.label}</p>
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-30 mt-1">{s.sub}</p>
            </div>
            <span className="font-mono text-sm opacity-10 group-hover:opacity-40 transition-opacity">→</span>
          </div>
        ))}
      </div>

      {/* ── Booking terms ────────────────────────────────────────── */}
      <div className="border-b border-black/[0.07]">


        {/* Ghost $200 behind everything */}
        <span
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 font-sans font-medium leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(8rem,22vw,18rem)', opacity: 0.03, color: '#181916', lineHeight: 1 }}
        >
          $200
        </span>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* Left — label + headline */}
          <div className="px-8 md:px-16 py-12 md:border-r border-black/[0.07] border-b md:border-b-0 flex flex-col justify-between gap-10">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-30 mb-5">booking inquiries · read before you dm</p>
              <h2 className="font-display text-4xl md:text-5xl lowercase tracking-[-0.04em] leading-[0.9]">
                here's<br />how it<br />works.
              </h2>
            </div>
            <p className="font-serif italic text-lg text-[#181916]/40 leading-relaxed max-w-xs">
              "no decks, no proposals — just a dm and we'll figure it out."
            </p>
          </div>

          {/* Right — receipt-style breakdown */}
          <div className="px-8 md:px-16 py-12 flex flex-col gap-0">

            {/* Fee line */}
            <div className="flex items-baseline justify-between pb-5 border-b border-dashed border-black/[0.12]">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">booking fee</span>
              <span className="font-sans text-3xl font-medium tracking-tight">$200 <span className="text-base opacity-40">flat</span></span>
            </div>

            {/* What's included — dot-leader rows */}
            {[
              'up to 2 hrs beverage service',
              'custom drink preparation',
              'cart setup & breakdown',
              'marketing materials',
              'travel expenses',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 py-3 border-b border-black/[0.05]">
                <span className="font-mono text-[8px] opacity-20">—</span>
                <span className="font-sans text-sm lowercase text-[#181916]/60">{item}</span>
              </div>
            ))}

            {/* Distance footnote */}
            <div className="mt-5 flex items-start gap-3 py-4 px-4 bg-[#F9F8F5]">
              <span className="font-mono text-[10px] opacity-40 mt-[1px] shrink-0">*</span>
              <p className="font-mono text-[9px] uppercase tracking-wide opacity-40 leading-relaxed">
                +$50 if event is over 30 miles from Richmond, VA&nbsp;23294
              </p>
            </div>

            {/* On-site note */}
            <p className="font-mono text-[9px] uppercase tracking-wide opacity-30 leading-relaxed mt-5">
              On-site beverages billed separately unless pre-paid. Additional details sent after submission.
            </p>
          </div>
        </div>
      </div>

      {/* ── Contact split ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-black/[0.07]">

        {/* Left — copy */}
        <div className="px-8 md:px-16 py-14 md:border-r border-black/[0.07] border-b md:border-b-0 flex flex-col gap-6">
          <p className="text-lg leading-relaxed lowercase text-[#181916]/55 max-w-sm">
            we're a small team and we move fast. dm us on instagram and we'll
            figure out the rest together. no decks required.
          </p>
          <p className="text-base leading-relaxed lowercase text-[#181916]/40 max-w-sm">
            for formal inquiries — agency, wholesale, or large-scale events — email works too.
          </p>
        </div>

        {/* Right — CTA */}
        <div className="px-8 md:px-16 py-14 flex flex-col gap-4">
          <p className="font-mono text-[9px] uppercase tracking-widest opacity-25 mb-2">
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
            <span className="font-mono text-[11px] uppercase tracking-widest opacity-40">send an email</span>
            <span className="font-mono opacity-25 group-hover:opacity-60 transition-opacity">↗</span>
          </a>

          <div className="mt-auto pt-12">
            <p className="font-serif italic text-[#181916]/25 text-xl">we're open to interesting things.</p>
          </div>
        </div>
      </div>

    </main>
  );
}
