import { NavLink, useLocation } from 'react-router-dom';

export default function Nav() {
  const { pathname } = useLocation();
  const onHero = pathname === '/';

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-mono text-[11px] uppercase tracking-[0.14em] transition-opacity duration-200 ${
      isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-colors duration-300 ${
        onHero
          ? 'bg-white border-b border-[#181916]/10'
          : 'bg-white border-b border-[#181916]/10'
      }`}
    >
      <NavLink
        to="/"
        className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-50 hover:opacity-90 transition-opacity"
      >
        kyru matcha
      </NavLink>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <NavLink to="/menu" className={linkClass}>menu</NavLink>
        <NavLink to="/events" className={linkClass}>events</NavLink>
        <NavLink to="/about" className={linkClass}>about</NavLink>
      </nav>
    </header>
  );
}
