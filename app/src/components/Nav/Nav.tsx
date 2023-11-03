import React, { ReactElement, useContext } from 'react'
import './Nav.css'
import logo from '../../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const NavBar = (): ReactElement => {
    let navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)

    const onLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <div className="nav-container">
            <img src={logo} className="logo" />
            <div className="link-container">
                <Link to="/products" className="link">
                    Product
                </Link>
                {!user ? (
                    <Link to="/login" className="link">
                        Login
                    </Link>
                ) : (
                    <Link to="/logout" className="link" onClick={onLogout}>
                        Logout
                    </Link>
                )}
            </div>
        </div>
    )
}

export default NavBar
