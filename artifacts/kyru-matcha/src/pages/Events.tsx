const events = [
  {
    date: '07.25', day: 'SAT', year: '2026',
    city: 'Richmond, VA',
    venue: 'District Candle Lab · Mosaic District',
    time: '11am – 5pm',
    status: 'confirmed',
  },
  {
    date: '08.09', day: 'SUN', year: '2026',
    city: 'Washington, DC',
    venue: 'TBA',
    time: 'TBA',
    status: 'coming soon',
  },
  {
    date: '08.23', day: 'SAT', year: '2026',
    city: 'Norfolk, VA',
    venue: 'TBA',
    time: 'TBA',
    status: 'coming soon',
  },
];

export default function Events() {
  return (
    <main className="bg-white text-[#181916] pt-[72px]">

      {/* Full-bleed hero — the only photo, make it the main thing */}
      <div className="w-full overflow-hidden" style={{ height: '88vh', minHeight: 520 }}>
        <img
          src="/images/events-hero.png"
          alt="kyru matcha pop-up"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Event list — clean, minimal, directly below */}
      <div className="border-t border-black/[0.07]">
        {events.map((e, i) => (
          <div key={i} className="border-b border-black/[0.07] px-8 md:px-16 py-10 flex flex-col md:flex-row md:items-center gap-3 md:gap-0">

            {/* Date block */}
            <div className="md:w-32 flex-shrink-0">
              <p className="font-mono text-xs uppercase tracking-widest opacity-40">{e.day} · {e.year}</p>
              <p className="font-sans text-2xl font-medium tracking-tight mt-0.5">{e.date}</p>
            </div>

            {/* City + venue */}
            <div className="flex-1 md:pl-8">
              <h2 className="font-sans text-3xl md:text-4xl font-medium lowercase tracking-[-0.02em]">{e.city}</h2>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 mt-1">{e.venue} {e.time !== 'TBA' ? `· ${e.time}` : ''}</p>
            </div>

            {/* Status pill */}
            <span className={`flex-shrink-0 font-mono text-[9px] uppercase tracking-widest border px-3 py-1 self-start md:self-auto ${
              e.status === 'confirmed'
                ? 'border-black/50 text-[#181916]'
                : 'border-black/15 opacity-30'
            }`}>
              {e.status}
            </span>
          </div>
        ))}
      </div>

      {/* Follow note */}
      <div className="px-8 md:px-16 py-12">
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
