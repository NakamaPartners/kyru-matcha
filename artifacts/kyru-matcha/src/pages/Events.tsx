const events = [
  {
    date: '07.25.26', day: 'SAT',
    city: 'Richmond, VA',
    venue: 'District Candle Lab', area: 'Mosaic District',
    time: '11am – 5pm (or sold out)',
    status: 'confirmed',
    img: '/images/event-crowd.jpg',
  },
  {
    date: '08.09.26', day: 'SUN',
    city: 'Washington, DC',
    venue: 'TBA', area: '',
    time: 'TBA',
    status: 'coming soon',
    img: '/images/731292787_17894619918483743_3853595151744230689_n_1784859145526.jpg',
  },
  {
    date: '08.23.26', day: 'SAT',
    city: 'Norfolk, VA',
    venue: 'TBA', area: '',
    time: 'TBA',
    status: 'coming soon',
    img: '/images/702844941_17889320883483743_7037693079210767412_n_1784859145526.jpg',
  },
];

export default function Events() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] pb-32">

      {/* Page header */}
      <div className="px-8 md:px-16 py-16 border-b border-black/[0.07]">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 mb-4">summer 2026</p>
        <h1 className="font-sans text-6xl md:text-8xl font-medium lowercase tracking-[-0.04em] leading-[0.85]">
          where we'll<br />be next
        </h1>
      </div>

      {/* Event rows — each with its own photo */}
      {events.map((e, i) => (
        <div key={i} className="border-b border-black/[0.07] grid grid-cols-1 md:grid-cols-2">

          {/* Photo */}
          <div className={`aspect-[4/3] overflow-hidden bg-[#F1EFE8] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
            <img
              src={e.img}
              alt={e.city}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Info */}
          <div className={`flex flex-col justify-center px-10 md:px-14 py-14 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-35">{e.day}</span>
              <span className="font-mono text-sm tracking-widest opacity-55">{e.date}</span>
              <span className={`ml-auto font-mono text-[9px] uppercase tracking-widest border px-2 py-1 ${
                e.status === 'confirmed' ? 'border-black/50' : 'border-black/15 opacity-35'
              }`}>
                {e.status}
              </span>
            </div>

            <h2 className="font-sans text-4xl md:text-5xl font-medium lowercase tracking-[-0.03em] mb-3">
              {e.city}
            </h2>

            <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 leading-loose">
              {e.venue}{e.area ? ` · ${e.area}` : ''}
              <br />
              {e.time}
            </p>
          </div>
        </div>
      ))}

      {/* Follow note */}
      <div className="px-8 md:px-16 pt-16">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-25">
          more dates dropping —{' '}
          <a href="https://www.instagram.com/kyrumatcha/" target="_blank" rel="noreferrer"
            className="underline underline-offset-4 hover:opacity-60 transition-opacity">
            @kyrumatcha
          </a>
        </p>
      </div>
    </main>
  );
}
