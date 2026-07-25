import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Nav() {
  const { pathname } = useLocation();
  const [logoWhite, setLogoWhite] = useState(false);
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') {
      setLogoWhite(false);
      return;
    }
    const hero = document.getElementById('hero');
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setLogoWhite(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, [pathname]);

  const link = ({ isActive }: { isActive: boolean }) =>
    `font-mono text-[11px] uppercase tracking-[0.14em] transition-opacity duration-200 ${
      isActive ? 'opacity-100' : 'opacity-35 hover:opacity-75'
    }`;

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `font-mono text-[13px] uppercase tracking-[0.14em] py-4 border-b border-black/[0.07] transition-opacity duration-200 ${
      isActive ? 'opacity-100' : 'opacity-40'
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-9 py-5 bg-white/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <NavLink
          to="/"
          className={`font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 ${
            logoWhite && !open ? 'text-white opacity-70 hover:opacity-100' : 'text-[#181916] opacity-45 hover:opacity-90'
          }`}
        >
          kyru matcha
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ gap: '2.5rem' }}>
          <NavLink to="/order"   className={link}>order</NavLink>
          <NavLink to="/booking" className={link}>booking</NavLink>
          <NavLink to="/events"  className={link}>events</NavLink>
          <NavLink to="/about"   className={link}>about</NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-7 h-7 shrink-0"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'close menu' : 'open menu'}
        >
          <span className={`block h-[1.5px] bg-[#181916] transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block h-[1.5px] bg-[#181916] transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-[1.5px] bg-[#181916] transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col px-6 pt-[72px] pb-10 md:hidden transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col mt-4">
          <NavLink to="/order"   className={mobileLink} onClick={() => setOpen(false)}>order</NavLink>
          <NavLink to="/booking" className={mobileLink} onClick={() => setOpen(false)}>booking</NavLink>
          <NavLink to="/events"  className={mobileLink} onClick={() => setOpen(false)}>events</NavLink>
          <NavLink to="/about"   className={mobileLink} onClick={() => setOpen(false)}>about</NavLink>
          <NavLink to="/menu"    className={mobileLink} onClick={() => setOpen(false)}>menu</NavLink>
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <a href="https://www.instagram.com/kyrumatcha/" target="_blank" rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest opacity-30">
            @kyrumatcha ↗
          </a>
        </div>
      </div>
    </>
  );
}
