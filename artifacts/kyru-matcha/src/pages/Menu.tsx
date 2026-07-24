const drinks = [
  {
    name: 'white rabbit matcha',
    desc: 'ceremonial-grade matcha · oat milk · housemade white rabbit syrup',
    img: '/images/drinks-hero.jpg',
    tag: 'signature',
    imgPosition: 'object-bottom',
  },
  {
    name: 'white rabbit hojicha',
    desc: 'roasted hojicha · oat milk · white rabbit syrup · low caffeine',
    img: '/images/hojicha-cup.jpg',
    tag: 'signature',
    imgPosition: 'object-center',
  },
  {
    name: 'the make up',
    desc: 'changes each pop-up. ask us when you get there.',
    img: '/images/tray-lineup.jpg',
    tag: 'seasonal',
    imgPosition: 'object-top',
  },
];

export default function Menu() {
  return (
    <main className="bg-white text-[#181916] pt-[72px]">

      {/* Full-bleed hero image */}
      <div className="w-full aspect-[21/9] overflow-hidden bg-[#F1EFE8]">
        <img
          src="/images/sign-drinks.jpg"
          alt="kyru specialty matcha"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Page header */}
      <div className="px-8 md:px-16 py-16 border-b border-[#181916]/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h1 className="font-sans text-6xl md:text-8xl font-medium lowercase tracking-[-0.04em] leading-[0.85]">
          menu
        </h1>
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 max-w-[18rem]">
          small menu. intentional. rotates with the season.
        </p>
      </div>

      {/* Drink entries — photo-led */}
      {drinks.map((d, i) => (
        <div key={i} className="border-b border-[#181916]/10">
          {/* Full-width photo */}
          <div className="w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden bg-[#F1EFE8]">
            <img
              src={d.img}
              alt={d.name}
              className={`w-full h-full object-cover ${d.imgPosition}`}
            />
          </div>

          {/* Minimal text below */}
          <div className="px-8 md:px-16 py-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-30 block mb-2">{d.tag}</span>
              <h2 className="font-sans text-3xl md:text-4xl font-medium lowercase tracking-[-0.02em]">
                {d.name}
              </h2>
              <p className="font-mono text-[11px] uppercase tracking-widest opacity-40 mt-3">
                {d.desc}
              </p>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-widest opacity-25 flex-shrink-0">
              all pop-ups
            </p>
          </div>
        </div>
      ))}

      {/* Footer note */}
      <div className="px-8 md:px-16 py-16 border-t border-[#181916]/5">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-25">
          menu rotates — follow{' '}
          <a href="https://www.instagram.com/kyrumatcha/" target="_blank" rel="noreferrer"
            className="underline underline-offset-4 hover:opacity-60 transition-opacity">
            @kyrumatcha
          </a>{' '}
          for updates
        </p>
      </div>
    </main>
  );
}
