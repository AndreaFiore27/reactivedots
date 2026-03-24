import DotBackground from './DotBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';
import placeholderImg from '../assets/placeholder-portfolio.jpg';
import styles from '../styles/About.module.css';

const TEAM = [
  { name: 'Andrea', role: 'CEO & Founder' },
  { name: 'Marco', role: 'Director' },
  { name: 'Giulia', role: 'Producer' },
  { name: 'Luca', role: 'DOP' },
  { name: 'Sara', role: 'Motion Designer' },
  { name: 'Davide', role: 'Editor' },
  { name: 'Chiara', role: 'Social Strategist' },
  { name: 'Matteo', role: 'Sound Designer' },
];

export default function About() {
  const sectionRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="chi-siamo" className={styles.section}>
      <DotBackground />

      <div className={styles.inner} ref={sectionRef}>
        <p className={styles.tag} data-reveal="fade">CHI SIAMO</p>
        <h2 className={styles.heading} data-reveal>
          A STUDIO THAT MAKES THINGS REAL<span className={styles.pulseDot}>●</span>
        </h2>
        <p className={styles.subtitle} data-reveal="fade">
          REACTIVEDOTS non è un'agenzia che delega la produzione. Non è una casa di produzione che esegue senza pensare.
          È lo studio dove la strategia e il fare vivono nella stessa stanza — spesso nella stessa persona.
          Reactive, perché rispondiamo ai contesti con intelligenza. Dots, perché siamo il punto di connessione tra visione e realtà.
        </p>

        <div className={styles.videoWrapper} data-reveal="scale">
          <img src={placeholderImg} alt="Chi siamo video" className={styles.videoPoster} />
          <div className={styles.playButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className={styles.teamSection} data-reveal>
          <div className={styles.teamTrack}>
            {[...TEAM, ...TEAM].map((member, i) => (
              <div key={i} className={styles.teamMember}>
                <div className={styles.teamAvatar}>
                  <img src={placeholderImg} alt={member.name} className={styles.teamAvatarImg} />
                </div>
                <span className={styles.teamName}>{member.name}</span>
                <span className={styles.teamRole}>{member.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stats} data-reveal>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Progetti completati</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>8</span>
            <span className={styles.statLabel}>Anni di esperienza</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Premi creativi</span>
          </div>
        </div>

        <a
          href="https://simpolagency.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          data-reveal
        >
          Scopri Simpol. →
        </a>
      </div>
    </section>
  );
}
