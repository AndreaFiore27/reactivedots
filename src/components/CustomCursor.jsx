import { useEffect, useRef } from 'react';
import styles from '../styles/CustomCursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Don't run on mobile
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const lerp = (start, end, factor) => start + (end - start) * factor;

    let raf;
    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.15);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.15);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 10}px, ${pos.current.y - 10}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={cursorRef} className={styles.cursor} />;
}
