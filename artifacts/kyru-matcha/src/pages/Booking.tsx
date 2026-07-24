export default function Booking() {
  return (
    <main className="bg-white text-[#181916] pt-[72px] min-h-screen">

      {/* Header */}
      <div className="border-b border-black/[0.07] px-8 md:px-16 py-16 md:py-24">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-35 mb-4">pop-ups & events</p>
        <h1 className="font-sans text-5xl md:text-7xl font-medium lowercase tracking-[-0.04em] leading-[0.9]">
          booking<br />inquiries
        </h1>
      </div>

      {/* Two-col body */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-black/[0.07]">

        {/* Left — info */}
        <div className="px-8 md:px-16 py-14 md:border-r border-black/[0.07] flex flex-col gap-8 border-b md:border-b-0">
          <p className="text-base leading-relaxed lowercase text-[#181916]/60 max-w-sm">
            we do pop-ups, brand activations, private events, and collabs. if you think we'd be a good fit together, reach out — we're always open to interesting things.
          </p>
          <p className="text-base leading-relaxed lowercase text-[#181916]/60 max-w-sm">
            dm us on instagram or send an email. we'll get back to you and figure out the details from there.
          </p>

          <div className="border-t border-black/[0.07] pt-8 space-y-2">
            <p className="font-mono text-[9px] uppercase tracking-widest opacity-30">what we do</p>
            {[
              'pop-up appearances & markets',
              'brand activations & collabs',
              'private events & workshops',
              'wholesale & wholesale inquiry',
            ].map((item) => (
              <p key={item} className="font-mono text-[10px] uppercase tracking-widest opacity-40">— {item}</p>
            ))}
          </div>
        </div>

        {/* Right — CTA */}
        <div className="px-8 md:px-16 py-14 flex flex-col justify-between gap-10">
          <p className="font-mono text-[9px] uppercase tracking-widest opacity-25">
            fastest response via instagram dm
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.instagram.com/kyrumatcha/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between border border-black/80 px-8 py-5 font-mono text-[11px] uppercase tracking-widest hover:bg-[#181916] hover:text-white transition-colors group"
            >
              dm @kyrumatcha
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="mailto:kyrumatcha@gmail.com"
              className="inline-flex items-center justify-between border border-black/15 px-8 py-5 font-mono text-[11px] uppercase tracking-widest opacity-40 hover:opacity-80 transition-opacity group"
            >
              send an email
              <span>↗</span>
            </a>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-widest opacity-20">
            @kyrumatcha · virginia born & raised
          </p>
        </div>
      </div>

    </main>
  );
}
