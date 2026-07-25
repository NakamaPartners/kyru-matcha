export default function Order() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] min-h-screen">

      {/* ── Hero header ─────────────────────────────────────────── */}
      <div className="border-b border-black/[0.07] grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '72vh' }}>

        {/* Left — white panel, all content lives here */}
        <div className="relative flex flex-col justify-between px-8 md:px-14 pt-12 pb-10 overflow-hidden">

          {/* Top: label + headline */}
          <div className="relative z-10">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 mb-5">ceremonial grade · single origin</p>
            <h1 className="font-sans text-6xl md:text-7xl font-medium lowercase tracking-[-0.05em] leading-[0.85]">
              order<br />matcha
            </h1>
          </div>

          {/* Ghost "kai" — left-aligned, vertically centered in dead space */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center select-none pointer-events-none px-8 md:px-14"
          >
            <span
              className="font-sans font-medium lowercase tracking-[-0.05em] leading-none text-[#181916]/[0.055]"
              style={{ fontSize: 'clamp(72px, 9.5vw, 148px)' }}
            >
              kai
            </span>
          </div>

          {/* Bottom: quote + specs */}
          <div className="relative z-10 flex flex-col gap-6">
            <p className="font-serif italic text-xl md:text-2xl text-[#181916]/55 leading-snug max-w-xs">
              "the matcha that got us into all this."
            </p>
            <div className="flex gap-8 border-t border-black/[0.07] pt-5">
              {[['grade','ceremonial'],['origin','okumidori'],['vendor','kai']].map(([k,v]) => (
                <div key={k}>
                  <p className="font-mono text-[8px] uppercase tracking-widest opacity-25">{k}</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest mt-0.5">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — tin photo, full-bleed, dramatic */}
        <div className="relative overflow-hidden" style={{ minHeight: 360 }}>
          <img
            src="/images/kai-tin.webp"
            alt="KAI ceremonial matcha tin"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Left fade into white */}
          <div
            className="absolute inset-y-0 left-0 w-2/5 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)' }}
          />
        </div>

      </div>

      {/* ── Body — organized chaos ──────────────────────────────── */}
      <div className="relative px-8 md:px-14 py-16 overflow-hidden border-b border-black/[0.07]">

        {/* Giant ghost word */}
        <p
          aria-hidden="true"
          className="absolute -right-6 top-4 font-sans font-medium lowercase tracking-[-0.06em] leading-none text-[#181916]/[0.04] select-none pointer-events-none"
          style={{ fontSize: 'clamp(100px, 18vw, 260px)' }}
        >
          order
        </p>

        {/* Story block — big indent, slight tilt */}
        <div className="relative z-10 max-w-lg mb-16" style={{ transform: 'rotate(-0.6deg)', marginLeft: '3%' }}>
          <p className="text-lg leading-relaxed lowercase text-[#181916]/55">
            we source <strong className="font-semibold text-[#181916]">kai ceremonial matcha</strong> — the one
            we've been using since day one and still haven't found a reason to switch.
            deep umami, no bitterness, incredibly smooth.
          </p>
        </div>

        {/* Spec cluster — scattered, not a grid */}
        <div className="relative z-10 mb-20 ml-[8%] flex flex-wrap gap-x-14 gap-y-6">
          <div style={{ transform: 'rotate(1.2deg)' }}>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-20">grade</p>
            <p className="font-sans font-medium text-2xl lowercase tracking-tight">ceremonial</p>
          </div>
          <div style={{ transform: 'rotate(-1.8deg)', marginTop: '1.5rem' }}>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-20">origin</p>
            <p className="font-sans font-medium text-2xl lowercase tracking-tight">single-origin</p>
          </div>
          <div style={{ transform: 'rotate(0.7deg)', marginTop: '0.5rem' }}>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-20">ships</p>
            <p className="font-sans font-medium text-xl lowercase tracking-tight opacity-60">1–3 days</p>
          </div>
          <div style={{ transform: 'rotate(-0.5deg)', marginTop: '2rem' }}>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-20">minimum</p>
            <p className="font-sans font-medium text-xl lowercase tracking-tight opacity-60">1 tin</p>
          </div>
        </div>

        {/* Process note — pulled right, small */}
        <p className="relative z-10 text-sm leading-relaxed lowercase text-[#181916]/40 max-w-xs mb-14"
           style={{ marginLeft: 'auto', transform: 'rotate(0.4deg)', marginRight: '5%' }}>
          fill out the form — we confirm quantity, talk shipping, sort payment.
          no storefront drama.
        </p>

        {/* CTAs — misaligned intentionally */}
        <div className="relative z-10 flex flex-col gap-4 max-w-md" style={{ marginLeft: '4%' }}>
          <p className="font-mono text-[8px] uppercase tracking-widest opacity-20 mb-1">opens in a new tab · we follow up within 24h</p>

          <a
            href="https://forms.gle/y4TgUshBGLF54e1T8"
            target="_blank" rel="noreferrer"
            className="group flex items-center justify-between bg-[#181916] text-white px-8 py-6 hover:bg-black transition-colors"
            style={{ transform: 'rotate(-0.4deg)' }}
          >
            <span className="font-mono text-[11px] uppercase tracking-widest">fill out the order form</span>
            <span className="font-mono text-lg group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="https://www.instagram.com/kyrumatcha/"
            target="_blank" rel="noreferrer"
            className="group flex items-center justify-between border border-black/15 px-8 py-5 hover:border-black/40 transition-colors self-end w-[88%]"
            style={{ transform: 'rotate(0.6deg)' }}
          >
            <span className="font-mono text-[11px] uppercase tracking-widest opacity-40">or dm @kyrumatcha</span>
            <span className="font-mono opacity-30 group-hover:opacity-60 transition-opacity">↗</span>
          </a>
        </div>

        {/* Nami footnote — bottom-right drift */}
        <div className="relative z-10 mt-16 text-right" style={{ transform: 'rotate(-0.5deg)' }}>
          <p className="font-mono text-[8px] uppercase tracking-widest opacity-15 mb-1">also worth trying</p>
          <a
            href="https://namimatcha.com"
            target="_blank" rel="noreferrer"
            className="font-mono text-[9px] uppercase tracking-widest opacity-25 hover:opacity-60 transition-opacity"
          >
            nami matcha · 15% off with code KEVIN32625 ↗
          </a>
        </div>

        {/* Ambient italic — floats lower-left */}
        <p className="font-serif italic text-[#181916]/20 text-2xl absolute bottom-8 left-10 pointer-events-none select-none" style={{ transform: 'rotate(-1.2deg)' }}>
          questions? just ask.
        </p>

      </div>

    </main>
  );
}
