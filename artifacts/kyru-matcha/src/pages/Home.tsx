import { useState } from "react";


function SignupForm({ dark = false }: { dark?: boolean }) {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <p
        aria-live="polite"
        className={`font-mono text-xs uppercase tracking-widest ${dark ? "opacity-90" : "text-accent"}`}
      >
        noted. we'll be in touch ♡
      </p>
    );
  }
  return (
    <form
      className="flex flex-col sm:flex-row gap-2 w-full max-w-md mx-auto md:mx-0"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        required
        aria-label="email address"
        placeholder="email address"
        className={
          dark
            ? "bg-transparent border border-background/40 px-4 py-3 font-mono text-xs uppercase text-background placeholder:text-background/50 focus:outline-none focus:border-background transition-colors flex-1"
            : "bg-transparent border border-primary px-4 py-3 font-mono text-xs uppercase placeholder:text-primary/40 focus:outline-none focus:bg-background/50 flex-1 transition-colors"
        }
      />
      <button
        type="submit"
        className={
          dark
            ? "bg-background text-brand px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-background/90 transition-colors whitespace-nowrap"
            : "bg-primary text-background px-6 py-3 font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
        }
      >
        {dark ? "subscribe" : "submit"}
      </button>
    </form>
  );
}

const Images = {
  logo: "/images/image_1_1784859145526.png",
  hero: "/images/727041031_17893635627483743_3055211553531975486_n_1784859145526.jpg",
  giveaway: "/images/731292787_17894619918483743_3853595151744230689_n_1784859145526.jpg",
  gallery1: "/images/650807209_17966637591034187_4600880481792221201_n_1784859145526.jpg",
  gallery2: "/images/689893832_17930135811272011_505547332068594853_n_1784859145526.jpg",
  gallery3: "/images/692380241_17930135799272011_2424829180166639078_n_1784859145526.jpg",
  gallery4: "/images/701156664_17889320865483743_5410504869034541725_n_1784859145526.jpg",
  gallery5: "/images/713664623_17905608681430231_6947000135873404220_n_1784859145526.jpg",
  gallery6: "/images/708528216_17890409895483743_6912389655744703038_n_1784859145526.jpg",
  gallery7: "/images/742953955_17954256912189611_6899181722383635748_n_1784859145526.jpg",
  gallery8: "/images/731111343_17895541896483743_3598329880635149232_n_1784859145526.jpg",
};

