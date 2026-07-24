import { useState } from "react";

const Photos = [
  "/images/drinks-hero.jpg",
  "/images/tray-lineup.jpg",
  "/images/hojicha-cup.jpg",
  "/images/candle-shelf.jpg",
  "/images/sign-drinks.jpg",
  "/images/kyru-outdoor.jpg",
  "/images/701156664_17889320865483743_5410504869034541725_n_1784859145526.jpg",
  "/images/713664623_17905608681430231_6947000135873404220_n_1784859145526.jpg",
];

function Hero() {
  return (
    <section id="our-thing" className="relative">
      <div className="relative h-[100dvh] flex flex-col justify-between overflow-hidden bg-white text-[#181916]">
        <h1 className="sr-only">kyru matcha — not a brand, just us talking.</h1>

        {/* giant KYRU bleeding off the top-left */}
        <div
          aria-hidden="true"
          className="select-none pointer-events-none font-sans font-medium lowercase tracking-[-0.05em] leading-[0.72] text-[48vw] md:text-[35vw] -mt-[11vw] md:-mt-[8vw] -ml-[1.5vw]"
        >
          kyru
        </div>

        {/* middle band — scattered flyer metadata */}
        <div className="relative flex-1 px-6 md:px-12 lg:px-16 py-6">

          {/* intro copy — mid left */}
          <div className="absolute top-[44%] left-[8%] md:left-[12%] max-w-[16rem] md:max-w-xs">
            <p className="font-sans text-sm md:text-base text-[#181916] leading-relaxed lowercase" style={{ opacity: 0.6 }}>
              we're kyru. viet-owned, matcha-obsessed, and slightly too online.
              serious matcha, unserious people.
            </p>
            <a
              href="/menu"
              className="link-arrow font-mono text-xs lowercase tracking-widest hover:opacity-70 inline-block mt-6 text-[#181916]"
            >
              explore catalogue <span className="text-lg leading-none font-sans">→</span>
            </a>
          </div>

          {/* vendor-list style block — upper right */}
          <div className="absolute top-[4%] right-[6%] md:right-[14%] text-left text-[#181916]">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest leading-loose" style={{ opacity: 0.5 }}>
              matcha,&nbsp;&nbsp;&nbsp;&nbsp;drinks,
              <br />
              pop-ups,&nbsp;&nbsp;good&nbsp;people
              <br />
              &amp;&nbsp;&nbsp;more
            </p>
          </div>

          {/* next pop-up — lower right */}
          <div className="absolute bottom-[6%] right-[4%] md:right-[8%] text-left text-[#181916]">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest leading-loose" style={{ opacity: 0.5 }}>
              next&nbsp;pop-up
              <br />
              &nbsp;&nbsp;richmond,&nbsp;va&nbsp;·&nbsp;07.25.26
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;11am–5pm&nbsp;(or&nbsp;sold&nbsp;out)
            </p>
          </div>

          {/* handwritten note */}
          <div className="hidden md:block absolute bottom-[14%] left-[38%] font-serif italic text-2xl lg:text-3xl whitespace-nowrap pointer-events-none rotate-[-4deg] text-[#181916]">
            thanks for being here ♡
          </div>
        </div>

        {/* giant MATCHA bleeding off the bottom-right */}
        <div
          aria-hidden="true"
          className="select-none pointer-events-none font-sans font-medium lowercase tracking-[-0.05em] leading-[0.85] text-[32vw] md:text-[35vw] -mb-[2vw] text-right whitespace-nowrap text-[#181916]"
        >
          matcha
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-[#181916] overflow-x-hidden">

      <Hero />

      {/* Ticker */}
      <div className="py-3 overflow-hidden bg-[#181916] text-white flex items-center">
        <div className="animate-ticker flex whitespace-nowrap font-mono text-xs uppercase tracking-widest w-max">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-6">NEXT POP-UP: RICHMOND, VA · 07.25.26 · 11AM–5PM</span>
              <span className="opacity-40">///</span>
            </div>
          ))}
        </div>
      </div>

      {/* Photo wall — pictures speak louder */}
      <section className="grid grid-cols-2 md:grid-cols-3">
        {Photos.map((src, i) => {
          // make first photo full-width spanning 2 cols
          const wide = i === 0;
          return (
            <div
              key={i}
              className={`overflow-hidden bg-[#F1EFE8] ${wide ? 'col-span-2 md:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          );
        })}
      </section>

      {/* Minimal footer strip */}
      <footer className="border-t border-[#181916]/10 py-8 px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">
          © 2026 kyru matcha · serious matcha, unserious people.
        </p>
        <a
          href="https://www.instagram.com/kyrumatcha/"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-80 transition-opacity"
        >
          @kyrumatcha ↗
        </a>
      </footer>

      {/* Ticker Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        .animate-ticker {
          animation: ticker 22s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}} />
    </div>
  );
}
