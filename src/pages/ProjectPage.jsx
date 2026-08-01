import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectPage(){
  const { projectSlug } = useParams()
  const project = projects.find(p=>p.slug===projectSlug)
  if(!project) return (
    <div className="container project-page">
      <h2>Project not found</h2>
      <p className="meta">No project matches that identifier.</p>
      <Link to="/projects">Back to projects</Link>
    </div>
  )

  return (
    <div className="container project-page">
      <h2>{project.title}</h2>
      <p className="meta">{project.summary}</p>

      {/* Approved sections only */}
      <section>
        <h3>Overview</h3>
        <p>Overview content for this case study is intentionally minimal and uses only approved launch content.</p>
      </section>

      <section>
        <h3>Role & contributions</h3>
        <p className="meta">Role and responsibilities as documented in approved launch materials.</p>
      </section>

      <section>
        <h3>Technology</h3>
        <p className="meta">Tech used: React and related libraries (implementation reference).</p>
      </section>

      {project.slug==='boating-hazard-detection' && (
        <section>
          <h3>Safety note</h3>
          <p>This project is a reference application and not certified navigation or safety equipment. It is provided for research and demonstration only.</p>
        </section>
      )}

      <p>
        <Link to="/projects">Back to projects</Link>
      </p>
    </div>
  )
}
