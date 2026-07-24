import { useState } from "react";
import { Link } from "react-router-dom";

// Every photo used exactly ONCE across the entire site
const P = {
  // visual section — 3 photos only
  v_drink:   "/images/sc_658925107.jpg",    // 4-cup flat lay, sunlit — hero matcha shot
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
          className="hero-letter select-none pointer-events-none font-sans font-medium lowercase tracking-[-0.05em] leading-[0.72] text-[48vw] -mt-[11vw] md:-mt-[4vw] -ml-[1.5vw]">
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
          className="hero-letter select-none pointer-events-none font-sans font-medium lowercase tracking-[-0.05em] leading-[0.85] text-[32vw] -mb-[2vw] text-right whitespace-nowrap">
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

/* ─── Intro ─────────────────────────────────────────────────── */
function Intro() {
  return (
    <section className="border-b border-black/[0.07]">

      {/* Top text strip */}
      <div className="border-b border-black/[0.07] px-6 md:px-12 pt-12 pb-10">
        <h2
          className="font-sans font-medium lowercase tracking-[-0.05em] leading-[0.82] select-none"
          style={{ fontSize: 'clamp(52px, 8.2vw, 140px)' }}
        >
          specialty matcha.<br />made to order.<br />pop-up only.
        </h2>
        <p className="font-serif italic text-lg md:text-xl text-[#181916]/40 leading-relaxed max-w-lg mt-8">
          "we show up, we set up, we pour — and when it's gone, it's gone."
        </p>
      </div>

      {/* Three-video triptych */}
      <div className="grid grid-cols-3">
        {['intro-v1.mp4', 'intro-v2.mp4', 'intro-v3.mp4'].map((file, i) => (
          <div
            key={i}
            className={`relative overflow-hidden ${i < 2 ? 'border-r border-black/[0.07]' : ''}`}
            style={{ aspectRatio: '9/16' }}
          >
            <video
              src={`/images/${file}`}
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom label strip */}
      <div className="flex items-center justify-between px-8 md:px-16 py-5 border-t border-black/[0.07]">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-25">viet-owned · matcha-obsessed</p>
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-25">richmond · dc · norfolk</p>
      </div>

    </section>
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
  { src: P.v_drink, name: 'white rabbit matcha',  available: true, href: '/events' },
  { src: P.v_whisk, name: 'white rabbit hojicha',  available: true, href: '/events' },
  { src: P.v_life,  name: 'the make up',           available: true, href: '/events' },
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
            <div className="px-6 py-6 border-t border-black/[0.07] flex flex-col gap-4">
              {/* Name + availability badge */}
              <div className="flex items-start justify-between gap-3">
                <p className="font-sans text-xl font-medium lowercase tracking-tight leading-tight">{col.name}</p>
                {col.available && (
                  <span className="font-mono text-[8px] uppercase tracking-widest border border-black/25 px-2 py-1 shrink-0 mt-0.5">
                    available
                  </span>
                )}
              </div>
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-30 -mt-1">on the pop-up menu</p>
              <Link
                to={col.href}
                className="inline-flex items-center justify-between border border-black/20 px-4 py-2.5 font-mono text-[9px] uppercase tracking-widest hover:bg-[#181916] hover:text-white hover:border-[#181916] transition-colors"
              >
                find a pop-up <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Collab ────────────────────────────────────────────────── */
const COLLAB_IMGS = [
  "/images/collab-1.jpg",
  "/images/collab-2.jpg",
  "/images/collab-3.jpg",
  "/images/collab-4.jpg",
  "/images/collab-5.jpg",
];

function Collab() {
  // duplicate for seamless loop
  const strip = [...COLLAB_IMGS, ...COLLAB_IMGS];
  return (
    <section className="border-t border-black/[0.07] overflow-hidden">

      {/* Label row — inline with the strip, no separate header block */}
      <div className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-black/[0.07]">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-35">collab</p>
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-20">we make things with people we like</p>
      </div>

      {/* Continuous horizontal film strip */}
      <div className="overflow-hidden" style={{ height: '56vh', minHeight: 320 }}>
        <div
          className="flex h-full w-max"
          style={{ animation: 'collab-scroll 28s linear infinite' }}
        >
          {strip.map((src, i) => (
            <div
              key={i}
              className="h-full flex-none border-r border-black/[0.07]"
              style={{ width: 'auto', aspectRatio: '3/4' }}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Now Playing ───────────────────────────────────────────── */
function NowPlaying() {
  return (
    <a
      href="https://open.spotify.com/playlist/2LVtZJETaWrxMSQkN8q1u6?si=bcca59165f944082"
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between px-8 md:px-16 py-5 bg-[#181916] text-white border-t border-white/[0.07] hover:bg-[#222] transition-colors"
    >
      <div className="flex items-center gap-4">
        {/* Animated bars icon */}
        <span className="flex items-end gap-[3px] h-4 shrink-0">
          {[1, 1.5, 0.8, 1.3].map((h, i) => (
            <span
              key={i}
              className="w-[3px] bg-white/50 rounded-sm"
              style={{
                height: `${h * 10}px`,
                animation: `bar-bounce ${0.6 + i * 0.15}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </span>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/35">currently playing</p>
          <p className="font-sans text-sm font-medium lowercase tracking-tight text-white/80 mt-0.5">
            the kyru playlist — v.1
          </p>
        </div>
      </div>
      <span className="font-mono text-xs text-white/25 group-hover:text-white/60 transition-colors">
        open spotify ↗
      </span>
    </a>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer className="border-t border-black/[0.07] px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-start">
      {/* Brand */}
      <div>
        <img src="/images/kyru-icon.png" alt="kyru" className="w-12 h-12 object-contain mb-6" />
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">© 2026 kyru matcha</p>
        <p className="font-sans text-sm opacity-35 lowercase mt-1">serious matcha, unserious people.</p>
      </div>

      {/* Social */}
      <div className="flex flex-col gap-3">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-30 mb-1">follow along</p>
        <a href="https://www.instagram.com/kyrumatcha/" target="_blank" rel="noreferrer"
          className="font-mono text-xs lowercase tracking-wide opacity-50 hover:opacity-90 transition-opacity">
          @kyrumatcha · instagram ↗
        </a>
        <a href="https://www.tiktok.com/@kyrukev" target="_blank" rel="noreferrer"
          className="font-mono text-xs lowercase tracking-wide opacity-50 hover:opacity-90 transition-opacity">
          @kyrukev · tiktok ↗
        </a>
      </div>

      {/* Email signup */}
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
      <Intro />
      <Visual />
      <Collab />
      <NowPlaying />
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        .animate-ticker { animation: ticker 22s linear infinite; will-change: transform; backface-visibility: hidden; }
        @keyframes bar-bounce {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1); }
        }
        @keyframes collab-scroll {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        @media (min-width: 768px) {
          .hero-letter { font-size: min(35vw, 50vh); }
        }
        /* kyru SVG mock sizing — matches hero-letter proportions */
        .kyru-mock svg {
          height: calc(48vw * 0.75);
          width:  calc(48vw * 0.75 * (820 / 340));
        }
        @media (min-width: 768px) {
          .kyru-mock svg {
            height: calc(min(35vw, 50vh) * 0.75);
            width:  calc(min(35vw, 50vh) * 0.75 * (820 / 340));
          }
        }
      `}} />
    </div>
  );
}
