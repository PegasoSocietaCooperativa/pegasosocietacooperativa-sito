import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <div style={styles.footerSection}>
                    <h3 style={styles.footerHeading}>Contatti</h3>
                    <p>Email: info@azienda.com</p>
                    <p>Telefono: +1234567890</p>
                </div>
                <div style={styles.footerSection}>
                    <h3 style={styles.footerHeading}>Seguici su</h3>
                    <ul style={styles.socialLinks}>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div style={styles.footerSection}>
                    <h3 style={styles.footerHeading}>Indirizzo</h3>
                    <p>Via dell'esempio, 123</p>
                    <p>Città, CAP 12345</p>
                    <p>Italia</p>
                </div>
            </div>
            <div style={styles.footerBottom}>
                <p>&copy; 2024 Azienda. Tutti i diritti riservati.</p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '25px 0',
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        // flexWrap: 'wrap',
    },
    footerSection: {
        flex: '1 1 300px',
        marginBottom: '30px',
    },
    footerHeading: {
        fontSize: '20px',
        marginBottom: '20px',
    },
    socialLinks: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        // flexDirection: 'column',
    },
    footerBottom: {
        borderTop: '1px solid #fff',
        marginTop: '30px',
        paddingTop: '20px',
    },
};

export default Footer;
