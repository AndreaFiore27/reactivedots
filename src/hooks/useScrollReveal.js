import { useEffect, useRef } from 'react';

/**
 * Enhanced scroll reveal hook with multiple animation types.
 *
 * Options:
 *  - threshold: IntersectionObserver threshold (default 0.15)
 *  - stagger: delay between children in ms (default 80)
 *  - distance: translateY distance in px (default 60)
 *  - duration: animation duration in ms (default 900)
 *  - ease: CSS easing (default cubic-bezier(0.16, 1, 0.3, 1))
 *
 * Children can use these data attributes:
 *  - data-reveal            → fade up (default)
 *  - data-reveal="left"     → fade from left
 *  - data-reveal="right"    → fade from right
 *  - data-reveal="scale"    → fade + scale up
 *  - data-reveal="fade"     → fade only (no movement)
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      threshold = 0.15,
      stagger = 80,
      distance = 60,
      duration = 900,
      ease = 'cubic-bezier(0.16, 1, 0.3, 1)',
    } = options;

    const targets = el.querySelectorAll('[data-reveal]');

    const getInitialTransform = (type) => {
      switch (type) {
        case 'left': return `translateX(-${distance}px)`;
        case 'right': return `translateX(${distance}px)`;
        case 'scale': return 'scale(0.92)';
        case 'fade': return 'none';
        default: return `translateY(${distance}px)`;
      }
    };

    if (targets.length === 0) {
      el.style.opacity = '0';
      el.style.transform = `translateY(${distance}px)`;
      el.style.transition = `opacity ${duration}ms ${ease}, transform ${duration}ms ${ease}`;
    }

    targets.forEach((t, i) => {
      const type = t.getAttribute('data-reveal') || 'up';
      const delay = i * stagger;
      t.style.opacity = '0';
      const transform = getInitialTransform(type);
      if (transform !== 'none') {
        t.style.transform = transform;
      }
      t.style.transition = `opacity ${duration}ms ${ease} ${delay}ms, transform ${duration}ms ${ease} ${delay}ms`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (targets.length === 0) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) scale(1)';
          } else {
            targets.forEach((t) => {
              t.style.opacity = '1';
              t.style.transform = 'translateY(0) translateX(0) scale(1)';
            });
          }
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
