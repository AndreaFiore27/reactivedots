import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DotBackground from './DotBackground';
import PROJECTS from '../data/projects';
import CtaBanner from './CtaBanner';

import styles from '../styles/ProjectsPage.module.css';

const CATEGORIES = [
  'Tutti',
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('Tutti');
  const [activeProject, setActiveProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  const closeProject = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveProject(null);
      setIsClosing(false);
    }, 400);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state?.openProject != null) {
      const idx = location.state.openProject;
      if (idx >= 0 && idx < PROJECTS.length) {
        setActiveProject(PROJECTS[idx]);
      }
      // Clear the state so refreshing doesn't re-open
      window.history.replaceState({}, '');
    }
  }, []);

  useEffect(() => {
    if (activeProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeProject]);

  const filtered = activeFilter === 'Tutti'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

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
    <section className={styles.section}>
      <DotBackground />

      <div className={styles.inner}>
        <div className={styles.header}>
          <Link to="/" className={styles.backLink}>← Torna alla home</Link>
          <p className={styles.tag}>PORTFOLIO COMPLETO</p>
          <h1 className={styles.heading}>
            TUTTI I PROGETTI<span className={styles.pulseDot}>●</span>
          </h1>
          <p className={styles.subtitle}>
            {PROJECTS.length} progetti — Filtra per categoria
          </p>
        </div>

        <div className={styles.filters}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
              {cat === 'Tutti' && <span className={styles.filterCount}>{PROJECTS.length}</span>}
              {cat !== 'Tutti' && (
                <span className={styles.filterCount}>
                  {PROJECTS.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={styles.card}
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={() => setActiveProject(project)}
            >
              <img src={project.image} alt={project.title} className={styles.cardImg} />
              <div className={styles.cardOverlay}>
                <span className={styles.cardCategory}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div className={styles.cardMeta}>
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
                <span className={styles.cardLink}>Vedi progetto →</span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>Nessun progetto in questa categoria.</p>
        )}
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className={`${styles.modal} ${isClosing ? styles.modalClosing : ''}`}>
          <div className={styles.modalScroll}>
            <button
              className={styles.modalClose}
              onClick={closeProject}
              aria-label="Chiudi"
            >
              ✕
            </button>

            <div className={styles.modalHero}>
              <img src={activeProject.image} alt={activeProject.title} className={styles.modalHeroImg} />
              <div className={styles.modalHeroOverlay} />
              <div className={styles.modalHeroContent}>
                <span className={styles.modalCategory}>{activeProject.category}</span>
                <h2 className={styles.modalTitle}>{activeProject.title}</h2>
                <div className={styles.modalMeta}>
                  <div className={styles.modalMetaItem}>
                    <span className={styles.modalMetaLabel}>Cliente</span>
                    <span className={styles.modalMetaValue}>{activeProject.client}</span>
                  </div>
                  <div className={styles.modalMetaItem}>
                    <span className={styles.modalMetaLabel}>Anno</span>
                    <span className={styles.modalMetaValue}>{activeProject.year}</span>
                  </div>
                  <div className={styles.modalMetaItem}>
                    <span className={styles.modalMetaLabel}>Durata</span>
                    <span className={styles.modalMetaValue}>{activeProject.duration}</span>
                  </div>
                  <div className={styles.modalMetaItem}>
                    <span className={styles.modalMetaLabel}>Team</span>
                    <span className={styles.modalMetaValue}>{activeProject.team} persone</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalStats}>
                {activeProject.results.map((r) => (
                  <div key={r.label} className={styles.modalStatItem}>
                    <span className={styles.modalStatValue}>{r.value}</span>
                    <span className={styles.modalStatLabel}>{r.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.modalOverview}>
                <h3 className={styles.modalSectionTitle}>Il Progetto</h3>
                <p className={styles.modalTextLarge}>{activeProject.desc}</p>
              </div>

              <div className={styles.modalDeliverables}>
                <span className={styles.modalDeliverablesLabel}>Deliverables</span>
                <span className={styles.modalDeliverablesValue}>{activeProject.deliverables}</span>
              </div>

              <div className={styles.modalRow}>
                <div className={styles.modalCol}>
                  <h3 className={styles.modalSectionTitle}>La Sfida</h3>
                  <p className={styles.modalText}>{activeProject.challenge}</p>
                </div>
                <div className={styles.modalCol}>
                  <h3 className={styles.modalSectionTitle}>Il Nostro Approccio</h3>
                  <p className={styles.modalText}>{activeProject.approach}</p>
                </div>
              </div>

              <div className={styles.modalWorkflowSection}>
                <h3 className={styles.modalSectionTitle}>Il Nostro Workflow</h3>
                <div className={styles.modalWorkflow}>
                  {activeProject.workflow.map((step, idx) => (
                    <div key={step} className={styles.modalWorkflowStep}>
                      <span className={styles.modalWorkflowNum}>{String(idx + 1).padStart(2, '0')}</span>
                      <span className={styles.modalWorkflowLabel}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.modalRow}>
                <div className={styles.modalCol}>
                  <h3 className={styles.modalSectionTitle}>Servizi</h3>
                  <div className={styles.modalServicesTags}>
                    {activeProject.services.map((s) => (
                      <span key={s} className={styles.modalServiceTag}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.modalCol}>
                  <h3 className={styles.modalSectionTitle}>Attrezzatura</h3>
                  <div className={styles.modalServicesTags}>
                    {activeProject.gear.map((g) => (
                      <span key={g} className={styles.modalServiceTag}>{g}</span>
                    ))}
                  </div>
                </div>
              </div>

              {related.length > 0 && (
                <div className={styles.modalRelated}>
                  <h3 className={styles.modalSectionTitle}>Progetti Correlati</h3>
                  <div className={styles.modalRelatedGrid}>
                    {related.map((p) => (
                      <div
                        key={p.title}
                        className={styles.modalRelatedCard}
                        onClick={() => {
                          setActiveProject(p);
                          document.querySelector(`.${styles.modalScroll}`)?.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        <img src={p.image} alt={p.title} className={styles.modalRelatedImg} />
                        <div className={styles.modalRelatedOverlay}>
                          <span className={styles.modalRelatedCategory}>{p.category}</span>
                          <h4 className={styles.modalRelatedTitle}>{p.title}</h4>
                          <span className={styles.modalRelatedLink}>Vedi progetto →</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <CtaBanner onCtaClick={closeProject} />
          </div>
        </div>
      )}
    </section>
  );
}
