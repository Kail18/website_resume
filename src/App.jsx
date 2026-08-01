import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import ProjectNotFound from './pages/ProjectNotFound'

export default function App(){
  return (
    <div className="app-root">
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/projects/:projectSlug" element={<ProjectPage/>} />
          <Route path="*" element={<ProjectNotFound/>} />
        </Routes>
      </main>
    </div>
  )
}
