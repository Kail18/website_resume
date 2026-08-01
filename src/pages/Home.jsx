import React from 'react'
import ProjectsList from '../components/ProjectsList'

export default function Home(){
  return (
    <div className="container main-grid">
      <h2>Welcome</h2>
      <p className="meta">Selected projects and case studies.</p>
      <ProjectsList />
    </div>
  )
}