function Hero() {
  return (
    <section id="our-thing" className="relative">
      <div className="relative h-[100dvh] flex flex-col justify-between bottom-line overflow-hidden bg-white text-[#181916]">
        <h1 className="sr-only">kyru matcha — not a brand, just us talking.</h1>

        {/* giant KYRU bleeding off the top-left */}
        <div
          aria-hidden="true"
          className="select-none pointer-events-none font-sans font-medium lowercase tracking-[-0.03em] leading-[0.72] text-[42vw] md:text-[37vw] -mt-[10vw] -ml-[2.5vw]"
        >
          kyru
        </div>

        {/* middle band — scattered flyer metadata */}
        <div className="relative flex-1 px-6 md:px-12 lg:px-16 py-6">
          {/* hosted by — upper left */}
          <div className="absolute top-[8%] left-[4%] md:left-[6%] text-[#264866]">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest leading-loose">
              hosted&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by:
              <br />
              nobody.&nbsp;&nbsp;it's just us.
            </p>
          </div>

          {/* intro copy — mid left, indented like the flyers */}
          <div className="absolute top-[44%] left-[8%] md:left-[12%] max-w-[16rem] md:max-w-xs">
            <p className="font-sans text-sm md:text-base text-[#796957] leading-relaxed lowercase">
              we're kyru. viet-owned, matcha-obsessed, and slightly too online.
              serious matcha, unserious people.
            </p>
            <a
              href="#what-we-make"
              className="link-arrow font-mono text-xs lowercase tracking-widest hover:opacity-70 inline-block mt-6"
            >
              explore catalogue <span className="text-lg leading-none font-sans">→</span>
            </a>
          </div>

          {/* vendor-list style block — upper right */}
          <div className="absolute top-[4%] right-[6%] md:right-[14%] text-left text-[#76805B]">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest leading-loose">
              matcha,&nbsp;&nbsp;&nbsp;&nbsp;drinks,
              <br />
              pop-ups,&nbsp;&nbsp;good&nbsp;people
              <br />
              &amp;&nbsp;&nbsp;more
            </p>
          </div>

          {/* next pop-up — lower right, stepped like the flyers */}
          <div className="absolute bottom-[6%] right-[4%] md:right-[8%] text-left text-[#A32A1B]">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest leading-loose">
              next&nbsp;pop-up
              <br />
              &nbsp;&nbsp;richmond,&nbsp;va&nbsp;·&nbsp;07.25.26
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;11am–5pm&nbsp;(or&nbsp;sold&nbsp;out)
            </p>
          </div>

          {/* handwritten note — tucked lower-center-left, tilted */}
          <div className="hidden md:block absolute bottom-[14%] left-[38%] font-serif italic text-2xl lg:text-3xl whitespace-nowrap pointer-events-none rotate-[-4deg] text-[#3049C9]">
            thanks for being here ♡
          </div>
        </div>

        {/* giant MATCHA bleeding off the bottom-right */}
        <div
          aria-hidden="true"
          className="select-none pointer-events-none font-sans font-medium lowercase tracking-[-0.03em] leading-[0.72] text-[42vw] md:text-[37vw] -mb-[16.5vw] text-right -mr-[3vw] whitespace-nowrap"
        >
          matcha
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-primary overflow-x-hidden selection:bg-brand selection:text-background">
      {/* Navigation */}
      <Hero />

      {/* Ticker Bar */}
      <div className="bottom-line py-3 overflow-hidden bg-primary text-background flex items-center relative z-10 denim-texture">
        <div className="animate-ticker flex whitespace-nowrap font-mono text-xs uppercase tracking-widest w-max">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-6">NEXT POP-UP: RICHMOND, VA · 07.25.26 · 11AM–5PM</span>
              <span className="opacity-50">///</span>
            </div>
          ))}
        </div>
      </div>

      {/* What We Make (Catalogue) */}
      <section id="what-we-make" className="bottom-line flex flex-col md:flex-row">
        <div className="md:w-1/4 p-6 grid-lines flex flex-col justify-between border-b border-primary md:border-b-0">
          <div>
            <h2 className="font-mono text-xs lowercase tracking-widest mb-4">
              what we're making
            </h2>
            <p className="text-sm text-primary/70 leading-relaxed lowercase">
              our offerings are small, seasonal, and constantly rotating based
              on what we find interesting.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              src={Images.gallery3}
              alt="detail"
              className="w-full aspect-square object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>
        </div>
        <div className="md:w-3/4 flex flex-col sm:flex-row">
          {[
            {
              img: Images.gallery1,
              alt: "white rabbit matcha",
              name: "white rabbit matcha",
              note: "on the pop-up menu",
            },
            {
              img: Images.gallery2,
              alt: "white rabbit hojicha",
              name: "white rabbit hojicha",
              note: "on the pop-up menu",
            },
            {
              img: Images.gallery4,
              alt: "the make up",
              name: "the make up",
              note: "on the pop-up menu",
            },
          ].map((drink, i) => (
            <div
              key={i}
              className="flex-1 grid-lines p-6 flex flex-col border-b border-primary sm:border-b-0 last:border-b-0"
            >
              <div className="aspect-[4/5] mb-6 overflow-hidden bg-secondary/5">
                <img
                  src={drink.img}
                  alt={drink.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-auto">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-medium lowercase">{drink.name}</h3>
                  <span className="font-mono text-[10px] text-accent uppercase">
                    available
                  </span>
                </div>
                <p className="text-xs font-mono uppercase text-muted-foreground mb-4">
                  {drink.note}
                </p>
                <a
                  href="#where-we-ll-be"
                  className="block text-center w-full py-3 border border-primary font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-background transition-colors"
                >
                  find a pop-up →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery Band */}
      <section className="flex flex-row overflow-x-auto bottom-line snap-x snap-mandatory hide-scrollbar">
        {[Images.gallery4, Images.gallery5, Images.gallery8, Images.gallery7].map(
          (img, i) => (
            <div
              key={i}
              className="min-w-[70vw] md:min-w-[40vw] lg:min-w-[25vw] aspect-square grid-lines snap-center relative group"
            >
              <img
                src={img}
                alt={`archive snapshot ${i + 1}`}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 border border-primary/10 m-2 pointer-events-none mix-blend-overlay"></div>
            </div>
          )
        )}
      </section>

      {/* Where We'll Be Next */}
      <section id="where-we-ll-be" className="bottom-line flex flex-col md:flex-row">
        <div className="md:w-1/3 p-6 grid-lines border-b border-primary md:border-b-0 flex flex-col">
          <h2 className="font-mono text-xs lowercase tracking-widest mb-4">
            where we'll be next
          </h2>
          <p className="text-sm text-primary/70 mb-8 max-w-xs lowercase">
            we operate as a nomadic pop-up. find us at these upcoming locations.
          </p>
          <div className="mt-auto hidden md:block">
            <img
              src={Images.gallery7}
              alt="pop up location"
              className="w-full aspect-[4/3] object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col">
          {[
            {
              date: "JUL 25",
              location: "RICHMOND, VA",
              venue: "District Candle Lab, Mosaic District",
            },
            {
              date: "AUG 09",
              location: "WASHINGTON, DC",
              venue: "TBA",
            },
            {
              date: "AUG 23",
              location: "NORFOLK, VA",
              venue: "TBA",
            },
          ].map((event, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bottom-line last:border-b-0 hover:bg-secondary/5 transition-colors cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 w-full">
                <span className="font-mono text-sm tracking-widest w-20 flex-shrink-0 text-primary/70">
                  {event.date}
                </span>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl md:text-2xl font-medium group-hover:text-brand transition-colors lowercase">
                      {event.location}
                    </h4>
                    <p className="text-xs font-mono uppercase text-muted-foreground mt-1">
                      {event.venue}
                    </p>
                  </div>
                  <span className="text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Giveaway Band / Campaign Moment */}
      <section className="bg-brand text-background bottom-line flex flex-col md:flex-row min-h-[50vh] overflow-hidden denim-texture">
        <div className="flex-1 flex flex-col justify-center p-12 md:p-20 relative z-10 text-center md:text-left order-2 md:order-1">
          <h2 className="font-mono text-sm md:text-base tracking-widest mb-6 uppercase opacity-90">
            KYRU X NAMI MATCHA
          </h2>
          <div className="font-serif text-7xl md:text-8xl lg:text-[7rem] italic font-light tracking-tight mb-8">
            giveaway
          </div>
          <p className="font-mono text-xs uppercase tracking-widest opacity-80 mb-8 max-w-sm mx-auto md:mx-0">
            we teamed up with nami matcha. drop your email for details — winner
            announced on instagram.
          </p>
          <div className="max-w-sm mx-auto md:mx-0 w-full">
            <SignupForm dark />
          </div>
        </div>
        <div className="md:w-1/2 relative min-h-[40vh] border-b md:border-b-0 md:border-l border-background/20 bg-background/5 order-1 md:order-2">
          <img
            src={Images.giveaway}
            alt="kai okumidori tin"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer id="talk-to-us" className="grid grid-cols-1 md:grid-cols-4 min-h-[40vh]">
        {/* Brand & Mascot */}
        <div className="p-6 md:p-8 grid-lines flex flex-col justify-between border-b md:border-b-0 border-primary denim-texture denim-texture-light">
          <img
            src={Images.logo}
            alt="kyru matcha mascot doodle"
            className="w-16 h-16 object-contain grayscale mix-blend-multiply opacity-70 mb-8"
          />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary/60 mb-2">
              © 2026 kyru matcha
            </p>
            <p className="font-sans text-sm text-primary/80 lowercase">
              serious matcha, unserious people.
            </p>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="p-6 md:p-8 grid-lines flex flex-col justify-center border-b md:border-b-0 border-primary col-span-1 md:col-span-2 bg-secondary/5">
          <h4 className="font-sans text-xl md:text-2xl mb-6 lowercase text-center md:text-left">
            want first dibs on pop-ups?
          </h4>
          <SignupForm />
        </div>
        
        {/* Links & Social */}
        <div className="p-6 md:p-8 grid-lines flex flex-col justify-between">
          <div className="mb-8 md:mb-0">
            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-50">
              social
            </h4>
            <a
              href="https://www.instagram.com/kyrumatcha/"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-brand transition-colors lowercase"
            >
              @kyrumatcha ↗
            </a>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-50">
              links
            </h4>
            <ul className="space-y-2 text-sm lowercase">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  faq
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  collaborate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Ticker Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 20s linear infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
