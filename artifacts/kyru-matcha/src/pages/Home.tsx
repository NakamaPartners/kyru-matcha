import { useState, useEffect, useRef } from "react";

// Every photo used exactly ONCE across the entire site
const P = {
  // visual section — 3 photos only
  v_drink:   "/images/sc_649894030.jpg",   // purple swirl matcha — striking close-up
  v_whisk:   "/images/689893832.jpg",      // whisking hands — craft/process
  v_life:    "/images/692380241.jpg",      // flowers + matcha — lifestyle, different vibe
  // logo
  logo: "/images/image_1_1784859145526.png",
};

/* ─── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero">
      <div className="relative h-[100dvh] flex flex-col justify-between overflow-hidden bg-white text-[#181916]">
        <h1 className="sr-only">kyru matcha</h1>

        <div aria-hidden="true"
          className="select-none pointer-events-none font-sans font-medium lowercase tracking-[-0.05em] leading-[0.72] text-[48vw] md:text-[35vw] -mt-[11vw] md:-mt-[8vw] -ml-[1.5vw]">
          kyru
        </div>

        <div className="relative flex-1 px-6 md:px-12 lg:px-16 py-6">
          <div className="absolute top-[44%] left-[8%] md:left-[12%] max-w-[16rem] md:max-w-xs">
            <p className="font-sans text-sm md:text-base leading-relaxed lowercase" style={{ opacity: 0.55 }}>
              viet-owned. matcha-obsessed. slightly too online.
              serious matcha, unserious people.
            </p>
            <a href="#catalogue" className="font-mono text-xs lowercase tracking-widest hover:opacity-60 inline-block mt-6 transition-opacity">
              explore menu <span className="text-lg leading-none">→</span>
            </a>
          </div>
          <div className="absolute top-[4%] right-[6%] md:right-[14%] text-left">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest leading-loose" style={{ opacity: 0.4 }}>
              matcha,&nbsp;&nbsp;&nbsp;&nbsp;drinks,<br />
              pop-ups,&nbsp;&nbsp;good&nbsp;people<br />
              &amp;&nbsp;&nbsp;more
            </p>
          </div>
          <div className="absolute bottom-[6%] right-[4%] md:right-[8%] text-left">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest leading-loose" style={{ opacity: 0.4 }}>
              next&nbsp;pop-up<br />
              &nbsp;&nbsp;richmond,&nbsp;va&nbsp;·&nbsp;07.25.26<br />
              &nbsp;&nbsp;&nbsp;&nbsp;11am–5pm&nbsp;(or&nbsp;sold&nbsp;out)
            </p>
          </div>
          <div className="hidden md:block absolute bottom-[14%] left-[38%] font-serif italic text-2xl lg:text-3xl whitespace-nowrap pointer-events-none rotate-[-4deg]" style={{ opacity: 0.75 }}>
            thanks for being here ♡
          </div>
        </div>

        <div aria-hidden="true"
          className="select-none pointer-events-none font-sans font-medium lowercase tracking-[-0.05em] leading-[0.85] text-[32vw] md:text-[35vw] -mb-[2vw] text-right whitespace-nowrap">
          matcha
        </div>
      </div>
    </section>
  );
}

/* ─── Ticker ────────────────────────────────────────────────── */
function Ticker() {
  return (
    <div className="py-3 overflow-hidden bg-[#181916] text-white flex items-center">
      <div className="animate-ticker flex whitespace-nowrap font-mono text-xs uppercase tracking-widest w-max">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-6">NEXT POP-UP: RICHMOND, VA · 07.25.26 · 11AM–5PM</span>
            <span className="opacity-30">///</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Photo wall ────────────────────────────────────────────── */
function PhotoWall() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3">
      <div className="col-span-2 aspect-[16/9] overflow-hidden">
        <img src={P.pw1} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
      </div>
      <div className="row-span-2 overflow-hidden hidden md:block" style={{ aspectRatio: 'auto' }}>
        <img src={P.pw2} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" style={{ minHeight: '100%' }} />
      </div>
      <div className="aspect-square overflow-hidden">
        <img src={P.pw3} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
      </div>
      <div className="aspect-square overflow-hidden">
        <img src={P.pw4} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
      </div>
      <div className="col-span-2 aspect-[16/7] overflow-hidden">
        <img src={P.pw5} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
      </div>
      <div className="aspect-square overflow-hidden">
        <img src={P.pw6} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
      </div>
    </section>
  );
}

