const drinks = [
  {
    name: 'white rabbit matcha',
    desc: 'ceremonial-grade matcha, oat milk, housemade white rabbit syrup. cold, clean, slightly sweet.',
    img: '/images/drinks-hero.jpg',
    tag: 'signature',
  },
  {
    name: 'white rabbit hojicha',
    desc: 'roasted hojicha, oat milk, white rabbit syrup. earthy, toasty, low caffeine.',
    img: '/images/hojicha-cup.jpg',
    tag: 'signature',
  },
  {
    name: 'the make up',
    desc: 'seasonal special. changes each pop-up. ask us when you get there.',
    img: '/images/tray-lineup.jpg',
    tag: 'seasonal',
  },
];

export default function Menu() {
  return (
    <main className="pt-32 pb-32 px-6 md:px-16 max-w-5xl mx-auto">
      {/* header */}
      <div className="mb-20">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-4">
          pop-up menu · 2026
        </p>
        <h1 className="font-sans text-5xl md:text-7xl font-medium lowercase tracking-tight leading-[0.9]">
          what we're<br />making
        </h1>
      </div>

      {/* drink list */}
      <div className="space-y-0">
        {drinks.map((d, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-2 border-t border-[#181916]/10 py-16 gap-10 md:gap-20 last:border-b"
          >
            {/* text side */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-35">
                  {d.tag}
                </span>
                <h2 className="font-sans text-3xl md:text-4xl font-medium lowercase tracking-tight mt-3 mb-6">
                  {d.name}
                </h2>
                <p className="text-sm leading-relaxed text-[#181916]/60 max-w-xs lowercase">
                  {d.desc}
                </p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 mt-10">
                available at all pop-ups
              </p>
            </div>

            {/* photo side */}
            <div
              className={`aspect-[4/5] overflow-hidden bg-[#F1EFE8] ${i % 2 === 1 ? 'md:-order-1' : ''}`}
            >
              <img
                src={d.img}
                alt={d.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* note */}
      <p className="font-mono text-[10px] uppercase tracking-widest opacity-30 mt-20 text-center">
        menu rotates each season — follow @kyrumatcha for updates
      </p>
    </main>
  );
}
