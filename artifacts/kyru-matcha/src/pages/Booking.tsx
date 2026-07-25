import { Link } from 'react-router-dom';

const services = [
  { label: 'pop-up appearances',  sub: 'markets · festivals · storefronts', size: 'clamp(2.8rem,6vw,8rem)',   pos: { top: '18%',  left: '4%'   }, rotate: '-1.5deg' },
  { label: 'brand activations',   sub: 'collabs · drops · launches',        size: 'clamp(2rem,4.2vw,5.8rem)', pos: { top: '36%',  right: '5%'  }, rotate: '1.8deg'  },
  { label: 'private events',      sub: 'workshops · tastings · gatherings', size: 'clamp(2.4rem,5vw,7rem)',   pos: { bottom: '24%', left: '12%' }, rotate: '-0.8deg' },
  { label: 'wholesale inquiry',   sub: 'ongoing supply & partnerships',      size: 'clamp(1.6rem,3.2vw,4.4rem)', pos: { bottom: '10%', right: '4%' }, rotate: '2.5deg' },
];

export default function Booking() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] overflow-x-hidden">

      {/* ── HERO — nempel poster ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-black/[0.07]" style={{ minHeight: '92vh' }}>

        {/* "let's" — nempel top-left */}
        <div aria-hidden="true"
          className="absolute font-display lowercase leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(5rem,18vw,20rem)', top: 0, left: 0, transform: 'translate(-2%, -18%)', color: '#181916', zIndex: 2 }}>
          let's
        </div>

        {/* "together." — nempel bottom-right, ghosted */}
        <div aria-hidden="true"
          className="absolute font-display lowercase leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(3rem,11vw,13rem)', bottom: 0, right: 0, transform: 'translate(2%, 16%)', color: '#181916', opacity: 0.08, zIndex: 2 }}>
          together.
        </div>

        {/* Photo — bleeds right edge */}
        <div className="absolute hidden md:block top-0 right-0 h-full" style={{ width: '42%', zIndex: 1 }}>
          <img
            src="/images/booking-hero.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
            style={{ objectPosition: '60% 50%' }}
          />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        </div>

        {/* ── Scattered text — clear zone between the two words ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>

          {/* ① "work with us" — mid-left, just below let's descenders */}
          <div className="absolute hidden md:block"
            style={{ top: '40%', left: '5%', transform: 'rotate(-1deg)' }}>
            <p className="font-display lowercase tracking-[-0.04em] leading-[0.88]"
              style={{ fontSize: 'clamp(2.2rem,7vw,9rem)' }}>
              work<br />with us.
            </p>
          </div>

          {/* ② mono tag — upper-center */}
          <p className="absolute hidden md:block font-mono text-[11px] uppercase tracking-widest opacity-30"
            style={{ top: '28%', left: '42%' }}>
            pop-ups · events · collabs
          </p>

          {/* ③ pull quote — center-right open zone */}
          <p className="absolute hidden md:block font-serif italic opacity-50 leading-snug"
            style={{ top: '48%', left: '40%', maxWidth: '22rem', fontSize: 'clamp(1rem,1.5vw,1.4rem)', transform: 'rotate(-2deg)' }}>
            "if you think we'd be a good fit —<br />we probably are."
          </p>

          {/* ④ location stamp — lower-left */}
          <p className="absolute font-mono text-[10px] uppercase tracking-[0.2em] opacity-20 pointer-events-none"
            style={{ bottom: '22%', left: '5%' }}>
            virginia born · raised · always moving
          </p>

          {/* ⑤ CTA — lower-left, pointer-events on */}
          <div className="absolute pointer-events-auto"
            style={{ bottom: '8%', left: '5%' }}>
            <a
              href="https://www.instagram.com/kyrumatcha/"
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-[#181916] text-white px-7 py-4 font-mono text-[10px] uppercase tracking-widest hover:bg-black transition-colors"
            >
              dm @kyrumatcha
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* ✳ accent */}
          <span className="absolute font-sans font-bold text-3xl opacity-[0.05] select-none pointer-events-none"
            style={{ top: '38%', left: '38%' }}>✳</span>
        </div>

        {/* Mobile headline */}
        <div className="md:hidden px-6 pt-16 pb-10 flex flex-col gap-6">
          <p className="font-mono text-[9px] uppercase tracking-widest opacity-30">pop-ups · events · collabs</p>
          <h1 className="font-display lowercase tracking-[-0.05em] leading-[0.88]" style={{ fontSize: 'clamp(3.5rem,18vw,8rem)' }}>
            let's work<br />together
          </h1>
          <p className="font-serif italic text-lg opacity-40 leading-snug max-w-xs">
            "if you think we'd be a good fit — we probably are."
          </p>
          <a
            href="https://www.instagram.com/kyrumatcha/"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#181916] text-white px-6 py-4 font-mono text-[10px] uppercase tracking-widest self-start mt-2"
          >
            dm @kyrumatcha →
          </a>
        </div>
      </section>

      {/* ── SERVICES — scattered poster callouts ─────────────────── */}
      <section className="relative border-b border-black/[0.07] overflow-hidden" style={{ minHeight: '88vh' }}>

        {/* Ghost "what we do" top-right */}
        <div aria-hidden="true"
          className="absolute font-display lowercase leading-none select-none pointer-events-none hidden md:block"
          style={{ fontSize: 'clamp(4rem,13vw,15rem)', top: '-0.08em', right: '-0.03em', opacity: 0.04, color: '#181916' }}>
          we do.
        </div>

        {/* Section label */}
        <p className="absolute font-mono text-[9px] uppercase tracking-widest opacity-20 hidden md:block"
          style={{ top: '6%', left: '5%', writingMode: 'vertical-rl', letterSpacing: '0.25em' }}>
          services
        </p>

        {/* Desktop: scattered callouts */}
        <div className="hidden md:block">
          {services.map((s, i) => (
            <div key={i} className="absolute" style={{ ...s.pos, transform: `rotate(${s.rotate})` }}>
              <p className="font-display lowercase tracking-[-0.05em] leading-[0.85]"
                style={{ fontSize: s.size }}>
                {s.label}
              </p>
              <p className="font-mono text-[8px] uppercase tracking-widest opacity-30 mt-2">
                {s.sub}
              </p>
            </div>
          ))}

          {/* Separating rule — visual breath */}
          <div className="absolute border-t border-black/[0.07] pointer-events-none hidden md:block"
            style={{ top: '50%', left: '5%', right: '5%' }} />

          {/* ✳ decorations */}
          <span className="absolute font-sans font-bold text-5xl opacity-[0.04] select-none pointer-events-none"
            style={{ top: '52%', left: '50%', transform: 'translate(-50%,-50%)' }}>✳</span>
        </div>

        {/* Mobile: stacked rows */}
        <div className="md:hidden divide-y divide-black/[0.07]">
          {services.map((s, i) => (
            <div key={i} className="px-6 py-8">
              <p className="font-display lowercase tracking-[-0.04em] leading-[0.88] text-[2.2rem]">{s.label}</p>
              <p className="font-mono text-[8px] uppercase tracking-widest opacity-30 mt-2">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING — receipt insert ──────────────────────────────── */}
      <section className="relative border-b border-black/[0.07] overflow-hidden">

        {/* Ghost $200 — massive, behind everything */}
        <div aria-hidden="true"
          className="absolute select-none pointer-events-none font-sans font-medium leading-none"
          style={{ fontSize: 'clamp(10rem,30vw,26rem)', bottom: '-0.05em', right: '-0.02em', opacity: 0.03, color: '#181916', lineHeight: 1 }}>
          $200
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* Left — label + headline, with slight tilt feel */}
          <div className="px-8 md:px-16 py-14 md:border-r border-black/[0.07] border-b md:border-b-0 flex flex-col justify-between gap-10">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-25 mb-6">
                booking inquiries · read before you dm
              </p>
              <h2 className="font-display lowercase tracking-[-0.05em] leading-[0.85]"
                style={{ fontSize: 'clamp(3rem,7vw,9rem)' }}>
                here's<br />how it<br />works.
              </h2>
            </div>

            <div style={{ transform: 'rotate(-1deg)', transformOrigin: 'left bottom' }}>
              <p className="font-serif italic text-xl md:text-2xl text-[#181916]/35 leading-relaxed max-w-xs">
                "no decks, no proposals — just a dm and we'll figure it out."
              </p>
            </div>
          </div>

          {/* Right — receipt, slightly tilted inward */}
          <div className="px-8 md:px-16 py-14 flex flex-col gap-0">

            <div className="flex items-baseline justify-between pb-5 border-b border-dashed border-black/[0.15]">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">booking fee</span>
              <span className="font-sans text-4xl md:text-5xl font-medium tracking-tight">
                $200 <span className="text-lg opacity-35">flat</span>
              </span>
            </div>

            {[
              'up to 2 hrs beverage service',
              'custom drink preparation',
              'cart setup & breakdown',
              'marketing materials',
              'travel expenses',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-black/[0.05]">
                <span className="font-mono text-[8px] opacity-20">—</span>
                <span className="font-sans text-sm lowercase text-[#181916]/55">{item}</span>
              </div>
            ))}

            <div className="mt-6 flex items-start gap-3 py-4 px-4 border border-black/[0.06]">
              <span className="font-mono text-[10px] opacity-35 mt-[1px] shrink-0">*</span>
              <p className="font-mono text-[9px] uppercase tracking-wide opacity-35 leading-relaxed">
                +$50 if event is over 30 miles from Richmond, VA 23294
              </p>
            </div>

            <p className="font-mono text-[9px] uppercase tracking-wide opacity-25 leading-relaxed mt-4">
              On-site beverages billed separately unless pre-paid.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT — reach out ───────────────────────────────────── */}
      <section className="relative border-b border-black/[0.07] overflow-hidden px-8 md:px-16 py-16 md:py-24">

        {/* Ghost "reach out." bottom-right */}
        <div aria-hidden="true"
          className="absolute font-display lowercase leading-none select-none pointer-events-none hidden md:block"
          style={{ fontSize: 'clamp(4rem,11vw,13rem)', bottom: '-0.06em', right: '-0.02em', opacity: 0.05, color: '#181916' }}>
          reach out.
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display lowercase tracking-[-0.05em] leading-[0.85]"
              style={{ fontSize: 'clamp(2.5rem,6vw,7.5rem)' }}>
              let's<br />talk.
            </h2>
            <p className="font-sans text-base leading-relaxed lowercase text-[#181916]/50 max-w-xs">
              we're a small team and we move fast. dm us on instagram and we'll figure out the rest. no decks required.
            </p>
            <p className="font-sans text-sm leading-relaxed lowercase text-[#181916]/35 max-w-xs">
              for formal inquiries — agency, wholesale, large-scale events — email works too.
            </p>
          </div>

          {/* Right — CTAs */}
          <div className="flex flex-col gap-4 md:pt-4">
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
            <p className="font-serif italic text-[#181916]/20 text-xl mt-4">we're open to interesting things.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
