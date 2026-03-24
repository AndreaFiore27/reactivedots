import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PROJECTS from '../data/projects';
import styles from '../styles/Portfolio.module.css';
import modalStyles from '../styles/ProjectsPage.module.css';

export default function Portfolio() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05, stagger: 120 });
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeProject = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveProject(null);
      setIsClosing(false);
    }, 400);
  };

  useEffect(() => {
    if (activeProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeProject]);

  const related = activeProject
    ? PROJECTS.filter(
        (p) => p.category === activeProject.category && p.title !== activeProject.title
      ).concat(
        PROJECTS.filter(
          (p) => p.category !== activeProject.category && p.title !== activeProject.title
        )
      ).slice(0, 3)
    : [];

  return (
    <section id="works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header} ref={headerRef}>
          <div className={styles.headerTitle}>
            <p className={styles.tag} data-reveal="left">PORTFOLIO</p>
            <h2 className={styles.heading} data-reveal="left">
              SELECTED<br />WORK<span className={styles.pulseDot}>●</span>
            </h2>
          </div>
          <a
            href="/progetti"
            className={styles.allLink}
            data-reveal="right"
            onClick={(e) => {
              e.preventDefault();
              navigate('/progetti');
            }}
          >
            Tutti i progetti <span className={styles.allLinkLine} />
          </a>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className={`${styles.item} ${styles[`item${i + 1}`]}`}
              data-reveal="scale"
              onClick={() => setActiveProject(p)}
            >
              <div className={styles.cardInner}>
                <div className={styles.visual}>
                  <img src={p.image} alt={p.title} className={styles.img} />
                  <div className={styles.overlay} />
                  <div className={styles.content}>
                    <div className={styles.tag}>{p.tag}</div>
                    <div className={styles.title}>
                      {p.shortTitle[0]}<br />{p.shortTitle[1]}
                    </div>
                  </div>
                  <div className={styles.arrow}>→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className={`${modalStyles.modal} ${isClosing ? modalStyles.modalClosing : ''}`}>
          <div className={modalStyles.modalScroll}>
            <button
              className={modalStyles.modalClose}
              onClick={closeProject}
              aria-label="Chiudi"
            >
              ✕
            </button>

            <div className={modalStyles.modalHero}>
              <img src={activeProject.image} alt={activeProject.title} className={modalStyles.modalHeroImg} />
              <div className={modalStyles.modalHeroOverlay} />
              <div className={modalStyles.modalHeroContent}>
                <span className={modalStyles.modalCategory}>{activeProject.category}</span>
                <h2 className={modalStyles.modalTitle}>{activeProject.title}</h2>
                <div className={modalStyles.modalMeta}>
                  <div className={modalStyles.modalMetaItem}>
                    <span className={modalStyles.modalMetaLabel}>Cliente</span>
                    <span className={modalStyles.modalMetaValue}>{activeProject.client}</span>
                  </div>
                  <div className={modalStyles.modalMetaItem}>
                    <span className={modalStyles.modalMetaLabel}>Anno</span>
                    <span className={modalStyles.modalMetaValue}>{activeProject.year}</span>
                  </div>
                  <div className={modalStyles.modalMetaItem}>
                    <span className={modalStyles.modalMetaLabel}>Durata</span>
                    <span className={modalStyles.modalMetaValue}>{activeProject.duration}</span>
                  </div>
                  <div className={modalStyles.modalMetaItem}>
                    <span className={modalStyles.modalMetaLabel}>Team</span>
                    <span className={modalStyles.modalMetaValue}>{activeProject.team} persone</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={modalStyles.modalBody}>
              <div className={modalStyles.modalStats}>
                {activeProject.results.map((r) => (
                  <div key={r.label} className={modalStyles.modalStatItem}>
                    <span className={modalStyles.modalStatValue}>{r.value}</span>
                    <span className={modalStyles.modalStatLabel}>{r.label}</span>
                  </div>
                ))}
              </div>

              <div className={modalStyles.modalOverview}>
                <h3 className={modalStyles.modalSectionTitle}>Il Progetto</h3>
                <p className={modalStyles.modalTextLarge}>{activeProject.desc}</p>
              </div>

              <div className={modalStyles.modalDeliverables}>
                <span className={modalStyles.modalDeliverablesLabel}>Deliverables</span>
                <span className={modalStyles.modalDeliverablesValue}>{activeProject.deliverables}</span>
              </div>

              <div className={modalStyles.modalRow}>
                <div className={modalStyles.modalCol}>
                  <h3 className={modalStyles.modalSectionTitle}>La Sfida</h3>
                  <p className={modalStyles.modalText}>{activeProject.challenge}</p>
                </div>
                <div className={modalStyles.modalCol}>
                  <h3 className={modalStyles.modalSectionTitle}>Il Nostro Approccio</h3>
                  <p className={modalStyles.modalText}>{activeProject.approach}</p>
                </div>
              </div>

              <div className={modalStyles.modalWorkflowSection}>
                <h3 className={modalStyles.modalSectionTitle}>Il Nostro Workflow</h3>
                <div className={modalStyles.modalWorkflow}>
                  {activeProject.workflow.map((step, idx) => (
                    <div key={step} className={modalStyles.modalWorkflowStep}>
                      <span className={modalStyles.modalWorkflowNum}>{String(idx + 1).padStart(2, '0')}</span>
                      <span className={modalStyles.modalWorkflowLabel}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={modalStyles.modalRow}>
                <div className={modalStyles.modalCol}>
                  <h3 className={modalStyles.modalSectionTitle}>Servizi</h3>
                  <div className={modalStyles.modalServicesTags}>
                    {activeProject.services.map((s) => (
                      <span key={s} className={modalStyles.modalServiceTag}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className={modalStyles.modalCol}>
                  <h3 className={modalStyles.modalSectionTitle}>Attrezzatura</h3>
                  <div className={modalStyles.modalServicesTags}>
                    {activeProject.gear.map((g) => (
                      <span key={g} className={modalStyles.modalServiceTag}>{g}</span>
                    ))}
                  </div>
                </div>
              </div>

              {related.length > 0 && (
                <div className={modalStyles.modalRelated}>
                  <h3 className={modalStyles.modalSectionTitle}>Progetti Correlati</h3>
                  <div className={modalStyles.modalRelatedGrid}>
                    {related.map((p) => (
                      <div
                        key={p.title}
                        className={modalStyles.modalRelatedCard}
                        onClick={() => {
                          setActiveProject(p);
                          document.querySelector(`.${modalStyles.modalScroll}`)?.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        <img src={p.image} alt={p.title} className={modalStyles.modalRelatedImg} />
                        <div className={modalStyles.modalRelatedOverlay}>
                          <span className={modalStyles.modalRelatedCategory}>{p.category}</span>
                          <h4 className={modalStyles.modalRelatedTitle}>{p.title}</h4>
                          <span className={modalStyles.modalRelatedLink}>Vedi progetto →</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={modalStyles.modalCta}>
                <p className={modalStyles.modalCtaText}>Ti piace questo progetto?</p>
                <a href="#contatti" className="btn btn-primary" onClick={closeProject}>
                  Richiedi un progetto simile
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
