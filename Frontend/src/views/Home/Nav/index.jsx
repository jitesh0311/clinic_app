import React from 'react'
import '../../../styles/_main.scss'
import '../../../styles/Home/Nav/index.scss'
import Logo from '../../../assets/logo.svg'
import RightArrow from '../../../assets/icon_rightArrow.svg'

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className="navbar__left">
            <img className='navbar__left-logo' src = {Logo} alt = "Logo" />
        </div>
        <ul className="navbar__mid">
            <li className='navbar__mid-list'>
              <a className='navbar__mid-list-links' href = "#" >Home</a>
              <a className='navbar__mid-list-links' href = "#" >About us</a>
              <a className='navbar__mid-list-links' href = "#" >Services</a>
              <a className='navbar__mid-list-links' href = "#" >Pages</a>
              <a className='navbar__mid-list-links' href = "#" >Blog</a>
            </li>
        </ul>
        <a href = "#" className='c-btn arrow-anim animHover'>
          <span className='c-btn_text' >Book now</span>
          <img className='c-btn_icon' width={18} height={18} src = {RightArrow} alt = "right-arrow" />
          
        </a>

    </nav>
  )
}

export default Nav
