export default function Order() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] min-h-screen">

      {/* Header */}
      <div className="border-b border-black/[0.07] px-8 md:px-16 py-16 md:py-24">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 mb-4">ceremonial grade</p>
        <h1 className="font-sans text-5xl md:text-7xl font-medium lowercase tracking-[-0.04em] leading-[0.9]">
          order<br />matcha
        </h1>
      </div>

      {/* Two-col body */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-black/[0.07]">

        {/* Left — info */}
        <div className="px-8 md:px-16 py-14 md:border-r border-black/[0.07] flex flex-col gap-8 border-b md:border-b-0">
          <p className="text-base leading-relaxed lowercase text-[#181916]/60 max-w-sm">
            we source <strong className="font-medium text-[#181916]/80">KAI ceremonial matcha</strong> — a single-origin ceremonial grade we actually stand behind. deep umami, no bitterness, incredibly smooth.
          </p>
          <p className="text-base leading-relaxed lowercase text-[#181916]/60 max-w-sm">
            fill out the order form and we'll follow up directly to confirm quantity, shipping, and payment.
          </p>

          <div className="border-t border-black/[0.07] pt-8 space-y-2">
            <p className="font-mono text-[9px] uppercase tracking-widest opacity-30">what to expect</p>
            {[
              'ceremonial grade, single-origin',
              'ships within 1–3 business days',
              'minimum 1 tin',
              'questions? dm @kyrumatcha',
            ].map((item) => (
              <p key={item} className="font-mono text-[10px] uppercase tracking-widest opacity-40">— {item}</p>
            ))}
          </div>
        </div>

        {/* Right — CTA */}
        <div className="px-8 md:px-16 py-14 flex flex-col justify-between gap-10">
          <p className="font-mono text-[9px] uppercase tracking-widest opacity-25">
            form opens in a new tab
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://forms.gle/y4TgUshBGLF54e1T8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between border border-black/80 px-8 py-5 font-mono text-[11px] uppercase tracking-widest hover:bg-[#181916] hover:text-white transition-colors group"
            >
              fill out the order form
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="https://www.instagram.com/kyrumatcha/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between border border-black/15 px-8 py-5 font-mono text-[11px] uppercase tracking-widest opacity-40 hover:opacity-80 transition-opacity group"
            >
              or dm us on instagram
              <span>↗</span>
            </a>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-widest opacity-20">
            @kyrumatcha · serious matcha, unserious people
          </p>
        </div>
      </div>

    </main>
  );
}
