import React, { FC, ReactElement, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css'
import logo from '../../assets/Logo.png'
import { AuthContext } from '../../context/authContext'

interface NavProps {
    active?: 'Products' | 'None'
}

const NavBar: FC<NavProps> = ({ active }): ReactElement => {
    let navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)

    const onLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <div className="nav-container">
            <Link to="/">
                <img src={logo} className="logo" alt="Judo logo" />
            </Link>
            <div className="link-container">
                <Link to="/products" className="link">
                    Product
                </Link>
                {!user ? (
                    <Link to="/login" className="link">
                        Login
                    </Link>
                ) : (
                    <Link to="/" className="link" onClick={onLogout}>
                        Logout
                    </Link>
                )}
            </div>
        </div>
    )
}

export default NavBar
