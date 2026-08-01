import React from 'react'
import ProjectsList from '../components/ProjectsList'

export default function ProjectsPage(){
  return (
    <div className="container main-grid">
      <h2>Projects</h2>
      <p className="meta">Ordered case studies.</p>
      <ProjectsList />
    </div>
  )
}
