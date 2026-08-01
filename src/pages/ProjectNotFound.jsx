import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectNotFound(){
  return (
    <div className="container">
      <h2>Project not found</h2>
      <p className="meta">The project you're looking for doesn't exist in the published case studies.</p>
      <Link to="/projects">Back to projects</Link>
    </div>
  )
}
