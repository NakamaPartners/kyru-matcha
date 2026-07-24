import { NavLink } from 'react-router-dom';

export default function Nav() {
  const link = ({ isActive }: { isActive: boolean }) =>
    `font-mono text-[11px] uppercase tracking-[0.14em] transition-opacity duration-200 ${
      isActive ? 'opacity-100' : 'opacity-35 hover:opacity-75'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white border-b border-black/[0.07]">
      <NavLink to="/" className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-45 hover:opacity-90 transition-opacity">
        kyru matcha
      </NavLink>
      <nav style={{ display: 'flex', gap: '2.5rem' }}>
        <NavLink to="/menu"   className={link}>menu</NavLink>
        <NavLink to="/events" className={link}>events</NavLink>
        <NavLink to="/about"  className={link}>about</NavLink>
      </nav>
    </header>
  );
}
