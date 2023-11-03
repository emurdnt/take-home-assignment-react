import React, { ReactElement } from 'react'
import './Nav.css'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

//need to show and hide things according to if they are logged in or not
const NavBar = (): ReactElement => {
    return (
        <div className="nav-container">
            <img src={logo} className="logo" />
            <div className="link-container">
                <Link to="/products" className="link">
                    Product
                </Link>
                <Link to="/login" className="link">
                    Login
                </Link>
                <Link to="/logout" className="link">
                    Logout
                </Link>
            </div>
        </div>
    )
}

export default NavBar
