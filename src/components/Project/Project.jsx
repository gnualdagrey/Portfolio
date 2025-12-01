import React from 'react'
import styles from '../Project/Project.module.css'
import project from '../../data/projects.json'
import {ProjectCard} from '../Project/ProjectCard'
export default function Project() {
  return (
   <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {project.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  )
}
