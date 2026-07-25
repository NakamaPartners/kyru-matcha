export default function About() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] min-h-screen">

      {/* ── Hero — one big photo + headline ── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '90vh' }}>

        {/* Left — text */}
        <div className="px-10 md:px-16 py-16 flex flex-col justify-between">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">viet-owned · matcha-obsessed</p>

          <div>
            <h1
              className="font-display lowercase tracking-[-0.05em] leading-[0.85] mb-10"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 9rem)' }}
            >
              kyru.
            </h1>
            <p className="text-lg leading-relaxed lowercase text-[#181916]/55 max-w-sm mb-6">
              we started as a pop-up because we wanted to make something we actually cared about —
              not a brand, not a concept — just really good matcha, made to order, in places we love.
            </p>
            <p className="text-base leading-relaxed lowercase text-[#181916]/35 max-w-sm">
              small on purpose. ceremonial grade, whisked to order. we set up the booth,
              pour the drinks, and pack up at the end of the night — every time.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/kyrumatcha/" target="_blank" rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest hover:opacity-50 transition-opacity">
              @kyrumatcha ↗
            </a>
            <a href="https://www.tiktok.com/@kyrukev" target="_blank" rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-70 transition-opacity">
              @kyrukev ↗
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="relative overflow-hidden" style={{ minHeight: 480 }}>
          <img
            src="/images/about-3.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* ── Second photo + quote ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-black/[0.07]">

        {/* Left — photo */}
        <div className="relative overflow-hidden border-b md:border-b-0 md:border-r border-black/[0.07]" style={{ minHeight: 400 }}>
          <img
            src="/images/about-5.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right — quote + location */}
        <div className="px-10 md:px-16 py-14 flex flex-col justify-center gap-8">
          <p className="font-serif italic leading-snug text-[#181916]/50"
            style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)' }}>
            "serious matcha,<br />unserious people."
          </p>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest opacity-25 mb-1">est. 2023</p>
            <p className="font-mono text-[9px] uppercase tracking-widest opacity-25">richmond · dc · norfolk</p>
          </div>
        </div>
      </section>

    </main>
  );
}
