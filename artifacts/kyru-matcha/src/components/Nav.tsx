import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Nav() {
  const { pathname } = useLocation();
  const [logoWhite, setLogoWhite] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-9 py-5">
      <NavLink
        to="/"
        className={`font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 ${
          logoWhite ? 'text-white opacity-70 hover:opacity-100' : 'text-[#181916] opacity-45 hover:opacity-90'
        }`}
      >
        kyru matcha
      </NavLink>
      <nav style={{ display: 'flex', gap: '2.5rem' }}>
        <NavLink to="/order"   className={link}>order</NavLink>
        <NavLink to="/booking" className={link}>booking</NavLink>
        <NavLink to="/events"  className={link}>events</NavLink>
        <NavLink to="/about"   className={link}>about</NavLink>
      </nav>
    </header>
  );
}
