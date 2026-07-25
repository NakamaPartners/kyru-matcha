export default function Order() {
  return (
    <main className="text-[#181916] pt-[72px] min-h-screen">

      {/* ── Hero header ─────────────────────────────────────────── */}
      <div className="border-b border-black/[0.07] grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '72vh' }}>

        {/* Left — white panel, all content lives here */}
        <div className="relative flex flex-col justify-between px-8 md:px-14 pt-12 pb-10 overflow-hidden">

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
      <div className="relative px-8 md:px-14 py-16 overflow-hidden border-b border-black/[0.07]">

        {/* Story block */}
        <div className="relative z-10 max-w-lg mb-16" style={{ marginLeft: '3%' }}>
          <p className="text-lg leading-relaxed lowercase text-[#181916]/55">
            we source <strong className="font-semibold text-[#181916]">kai ceremonial matcha</strong> — the one
            we've been using since day one and still haven't found a reason to switch.
            deep umami, no bitterness, incredibly smooth.
          </p>
        </div>

        {/* Spec cluster */}
        <div className="relative z-10 mb-20 ml-[8%] flex flex-wrap gap-x-14 gap-y-6">
          <div>
            <p className="font-sans font-medium text-2xl lowercase tracking-tight">ceremonial grade</p>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <p className="font-sans font-medium text-2xl lowercase tracking-tight">single-origin</p>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <p className="font-sans font-medium text-xl lowercase tracking-tight opacity-60">ships 1–3 days</p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <p className="font-sans font-medium text-xl lowercase tracking-tight opacity-60">min. 1 tin</p>
          </div>
        </div>

        {/* Process note — pulled right, small */}
        <p className="relative z-10 text-sm leading-relaxed lowercase text-[#181916]/40 max-w-xs mb-14"
           style={{ marginLeft: 'auto', marginRight: '5%' }}>
          fill out the form — we confirm quantity, talk shipping, sort payment.
          no storefront drama.
        </p>

        {/* CTAs — misaligned intentionally */}
        <div className="relative z-10 flex flex-col gap-4 max-w-md" style={{ marginLeft: '4%' }}>
          <a
            href="https://forms.gle/y4TgUshBGLF54e1T8"
            target="_blank" rel="noreferrer"
            className="group flex items-center justify-between bg-[#181916] text-white px-8 py-6 hover:bg-black transition-colors"
            
          >
            <span className="font-mono text-[11px] uppercase tracking-widest">fill out the order form</span>
            <span className="font-mono text-lg group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="https://www.instagram.com/kyrumatcha/"
            target="_blank" rel="noreferrer"
            className="group flex items-center justify-between border border-black/15 px-8 py-5 hover:border-black/40 transition-colors self-end w-[88%]"
            
          >
            <span className="font-mono text-[11px] uppercase tracking-widest opacity-40">or dm @kyrumatcha</span>
            <span className="font-mono opacity-50 group-hover:opacity-60 transition-opacity">↗</span>
          </a>
        </div>

        

        

      </div>

    </main>
  );
}
