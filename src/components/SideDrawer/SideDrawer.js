import React from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom';

const SideDrawer = props => {
  return (
    <nav className="side-drawer">
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Blogs</Link></li>
        </ul>
    </nav>
  )
}

export default SideDrawer
