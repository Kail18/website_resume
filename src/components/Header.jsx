import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="site-header" role="banner">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1 className="site-title">Résumé</h1>
        <nav className="nav" aria-label="Primary">
          <NavLink to="/" end className={({isActive})=>isActive?undefined:undefined} aria-current={({isActive})=>isActive?"page":undefined}>Home</NavLink>
          <NavLink to="/projects" className={({isActive})=>isActive?undefined:undefined} aria-current={({isActive})=>isActive?"page":undefined}>Projects</NavLink>
        </nav>
      </div>
    </header>
  )
}
