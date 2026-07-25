export default function Order() {
  return (
    <main className="text-[#181916] pt-[72px] min-h-screen">

      {/* ── Hero header ─────────────────────────────────────────── */}
      <div className="border-b border-black/[0.07] grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '72vh' }}>

        {/* Left — white panel, all content lives here */}
        <div className="relative flex flex-col justify-between px-8 md:px-14 pt-12 pb-10 overflow-hidden">

          {/* Ghost "kai" — cursive, fills the dead space */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center select-none pointer-events-none"
            style={{ paddingLeft: '4%' }}
          >
            <span
              className="font-serif italic text-[#181916]"
              style={{
                fontSize: 'clamp(120px, 22vw, 320px)',
                opacity: 0.055,
                lineHeight: 1,
                letterSpacing: '-0.03em',
              }}
            >
              kai
            </span>
          </div>

          {/* Top: label + headline */}
          <div className="relative z-10">
            <h1 className="font-sans text-6xl md:text-7xl font-medium lowercase tracking-[-0.05em] leading-[0.85]">
              order<br />matcha
            </h1>
          </div>

          {/* Bottom: quote + specs */}
          <div className="relative z-10 flex flex-col gap-6">
            <p className="font-serif italic text-xl md:text-2xl text-[#181916]/55 leading-snug max-w-xs">
              "the matcha that got us into all this."
            </p>
            
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
          
        </div>

      </div>

      {/* ── Body — organized chaos ──────────────────────────────── */}
      <div className="relative px-8 md:px-14 py-16 overflow-hidden border-b border-black/[0.07]"
        style={{ backgroundImage: "url('/images/texture-blue-stone.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

        {/* Story block */}
        <div className="relative z-10 max-w-lg mb-16 md:ml-[3%]">
          <p className="text-lg leading-relaxed lowercase text-white/70">
            we source <strong className="font-semibold text-white">kai ceremonial matcha</strong> — the one
            we've been using since day one and still haven't found a reason to switch.
            deep umami, no bitterness, incredibly smooth.
          </p>
        </div>

        {/* Spec cluster */}
        <div className="relative z-10 mb-16 md:ml-[8%] flex flex-wrap gap-x-10 gap-y-5">
          <div>
            <p className="font-sans font-medium text-2xl lowercase tracking-tight text-white">ceremonial grade</p>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <p className="font-sans font-medium text-2xl lowercase tracking-tight text-white">single-origin</p>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <p className="font-sans font-medium text-xl lowercase tracking-tight text-white/55">ships 1–3 days</p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <p className="font-sans font-medium text-xl lowercase tracking-tight text-white/55">min. 1 tin</p>
          </div>
        </div>

        {/* Process note */}
        <p className="relative z-10 text-sm leading-relaxed lowercase text-white/40 max-w-xs mb-14 md:ml-auto md:mr-[5%]">
          fill out the form — we confirm quantity, talk shipping, sort payment.
          no storefront drama.
        </p>

        {/* CTAs */}
        <div className="relative z-10 flex flex-col gap-4 w-full max-w-md md:ml-[4%]">
          <a
            href="https://forms.gle/y4TgUshBGLF54e1T8"
            target="_blank" rel="noreferrer"
            className="group flex items-center justify-between bg-white text-[#181916] px-8 py-6 hover:bg-white/90 transition-colors"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest">fill out the order form</span>
            <span className="font-mono text-lg group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="https://www.instagram.com/kyrumatcha/"
            target="_blank" rel="noreferrer"
            className="group flex items-center justify-between border border-white/25 px-8 py-5 hover:border-white/60 transition-colors"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/50">or dm @kyrumatcha</span>
            <span className="font-mono text-white/50 group-hover:text-white/80 transition-opacity">↗</span>
          </a>
        </div>

        

        

      </div>

    </main>
  );
}
