import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{ ...styles.nav, position: 'sticky', top: 0 }}>
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

const styles: any = {
    nav: {
        backgroundColor: '#390979',
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

// Aggiungi uno stile hover agli elementi della lista
styles.navLink[':hover'] = {
    color: '#ff0000', // Cambia il colore al passaggio del mouse
};

export default NavBar;
