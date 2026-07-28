import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { data } from '../data';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'qa', label: 'QA Testing' },
  { id: 'frontend', label: 'Engineering' },
];

export function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? data.projects
    : data.projects.filter((project) => project.category.includes(filter));

  return (
    <section id="projects" className="section shell">
      <motion.div
        className="section__header section__header--split"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2>Testing case studies and engineering projects with clear scope.</h2>
        </div>
        <p className="section__note">
          A stronger portfolio shows how you think. These cards mix real repo work with dummy QA projects that can be replaced by approved platform examples later.
        </p>
      </motion.div>

      <motion.div
        className="controls"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {filters.map((item) => (
          <motion.button
            key={item.id}
            className={`chip ${filter === item.id ? 'active' : ''}`}
            onClick={() => setFilter(item.id)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="button"
          >
            {item.label}
          </motion.button>
        ))}
      </motion.div>

      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.article
              key={project.title}
              className={`project-card ${index === 0 && filter === 'all' ? 'project-card--featured' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              layout
              style={{ '--gradient': project.gradient }}
            >
              <div className="project-card__accent" aria-hidden="true" />
              <div className="project-card__content">
                <div className="project-card__kicker">Case {String(index + 1).padStart(2, '0')}</div>
                <div className="project-card__header">
                  <h3>{project.title}</h3>
                  <span className="tag">{project.tech}</span>
                </div>
                <p className="project-card__body">{project.body}</p>
                <ul className="project-card__bullets">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    View repository
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
