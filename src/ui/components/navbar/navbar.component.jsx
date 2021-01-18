import React from 'react'
import './navbar.style.scss'
import Feed from '../../static/img/feed.svg'
import { NavLink } from 'react-router-dom'
import Companies from '../../static/img/companies.svg'
import Chat from '../../static/img/chat.svg'
import User from '../../static/img/user.svg'

export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/home" activeClassName="selected">
        <img src={Feed} alt="Feed" />
      </NavLink>

      <NavLink to="/companies" activeClassName="selected">
        <img src={Companies} alt="Feed" />
      </NavLink>

      <span>
        <img src={Chat} alt="Feed" />
      </span>

      <span>
        <img src={User} alt="Feed" />
      </span>
    </div>
  )
}
