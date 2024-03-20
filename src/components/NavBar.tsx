import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/">
                        <img src={require('../assets/LogoSmall.svg').default} alt="logo-psc" style={styles.logo} />
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/servizi" style={styles.navLink}>Servizi</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/contatti" style={styles.navLink}>Contatti</Link>
                </li>
            </ul>
        </nav>
    );
}

const styles = {
    nav: {
        backgroundColor: '#333',
        padding: '10px 20px',
    },
    navList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    navItem: {
        marginRight: '20px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '21px',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
    logo: {
        width: '50px', // Imposta la larghezza del logo in base alle tue esigenze
        height: 'auto', // Imposta l'altezza su auto per mantenere le proporzioni originali
    }
};

export default NavBar;
