import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsList(){
  // ordered per specification
  const ordered = [
    projects.find(p=>p.slug==='guide-to-the-keys'),
    projects.find(p=>p.slug==='boating-hazard-detection'),
    projects.find(p=>p.slug==='workout-builder')
  ].filter(Boolean)

  return (
    <section className="projects" aria-label="Projects">
      {ordered.map(p=> <ProjectCard key={p.slug} project={p} />)}
    </section>
  )
}
