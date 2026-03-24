import { useEffect, useRef } from 'react';
import DotBackground from './DotBackground';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const children = el.querySelectorAll('[data-reveal]');
    children.forEach((child, i) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(50px)';
      child.style.transition = `opacity 1s ${ease} ${0.4 + i * 0.18}s, transform 1s ${ease} ${0.4 + i * 0.18}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        });
      });
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.videoBg}>
        <iframe
          src="https://www.youtube.com/embed/phufmGhYjWY?autoplay=1&mute=1&loop=1&playlist=phufmGhYjWY&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1"
          title="REACTIVEDOTS Showreel"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={styles.videoIframe}
        />
      </div>
      <div className={styles.videoOverlay} />
      <DotBackground />

      <div className={styles.content} ref={contentRef}>
        <p className={styles.overline} data-reveal>
          <span className={styles.recDot} />
          The Making Studio — Torino, Italia
        </p>

        <h1 className={styles.title} data-reveal>
          WHERE
          <br />
          IDEAS <span className={styles.titleAccent}>GET</span>
          <br />
          PRODUCED.
        </h1>

        <p className={styles.subtitle} data-reveal>
          Produciamo contenuti che contano. <strong>Video, foto, spot, campagne</strong> —
          ogni frame con intenzione. Siamo lo studio dove la strategia creativa
          incontra l'esecuzione di alto livello.
        </p>

        <div className={styles.ctas} data-reveal>
          <a href="#works" className="btn btn-primary">
            Vedi i nostri lavori →
          </a>
          <a href="#contatti" className="btn btn-secondary">
            Start a project
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
}
