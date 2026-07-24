const events = [
  {
    date: '07.25.26',
    day: 'SAT',
    city: 'Richmond, VA',
    venue: 'District Candle Lab',
    area: 'Mosaic District',
    time: '11am – 5pm (or sold out)',
    status: 'confirmed',
  },
  {
    date: '08.09.26',
    day: 'SUN',
    city: 'Washington, DC',
    venue: 'TBA',
    area: '',
    time: 'TBA',
    status: 'coming soon',
  },
  {
    date: '08.23.26',
    day: 'SAT',
    city: 'Norfolk, VA',
    venue: 'TBA',
    area: '',
    time: 'TBA',
    status: 'coming soon',
  },
];

export default function Events() {
  return (
    <main className="pt-32 pb-32 px-6 md:px-16 max-w-5xl mx-auto">
      {/* header */}
      <div className="mb-20">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-4">
          summer 2026
        </p>
        <h1 className="font-sans text-5xl md:text-7xl font-medium lowercase tracking-tight leading-[0.9]">
          where we'll<br />be next
        </h1>
      </div>

      {/* photo */}
      <div className="w-full aspect-[16/7] overflow-hidden mb-20 bg-[#F1EFE8]">
        <img
          src="/images/sign-drinks.jpg"
          alt="kyru specialty matcha sign"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* event list */}
      <div>
        {events.map((e, i) => (
          <div
            key={i}
            className="border-t border-[#181916]/10 py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-0 last:border-b"
          >
            {/* date */}
            <div className="md:w-40 flex-shrink-0">
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                {e.day}
              </p>
              <p className="font-mono text-sm tracking-widest mt-1">{e.date}</p>
            </div>

            {/* location */}
            <div className="flex-1">
              <h2 className="font-sans text-2xl md:text-3xl font-medium lowercase tracking-tight">
                {e.city}
              </h2>
              <p className="font-mono text-[11px] uppercase tracking-widest opacity-50 mt-2">
                {e.venue}{e.area ? ` · ${e.area}` : ''}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-widest opacity-40 mt-1">
                {e.time}
              </p>
            </div>

            {/* status */}
            <div className="md:w-32 flex-shrink-0 flex md:justify-end items-start md:pt-1">
              <span
                className={`font-mono text-[9px] uppercase tracking-widest border px-2 py-1 ${
                  e.status === 'confirmed'
                    ? 'border-[#181916]/60 text-[#181916]'
                    : 'border-[#181916]/20 text-[#181916]/40'
                }`}
              >
                {e.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* follow note */}
      <p className="font-mono text-[10px] uppercase tracking-widest opacity-30 mt-20">
        more dates dropping — follow{' '}
        <a
          href="https://www.instagram.com/kyrumatcha/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:opacity-60 transition-opacity"
        >
          @kyrumatcha
        </a>{' '}
        for real-time updates
      </p>
    </main>
  );
}
