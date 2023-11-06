//Header.jsx

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../resoureces/images/logo.png'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-item-center'>
          <div className='logo'>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav className='nav nav-pills'>
            <NavLink to='/' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Home </NavLink>
            <NavLink to='ueber-uns' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Über uns </NavLink>
            <NavLink to='leistungen' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Leistungen </NavLink>
            <NavLink to='blog' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Blog </NavLink>
            <NavLink to='kontakt' className={(navData) => navData.isActive ? 'nav-link activ' : 'nav-link'}> Kontakt </NavLink>
          </nav>

        </div>
      </div>
    </header>
  )
}
