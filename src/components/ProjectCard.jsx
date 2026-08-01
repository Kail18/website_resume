import React from 'react'

export default function ProjectCard({project}){
  // semantic article, heading, one-line summary, exactly one native link to case-study (internal)
  return (
    <article className="project-card" aria-labelledby={`project-${project.slug}`}>
      <h3 id={`project-${project.slug}`}>{project.title}</h3>
      <p>{project.summary}</p>
      <a className="case-link" href={`/projects/${project.slug}`}>Read case study</a>
    </article>
  )
}
