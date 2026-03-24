import { useEffect, useRef, useState, useCallback } from 'react';
import DotBackground from './DotBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from '../styles/Process.module.css';

const STEPS = [
  {
    num: '01',
    title: 'BRIEF',
    desc: 'Partiamo dalla tua storia. Chi sei, cosa vuoi dire, a chi vuoi dirlo e perché. Il brief non è un modulo — è una conversazione.',
    label: 'Ascolto & Analisi',
  },
  {
    num: '02',
    title: 'IDEA',
    desc: 'Traduciamo la strategia in un concept visivo. Storyboard, moodboard, art direction. Ogni scelta ha un perché.',
    label: 'Concept & Direzione',
  },
  {
    num: '03',
    title: 'MAKE',
    desc: 'Sul set con attrezzatura professionale e un team selezionato. Controllo totale dalla luce all\'ultimo frame girato.',
    label: 'Produzione',
  },
  {
    num: '04',
    title: 'SHIP',
    desc: 'Editing, color, sound, motion. Consegniamo file pronti per ogni piattaforma, ogni formato. Senza sorprese.',
    label: 'Post & Consegna',
  },
];

export default function Process() {
  const headerRef = useScrollReveal();
  const timelineRef = useRef(null);
  const progressRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1);

  const handleScroll = useCallback(() => {
    const timeline = timelineRef.current;
    const progress = progressRef.current;
    if (!timeline || !progress) return;

    const rect = timeline.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Calculate how far we've scrolled through the timeline
    // Start filling when timeline top hits 70% of viewport
    // Finish when timeline bottom hits 30% of viewport
    const start = rect.top - windowH * 0.7;
    const end = rect.bottom - windowH * 0.3;
    const total = end - start;
    const current = -start;
    const ratio = Math.max(0, Math.min(1, current / total));

    progress.style.height = `${ratio * 100}%`;

    // Determine which step is active based on scroll position
    const dots = timeline.querySelectorAll(`.${styles.dot}`);
    let newActive = -1;
    dots.forEach((dot, i) => {
      const dotRect = dot.getBoundingClientRect();
      const dotCenter = dotRect.top + dotRect.height / 2;
      if (dotCenter < windowH * 0.6) {
        newActive = i;
      }
    });
    setActiveStep(newActive);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section id="processo" className={styles.section}>
      <DotBackground />
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef}>
          <p className={styles.tag} data-reveal>COME LAVORIAMO</p>
          <h2 className={styles.heading} data-reveal>THE PROCESS<span className={styles.pulseDot}>●</span></h2>
        </div>

        <div className={styles.timeline} ref={timelineRef}>
          {/* Vertical line track */}
          <div className={styles.line}>
            <div className={styles.lineProgress} ref={progressRef} />
          </div>

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`${styles.step} ${activeStep >= i ? styles.stepActive : ''}`}
            >
              {/* Dot on the line */}
              <div className={styles.dotWrapper}>
                <div className={styles.dot}>
                  <div className={styles.dotInner} />
                </div>
              </div>

              {/* Content card */}
              <div className={`${styles.card} ${i % 2 === 0 ? styles.cardLeft : styles.cardRight}`}>
                <span className={styles.stepNum}>{step.num}</span>
                <span className={styles.stepLabel}>{step.label}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
