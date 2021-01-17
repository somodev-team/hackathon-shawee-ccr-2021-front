import React from 'react'
import './navbar.style.scss'
import Feed from '../../static/img/feed.svg'
import { Link } from 'react-router-dom'
import Companies from '../../static/img/companies.svg'
import Chat from '../../static/img/chat.svg'
import User from '../../static/img/user.svg'

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/feed">
        <img src={Feed} alt="Feed" />
      </Link>

      <Link to="/companies">
        <img src={Companies} alt="Feed" />
      </Link>

      <Link to="/chat">
        <img src={Chat} alt="Feed" />
      </Link>

      <Link to="/profile">
        <img src={User} alt="Feed" />
      </Link>
    </div>
  )
}
