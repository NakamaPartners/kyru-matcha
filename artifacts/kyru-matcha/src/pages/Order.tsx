export default function Order() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] min-h-screen">

      {/* ── Hero header ─────────────────────────────────────────── */}
      <div className="border-b border-black/[0.07] px-8 md:px-16 pt-16 pb-0 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 mb-4">ceremonial grade · single origin</p>
            <h1 className="font-sans text-6xl md:text-8xl font-medium lowercase tracking-[-0.05em] leading-[0.85]">
              order<br />matcha
            </h1>
          </div>
          {/* Large decorative type — KAI */}
          <div
            className="font-sans font-medium lowercase tracking-[-0.05em] leading-none select-none pointer-events-none text-[#181916]/[0.04]"
            style={{ fontSize: 'clamp(120px, 18vw, 240px)' }}
            aria-hidden="true"
          >
            kai
          </div>
        </div>

        {/* Pull quote */}
        <div className="border-t border-black/[0.07] py-8">
          <p className="font-serif italic text-2xl md:text-3xl text-[#181916]/60 max-w-xl leading-snug">
            "the matcha that got us into all this."
          </p>
        </div>
      </div>

      {/* ── Two-col body ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] border-b border-black/[0.07]">

        {/* Left — story + specs */}
        <div className="px-8 md:px-16 py-14 md:border-r border-black/[0.07] flex flex-col gap-10 border-b md:border-b-0">
          <p className="text-lg leading-relaxed lowercase text-[#181916]/55 max-w-md">
            we source <strong className="font-semibold text-[#181916]/80">KAI ceremonial matcha</strong> — the one
            we've been using since the beginning and still haven't found a reason to switch.
            deep umami, no bitterness, incredibly smooth.
          </p>

          <p className="text-base leading-relaxed lowercase text-[#181916]/45 max-w-md">
            fill out the order form and we'll follow up directly.
            we'll confirm quantity, talk shipping, sort payment — no storefront drama.
          </p>

          {/* Spec grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-black/[0.07] pt-8 max-w-sm">
            {[
              ['grade',    'ceremonial'],
              ['origin',   'single-origin'],
              ['shipping', '1–3 business days'],
              ['minimum',  '1 tin'],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="font-mono text-[9px] uppercase tracking-widest opacity-25">{k}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest mt-1">{v}</p>
              </div>
            ))}
          </div>

          {/* Nami aside */}
          <div className="border-t border-black/[0.07] pt-6">
            <p className="font-mono text-[9px] uppercase tracking-widest opacity-20 mb-2">also worth trying</p>
            <a
              href="https://namimatcha.com"
              target="_blank" rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest opacity-35 hover:opacity-70 transition-opacity"
            >
              nami matcha · 15% off with code <strong>KEVIN32625</strong> ↗
            </a>
          </div>
        </div>

        {/* Right — CTA */}
        <div className="px-8 md:px-16 py-14 flex flex-col gap-6">
          <p className="font-mono text-[9px] uppercase tracking-widest opacity-25">
            opens in a new tab — we follow up within 24h
          </p>

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
            className="group flex items-center justify-between border border-black/15 px-8 py-5 hover:border-black/40 transition-colors"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest opacity-40">or dm @kyrumatcha</span>
            <span className="font-mono opacity-30 group-hover:opacity-60 transition-opacity">↗</span>
          </a>

          {/* Vertical spacer + ambient note */}
          <div className="mt-auto pt-16">
            <p className="font-serif italic text-[#181916]/25 text-xl">questions? just ask.</p>
          </div>
        </div>
      </div>

    </main>
  );
}
