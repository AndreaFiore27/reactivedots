import { useEffect, useRef, useCallback } from 'react';
import DotBackground from './DotBackground';
import styles from '../styles/BoldStatement.module.css';

import img1 from '../assets/project-vergnano.jpg';
import img2 from '../assets/project-torino-fc.jpg';
import img3 from '../assets/project-kff.jpg';
import img4 from '../assets/project-ligier-campaign.jpg';

const IMAGES = [
  { src: img1, alt: 'Production shot 1' },
  { src: img2, alt: 'Production shot 2' },
  { src: img3, alt: 'Production shot 3' },
  { src: img4, alt: 'Production shot 4' },
];

// Each image has unique motion parameters
const MOTION = [
  { ySpeed: 0.18, xSpeed: 0.04, rotate: 0.03, scaleRange: 0.08 },
  { ySpeed: -0.12, xSpeed: -0.05, rotate: -0.04, scaleRange: 0.06 },
  { ySpeed: -0.15, xSpeed: 0.06, rotate: 0.05, scaleRange: 0.1 },
  { ySpeed: 0.2, xSpeed: -0.04, rotate: -0.03, scaleRange: 0.07 },
];

export default function BoldStatement() {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowH = window.innerHeight;
    const center = rect.top + rect.height / 2;
    const progress = (windowH / 2 - center) / (windowH * 0.8);

    imagesRef.current.forEach((img, i) => {
      if (!img) return;
      const m = MOTION[i];
      const y = progress * m.ySpeed * windowH;
      const x = progress * m.xSpeed * windowH;
      const rotate = progress * m.rotate * 60;
      const scale = 1 + progress * m.scaleRange;
      img.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <DotBackground />
      <div className={styles.inner}>
        {/* Floating images */}
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className={`${styles.floatingImg} ${styles[`img${i + 1}`]}`}
            ref={el => imagesRef.current[i] = el}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}

        {/* Giant text */}
        <div className={styles.textBlock}>
          <h2 className={styles.headline}>
            <span className={styles.line}>BOLD</span>
            <span className={styles.line}>WITH</span>
            <span className={styles.line}>PURPOSE<span className={styles.dot}>.</span></span>
          </h2>
        </div>
      </div>

      {/* Bottom labels */}
      <div className={styles.labels}>
        <span className={styles.label}>Brand</span>
        <span className={styles.label}>Reactive Dots</span>
      </div>
    </section>
  );
}
