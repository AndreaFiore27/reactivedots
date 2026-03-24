import { useEffect } from 'react';

/**
 * Hook to apply mouse movement tracking to elements for CSS-based glow effects.
 * It sets --mouse-x and --mouse-y custom properties on the container.
 */
export function useMouseGlow(containerRef) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const cards = container.getElementsByClassName('card');
      
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [containerRef]);
}
