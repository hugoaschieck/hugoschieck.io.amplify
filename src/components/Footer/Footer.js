import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-navigation-items">
                    <p>© 2019, hugoschieck.io</p>
                    <ul>
                        <li>
                            <Link to="/terms" strict="true" style={{color: 'white'}}>Terms of Use</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}
