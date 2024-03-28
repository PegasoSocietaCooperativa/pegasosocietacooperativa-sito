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
                <li className="navItem dropdownServizi">
                    <Link to="/servizi" className="navLink">Servizi</Link>
                    <div className="dropdown-contentServizi">
                        <Link to="/servizi#giardinaggio">Giardinaggio</Link>
                        <Link to="/servizi#pulizie">Pulizie e Sanificazioni</Link>
                        <Link to="/servizi#termoidraulica">Termoidraulica</Link>
                        <Link to="/servizi#portierato">Portierato e Controllo Accessi</Link>
                        <Link to="/servizi#tinteggiature">Tinteggiature</Link>
                        <Link to="/servizi#edilizia">Edilizia</Link>
                    </div>
                </li>
                <li className="navItem">
                    <Link to="/contatti" className="navLink">Contatti</Link>
                </li>
            </ul>
        </nav >
    );
}

export default NavBar;
