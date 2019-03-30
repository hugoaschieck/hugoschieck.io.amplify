import React from 'react'
import './Header.css'
import logo from '../Images/logo.png'
import ToggleButton from '../SideDrawer/ToggleButton';
import { Link } from 'react-router-dom';

const Header = props => (

    <header className="header">
        <nav className="header-navigation">
            <div className="header-toggle-button"><ToggleButton click={props.drawerClickHandler} /></div>
            <div className="header-logo"><a href="/"><img src={logo} alt="logo" />hugoschieck.io</a></div>
            <div className="header-spacer" />
            <div className="header-navigation-items">
                <ul>
                    <li>
                        <Link to="/about" strict="true">About</Link>
                        <a href="https://github.com/hugoaschieck/hugoschieck.io.amplify">Github</a>
                        <a href="https://www.linkedin.com/in/hugo-schieck-aa5b19179/">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

)

export default Header
