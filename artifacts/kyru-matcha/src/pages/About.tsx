export default function About() {
  return (
    <main className="pt-32 pb-32 px-6 md:px-16 max-w-5xl mx-auto">
      {/* header */}
      <div className="mb-20">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-4">
          our thing
        </p>
        <h1 className="font-sans text-5xl md:text-7xl font-medium lowercase tracking-tight leading-[0.9]">
          we're kyru
        </h1>
      </div>

      {/* two-col layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* photo */}
        <div className="aspect-[3/4] overflow-hidden bg-[#F1EFE8]">
          <img
            src="/images/candle-shelf.jpg"
            alt="kyru matcha at District Candle Lab"
            className="w-full h-full object-cover"
          />
        </div>

        {/* text */}
        <div className="flex flex-col gap-10 md:pt-8">
          <p className="text-base leading-relaxed lowercase text-[#181916]/70 max-w-sm">
            viet-owned. matcha-obsessed. we started as a pop-up because we
            wanted to do something we actually cared about — specialty matcha,
            done right, without the pretension.
          </p>
          <p className="text-base leading-relaxed lowercase text-[#181916]/70 max-w-sm">
            every drink is made to order. every pop-up is a little different.
            we're serious about the matcha. less serious about everything else.
          </p>
          <p className="text-base leading-relaxed lowercase text-[#181916]/70 max-w-sm">
            find us in richmond, dc, norfolk — and wherever else the summer
            takes us.
          </p>

          <div className="border-t border-[#181916]/10 pt-8 space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">
              say hi
            </p>
            <a
              href="https://www.instagram.com/kyrumatcha/"
              target="_blank"
              rel="noreferrer"
              className="block font-mono text-sm lowercase tracking-wide hover:opacity-50 transition-opacity"
            >
              @kyrumatcha ↗
            </a>
          </div>
        </div>
      </div>

      {/* second photo full-width */}
      <div className="mt-24 w-full aspect-[16/9] overflow-hidden bg-[#F1EFE8]">
        <img
          src="/images/kyru-outdoor.jpg"
          alt="kyru pop-up setup"
          className="w-full h-full object-cover"
        />
      </div>

      {/* newsletter */}
      <div className="mt-24 border-t border-[#181916]/10 pt-16 max-w-sm">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-6">
          get first dibs on pop-ups
        </p>
        <form className="flex gap-0">
          <input
            type="email"
            placeholder="your email"
            className="flex-1 border border-[#181916]/20 px-4 py-3 font-mono text-xs lowercase bg-transparent placeholder-[#181916]/30 focus:outline-none focus:border-[#181916]/60"
          />
          <button
            type="submit"
            className="border border-l-0 border-[#181916]/20 px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#181916] hover:text-white transition-colors"
          >
            →
          </button>
        </form>
      </div>
    </main>
  );
}
