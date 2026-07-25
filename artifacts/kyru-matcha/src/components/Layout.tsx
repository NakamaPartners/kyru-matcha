import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Wraps every page with:
 * 1. Page-enter animation (fade + slight slide-up on route change)
 * 2. Scroll-reveal: sections already in view show immediately;
 *    sections below the fold animate in as you scroll.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  // Scroll-reveal observer — runs fresh after every route change
  useEffect(() => {
    // Scroll to top on navigate
    window.scrollTo({ top: 0, behavior: 'instant' });

    const el = ref.current;
    if (!el) return;

    // Small delay so DOM is painted before we measure positions
    const raf = requestAnimationFrame(() => {
      const targets = Array.from(
        el.querySelectorAll('section, main > div, main > footer')
      ) as HTMLElement[];

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('sr-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
      );

      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          // Already in viewport — show instantly, no flash
          target.classList.add('sr-visible');
        } else {
          // Below the fold — arm for reveal
          target.classList.add('sr-hidden');
          obs.observe(target);
        }
      });

      return () => obs.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <div key={pathname} ref={ref} className="page-enter">
      {children}
    </div>
  );
}
