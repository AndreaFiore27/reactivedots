import DotBackground from './DotBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';
import placeholderImg from '../assets/placeholder-portfolio.jpg';
import styles from '../styles/About.module.css';

import imgAlessandroMarzolla from '../assets/team/alessandro-marzolla.jpg';
import imgAlessandroMenegon from '../assets/team/alessandro-menegon.webp';
import imgAndreaFiore from '../assets/team/andrea-fiore.webp';
import imgAndreaPrina from '../assets/team/andrea-prina.jpg';
import imgFabioColace from '../assets/team/fabio-colace.webp';
import imgFrancescoBuonagiunto from '../assets/team/francesco-buonagiunto.webp';
import imgIlariaCadeddu from '../assets/team/ilaria-cadeddu.avif';
import imgLorenzoGuidi from '../assets/team/lorenzo-guidi.jpg';
import imgMatteoGalfre from '../assets/team/matteo-galfre.webp';
import imgMicheleRaviol from '../assets/team/michele-raviol.jpg';
import imgRaffaellaMosso from '../assets/team/raffaella-mosso.avif';
import imgRebeccaGai from '../assets/team/rebecca-gai.jpg';
import imgSaraCameroni from '../assets/team/sara-cameroni.png';
import imgSimoneArena from '../assets/team/simone-arena.webp';
import imgSimonettaManfrida from '../assets/team/simonetta-manfrida.jpg';

const TEAM = [
  { name: 'Andrea Fiore', role: '', image: imgAndreaFiore },
  { name: 'Andrea Prina', role: '', image: imgAndreaPrina },
  { name: 'Alessandro Marzolla', role: '', image: imgAlessandroMarzolla },
  { name: 'Alessandro Menegon', role: '', image: imgAlessandroMenegon },
  { name: 'Fabio Colace', role: '', image: imgFabioColace },
  { name: 'Francesco Buonagiunto', role: '', image: imgFrancescoBuonagiunto },
  { name: 'Ilaria Cadeddu', role: '', image: imgIlariaCadeddu },
  { name: 'Lorenzo Guidi', role: '', image: imgLorenzoGuidi },
  { name: 'Matteo Galfre', role: '', image: imgMatteoGalfre },
  { name: 'Michele Raviol', role: '', image: imgMicheleRaviol },
  { name: 'Raffaella Mosso', role: '', image: imgRaffaellaMosso },
  { name: 'Rebecca Gai', role: '', image: imgRebeccaGai },
  { name: 'Sara Cameroni', role: '', image: imgSaraCameroni },
  { name: 'Simone Arena', role: '', image: imgSimoneArena },
  { name: 'Simonetta Manfrida', role: '', image: imgSimonettaManfrida },
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
                  <img src={member.image} alt={member.name} className={styles.teamAvatarImg} loading="lazy" />
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
