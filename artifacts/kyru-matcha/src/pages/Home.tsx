import { useState } from "react";

const Images = {
  logo: "/images/image_1_1784859145526.png",
  drinks:    "/images/drinks-hero.jpg",
  tray:      "/images/tray-lineup.jpg",
  hojicha:   "/images/hojicha-cup.jpg",
  candle:    "/images/candle-shelf.jpg",
  sign:      "/images/sign-drinks.jpg",
  outdoor:   "/images/kyru-outdoor.jpg",
  g1: "/images/650807209_17966637591034187_4600880481792221201_n_1784859145526.jpg",
  g2: "/images/689893832_17930135811272011_505547332068594853_n_1784859145526.jpg",
  g3: "/images/701156664_17889320865483743_5410504869034541725_n_1784859145526.jpg",
  g4: "/images/713664623_17905608681430231_6947000135873404220_n_1784859145526.jpg",
  g5: "/images/731111343_17895541896483743_3598329880635149232_n_1784859145526.jpg",
  g6: "/images/742953955_17954256912189611_6899181722383635748_n_1784859145526.jpg",
};

/* ─── Nav ─────────────────────────────────────────────────── */
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white border-b border-black/8">
      <a href="#hero" className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-50 hover:opacity-90 transition-opacity">
        kyru matcha
      </a>
      <nav style={{ display: "flex", gap: "2.5rem" }}>
        {[
          { label: "menu",    href: "#menu" },
          { label: "events",  href: "#events" },
          { label: "links",   href: "#links" },
        ].map(({ label, href }) => (
          <a key={href} href={href} className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-35 hover:opacity-80 transition-opacity">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="relative h-[100dvh] flex flex-col justify-between overflow-hidden bg-white text-[#181916]">
        <h1 className="sr-only">kyru matcha — not a brand, just us talking.</h1>

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
            <a href="#menu" className="font-mono text-xs lowercase tracking-widest hover:opacity-60 inline-block mt-6 transition-opacity">
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

          <div className="hidden md:block absolute bottom-[14%] left-[38%] font-serif italic text-2xl lg:text-3xl whitespace-nowrap pointer-events-none rotate-[-4deg]"
            style={{ opacity: 0.75 }}>
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

/* ─── Ticker ─────────────────────────────────────────────── */
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

/* ─── Photo wall ──────────────────────────────────────────── */
function PhotoWall() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3">
      {/* large hero shot */}
      <div className="col-span-2 aspect-[16/9] overflow-hidden">
        <img src={Images.drinks} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
      </div>
      {/* tall portrait */}
      <div className="row-span-2 aspect-[3/4] overflow-hidden hidden md:block">
        <img src={Images.tray} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
      </div>
      {/* two squares */}
      <div className="aspect-square overflow-hidden">
        <img src={Images.hojicha} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
      </div>
      <div className="aspect-square overflow-hidden">
        <img src={Images.candle} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
      </div>
      {/* wide sign shot */}
      <div className="col-span-2 md:col-span-2 aspect-[16/7] overflow-hidden">
        <img src={Images.sign} alt="" className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700" />
      </div>
      <div className="aspect-square overflow-hidden">
        <img src={Images.outdoor} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
      </div>
    </section>
  );
}

/* ─── Menu ─────────────────────────────────────────────────── */
function MenuSection() {
  const drinks = [
    { name: "white rabbit matcha",  tag: "signature", note: "ceremonial-grade · oat milk · white rabbit syrup",   img: Images.g1 },
    { name: "white rabbit hojicha", tag: "signature", note: "roasted hojicha · oat milk · white rabbit syrup",     img: Images.g2 },
    { name: "the make up",          tag: "seasonal",  note: "changes each pop-up — ask us when you get there",     img: Images.g3 },
  ];

  return (
    <section id="menu" className="border-t border-black/8">
      <div className="px-8 md:px-16 py-14 flex items-end justify-between">
        <h2 className="font-sans text-5xl md:text-7xl font-medium lowercase tracking-[-0.04em] leading-[0.85]">menu</h2>
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-30 hidden md:block">pop-up menu · 2026</p>
      </div>

      {drinks.map((d, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 border-t border-black/8">
          <div className={`aspect-[4/3] overflow-hidden bg-[#F1EFE8] ${i % 2 === 1 ? "md:order-2" : ""}`}>
            <img src={d.img} alt={d.name} className="w-full h-full object-cover" />
          </div>
          <div className={`flex flex-col justify-center px-10 md:px-14 py-12 ${i % 2 === 1 ? "md:order-1" : ""}`}>
            <span className="font-mono text-[9px] uppercase tracking-widest opacity-30 mb-3">{d.tag}</span>
            <h3 className="font-sans text-3xl md:text-4xl font-medium lowercase tracking-[-0.02em] mb-4">{d.name}</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 leading-loose">{d.note}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

/* ─── Events ─────────────────────────────────────────────── */
function EventsSection() {
  const events = [
    { date: "07.25.26", city: "Richmond, VA",    venue: "District Candle Lab · Mosaic District", time: "11am – 5pm (or sold out)", confirmed: true },
    { date: "08.09.26", city: "Washington, DC",  venue: "TBA",                                   time: "TBA",                      confirmed: false },
    { date: "08.23.26", city: "Norfolk, VA",     venue: "TBA",                                   time: "TBA",                      confirmed: false },
  ];

  return (
    <section id="events" className="border-t border-black/8">
      <div className="px-8 md:px-16 py-14">
        <h2 className="font-sans text-5xl md:text-7xl font-medium lowercase tracking-[-0.04em] leading-[0.85] mb-2">events</h2>
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">summer 2026</p>
      </div>

      {/* hero photo */}
      <div className="w-full aspect-[16/6] overflow-hidden border-t border-black/8">
        <img src={Images.sign} alt="kyru pop-up" className="w-full h-full object-cover object-center" />
      </div>

      {events.map((e, i) => (
        <div key={i} className="border-t border-black/8 px-8 md:px-16 py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
          <div className="md:w-36 flex-shrink-0">
            <p className="font-mono text-sm tracking-widest opacity-60">{e.date}</p>
          </div>
          <div className="flex-1">
            <h3 className="font-sans text-2xl md:text-3xl font-medium lowercase tracking-tight">{e.city}</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mt-1">{e.venue} · {e.time}</p>
          </div>
          <span className={`font-mono text-[9px] uppercase tracking-widest border px-2 py-1 flex-shrink-0 ${e.confirmed ? "border-black/50" : "border-black/15 opacity-35"}`}>
            {e.confirmed ? "confirmed" : "coming soon"}
          </span>
        </div>
      ))}
    </section>
  );
}

/* ─── Links (Linktree) ───────────────────────────────────── */
function LinksSection() {
  const links = [
    {
      label: "order KAI ceremonial matcha",
      sub:   "fill out the order form",
      href:  "https://forms.gle/y4TgUshBGLF54e1T8",
      icon:  "🍵",
    },
    {
      label: "booking inquiries",
      sub:   "pop-up collabs & events — dm or email",
      href:  "https://www.instagram.com/kyrumatcha/",
      icon:  "📅",
    },
    {
      label: "amazon storefront",
      sub:   "matcha & pop-up essentials we actually use",
      href:  "https://www.amazon.com/shop/kyrumatcha",
      icon:  "📦",
    },
    {
      label: "15% off nami matcha",
      sub:   "use code KEVIN32625 at checkout",
      href:  "https://namimatcha.com",
      icon:  "✦",
    },
    {
      label: "currently playing — v.1",
      sub:   "the kyru playlist on spotify",
      href:  "https://open.spotify.com/playlist/2LVtZJETaWrxMSQkN8q1u6?si=bcca59165f944082",
      icon:  "♪",
    },
    {
      label: "@kyrumatcha",
      sub:   "instagram",
      href:  "https://www.instagram.com/kyrumatcha/",
      icon:  "↗",
    },
    {
      label: "@kyrukev",
      sub:   "tiktok",
      href:  "https://www.tiktok.com/@kyrukev",
      icon:  "↗",
    },
  ];

  return (
    <section id="links" className="border-t border-black/8">
      <div className="px-8 md:px-16 py-14">
        <h2 className="font-sans text-5xl md:text-7xl font-medium lowercase tracking-[-0.04em] leading-[0.85] mb-2">links</h2>
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">everything in one place</p>
      </div>

      <div className="border-t border-black/8">
        {links.map((l, i) => (
          <a
            key={i}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-8 md:px-16 py-7 border-b border-black/8 hover:bg-[#F1EFE8] transition-colors group"
          >
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

/* ─── Footer ─────────────────────────────────────────────── */
function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer className="border-t border-black/8 px-8 md:px-16 py-16 flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start">
      <div>
        <img src={Images.logo} alt="kyru" className="w-10 h-10 object-contain opacity-60 mb-6 grayscale mix-blend-multiply" />
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">© 2026 kyru matcha</p>
        <p className="font-sans text-sm opacity-40 lowercase mt-1">serious matcha, unserious people.</p>
      </div>

      <div className="max-w-sm w-full">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-5">get first dibs on pop-ups</p>
        {done ? (
          <p className="font-mono text-xs uppercase tracking-widest opacity-50">noted. we'll be in touch ♡</p>
        ) : (
          <form className="flex" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input
              type="email" required placeholder="your email"
              className="flex-1 border border-black/20 px-4 py-3 font-mono text-xs lowercase bg-transparent placeholder-black/25 focus:outline-none focus:border-black/50 transition-colors"
            />
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

/* ─── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-white text-[#181916] overflow-x-hidden">
      <Nav />
      <Hero />
      <Ticker />
      <PhotoWall />
      <MenuSection />
      <EventsSection />
      <LinksSection />
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-ticker {
          animation: ticker 22s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      ` }} />
    </div>
  );
}
