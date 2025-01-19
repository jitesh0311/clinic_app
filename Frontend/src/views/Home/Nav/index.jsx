import React from 'react'
import '../../../styles/Home/Nav/index.scss'

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className="navbar__left">
            <h1 className='navbar__left-logo'>Hello</h1>
        </div>
        <ul className="navbar__right">
            <li>Home</li>
        </ul>
    </nav>
  )
}

export default Nav