/* ─── Visual spread ─────────────────────────────────────────── */
const COLS = [
  { src: P.v_drink, label: 'matcha',   sub: 'on the pop-up menu' },
  { src: P.v_whisk, label: 'prepared',  sub: 'made to order, every time' },
  { src: P.v_life,  label: 'the vibe',  sub: 'find us when you least expect it' },
];

function Visual() {
  return (
    <section className="border-t border-black/[0.07]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {COLS.map((col, i) => (
          <div key={i} className={`flex flex-col border-black/[0.07] ${i < COLS.length - 1 ? 'md:border-r' : ''} ${i > 0 ? 'border-t md:border-t-0' : ''}`}>

            {/* Photo — tall portrait */}
            <div className="overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src={col.src}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>

            {/* Card footer */}
            <div className="px-6 py-6 border-t border-black/[0.07] flex flex-col gap-3">
              <div>
                <p className="font-sans text-lg font-medium lowercase tracking-tight">{col.label}</p>
                <p className="font-mono text-[9px] uppercase tracking-widest opacity-30 mt-1">{col.sub}</p>
              </div>
              <a
                href="https://www.instagram.com/kyrumatcha/"
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-black/20 px-4 py-2 font-mono text-[9px] uppercase tracking-widest hover:bg-[#181916] hover:text-white hover:border-[#181916] transition-colors self-start"
              >
                find a pop-up →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Collab ────────────────────────────────────────────────── */
const COLLAB_SLIDES = [
  "/images/collab-1.jpg",
  "/images/collab-2.jpg",
  "/images/collab-3.jpg",
  "/images/collab-4.jpg",
  "/images/collab-5.jpg",
];
const COLLAB_DURATION = 3500; // ms per slide

function Collab() {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(Date.now());
  const rafRef = useRef<number>(0);

  const advance = (next: number) => {
    setIdx(next);
    setProgress(0);
    startRef.current = Date.now();
  };

  useEffect(() => {
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(elapsed / COLLAB_DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        advance((idx + 1) % COLLAB_SLIDES.length);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [idx]);

  return (
    <section className="border-t border-black/[0.07]">
      {/* Header row */}
      <div className="flex items-end justify-between px-8 md:px-16 py-10 border-b border-black/[0.07]">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 mb-2">past & present</p>
          <h2 className="font-sans text-5xl md:text-7xl font-medium lowercase tracking-[-0.04em] leading-[0.85]">collab</h2>
        </div>
        <p className="hidden md:block font-mono text-[10px] uppercase tracking-widest opacity-25 text-right max-w-[180px]">
          we make things<br />with people we like
        </p>
      </div>

      {/* Photo area — left: fixed tall portrait, right: advancing slides */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left — static accent: first slide shown as a darker, slightly offset crop */}
        <div
          className="relative overflow-hidden border-b md:border-b-0 md:border-r border-black/[0.07]"
          style={{ height: '70vh', minHeight: 400 }}
        >
          <img
            src={COLLAB_SLIDES[(idx + 2) % COLLAB_SLIDES.length]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
            style={{ transition: 'opacity 600ms ease' }}
          />
          {/* Slide index label */}
          <span className="absolute bottom-5 left-6 font-mono text-[10px] uppercase tracking-widest text-white/30 select-none">
            {String(idx + 1).padStart(2, '0')} / {String(COLLAB_SLIDES.length).padStart(2, '0')}
          </span>
        </div>

        {/* Right — live slide with progress bar */}
        <div
          className="relative overflow-hidden"
          style={{ height: '70vh', minHeight: 400 }}
        >
          {COLLAB_SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: i === idx ? 1 : 0,
                transition: 'opacity 500ms ease',
                zIndex: i === idx ? 1 : 0,
              }}
            />
          ))}

          {/* Progress bar — thin line sweeping across bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-10">
            <div
              className="h-full bg-white/60"
              style={{ width: `${progress * 100}%`, transition: 'width 100ms linear' }}
            />
          </div>

          {/* Tap left/right to navigate */}
          <button
            className="absolute left-0 top-0 h-full w-1/2 z-20 focus:outline-none cursor-w-resize"
            onClick={() => advance((idx - 1 + COLLAB_SLIDES.length) % COLLAB_SLIDES.length)}
            aria-label="Previous"
          />
          <button
            className="absolute right-0 top-0 h-full w-1/2 z-20 focus:outline-none cursor-e-resize"
            onClick={() => advance((idx + 1) % COLLAB_SLIDES.length)}
            aria-label="Next"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Links ─────────────────────────────────────────────────── */
function Links() {
  const links = [
    { label: "order KAI ceremonial matcha",          sub: "fill out the order form",                    href: "https://forms.gle/y4TgUshBGLF54e1T8",                                                                                                icon: "🍵" },
    { label: "booking inquiries",                     sub: "pop-up collabs & events — dm or email",      href: "https://www.instagram.com/kyrumatcha/",                                                                                              icon: "📅" },
    { label: "amazon storefront",                     sub: "matcha & pop-up essentials we actually use", href: "https://www.amazon.com/shop/kyrumatcha",                                                                                             icon: "📦" },
    { label: "15% off nami matcha",                   sub: "use code KEVIN32625 at checkout",            href: "https://namimatcha.com",                                                                                                            icon: "✦"  },
    { label: "currently playing — v.1",               sub: "the kyru playlist on spotify",               href: "https://open.spotify.com/playlist/2LVtZJETaWrxMSQkN8q1u6?si=bcca59165f944082",                                                   icon: "♪"  },
    { label: "@kyrumatcha",                           sub: "instagram",                                  href: "https://www.instagram.com/kyrumatcha/",                                                                                             icon: "↗"  },
    { label: "@kyrukev",                              sub: "tiktok",                                     href: "https://www.tiktok.com/@kyrukev",                                                                                                    icon: "↗"  },
  ];

  return (
    <section id="links" className="border-t border-black/[0.07]">
      <div className="px-8 md:px-16 py-14">
        <h2 className="font-sans text-5xl md:text-7xl font-medium lowercase tracking-[-0.04em] leading-[0.85] mb-2">links</h2>
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">everything in one place</p>
      </div>
      <div className="border-t border-black/[0.07]">
        {links.map((l, i) => (
          <a key={i} href={l.href} target="_blank" rel="noreferrer"
            className="flex items-center justify-between px-8 md:px-16 py-7 border-b border-black/[0.07] hover:bg-[#F9F8F5] transition-colors group">
            <div className="flex items-center gap-6">
              <span className="text-xl w-8 flex-shrink-0 opacity-60">{l.icon}</span>
              <div>
                <p className="font-sans text-lg md:text-xl font-medium lowercase tracking-[-0.01em]">{l.label}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mt-1">{l.sub}</p>
              </div>
            </div>
            <span className="font-mono text-xl opacity-20 group-hover:opacity-60 transition-opacity">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer className="border-t border-black/[0.07] px-8 md:px-16 py-16 flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start">
      <div>
        <img src={P.logo} alt="kyru" className="w-10 h-10 object-contain opacity-50 mb-6 grayscale mix-blend-multiply" />
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">© 2026 kyru matcha</p>
        <p className="font-sans text-sm opacity-35 lowercase mt-1">serious matcha, unserious people.</p>
      </div>
      <div className="max-w-sm w-full">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-5">get first dibs on pop-ups</p>
        {done ? (
          <p className="font-mono text-xs uppercase tracking-widest opacity-50">noted. we'll be in touch ♡</p>
        ) : (
          <form className="flex" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input type="email" required placeholder="your email"
              className="flex-1 border border-black/20 px-4 py-3 font-mono text-xs lowercase bg-transparent placeholder-black/25 focus:outline-none focus:border-black/50 transition-colors" />
            <button type="submit"
              className="border border-l-0 border-black/20 px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#181916] hover:text-white hover:border-[#181916] transition-colors">
              →
            </button>
          </form>
        )}
      </div>
    </footer>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-white text-[#181916] overflow-x-hidden pt-[72px]">
      <Hero />
      <Ticker />
      <Visual />
      <Collab />
      <Links />
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        .animate-ticker { animation: ticker 22s linear infinite; will-change: transform; backface-visibility: hidden; }
      `}} />
    </div>
  );
}
