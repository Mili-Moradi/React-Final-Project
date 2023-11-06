//Footer.jsx

import React from 'react'
import { NavLink , Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>

        <nav className='d-flex justify-content-center'>
          <NavLink to='/' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Home </NavLink>
          <NavLink to='ueber-uns' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Über uns </NavLink>
          <NavLink to='leistungen' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Leistungen </NavLink>
          <NavLink to='blog' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Blog </NavLink>
          <NavLink to='kontakt' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Kontakt </NavLink>
        </nav>

      </div>
      <div>
      <nav className='d-flex justify-content-center'>
          <NavLink to='impressum' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Impressum </NavLink>
          <NavLink to='datenschutz' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Datenschutz </NavLink>
      </nav></div>
    </footer>
  )
}
