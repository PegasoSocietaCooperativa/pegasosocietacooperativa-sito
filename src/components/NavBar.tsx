import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import pegasoLogo from '../assets/LogoSmall.svg';

const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="navList">
                <li className="navItem">
                    <Link to="/">
                        <img src={pegasoLogo} alt="logo-psc" className="logo" />
                    </Link>
                </li>
                <li className="navItem">
                    <Link to="/" className="navLink">Home</Link>
                </li>
                <li className="navItem">
                    <Link to="/servizi" className="navLink">Servizi</Link>
                </li>
                <li className="navItem">
                    <Link to="/contatti" className="navLink">Contatti</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
