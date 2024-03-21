import ClientCarousel from '../components/ClientCarousel';
import giardinaggio1Img from '../assets/services/giardinaggio1.jpg';
import pulizie1Img from '../assets/services/pulizie1.jpg';
import caldaia1Img from '../assets/services/caldaia1.jpg';
import pegasoLogo from '../assets/LogoSmall.svg';

const Home = () => {
    return (
        <div style={styles.container}>
            <div style={styles.hero}>
                <img src={pegasoLogo} alt="Pegaso Logo" style={styles.heroImage} />
                <div style={styles.heroText}>
                    <h1 style={styles.heroHeading}>Benvenuti su Pegaso Società Cooperativa</h1>
                    <p style={styles.heroDescription}>
                        Siamo lieti di presentarvi i servizi offerti da Pegaso Società Multiservizi. Con oltre dieci anni di esperienza nel settore, ci specializziamo in servizi di giardinaggio e manutenzione di aree verdi nel Biellese, Vercellese e Novarese. Presso Pegaso, garantiamo massima qualità, affidabilità e precisione nei nostri interventi, sia per la manutenzione ordinaria che straordinaria.
                    </p>
                    <p style={styles.heroDescription}>
                        Oltre al giardinaggio, operiamo anche nei settori della pulizia, igienizzazione, sanificazione certificata, edilizia residenziale, tinteggiature, termoidraulica, portierato fiduciario e custodia. Effettuiamo sopralluoghi e preventivi gratuiti senza impegno. Per ulteriori informazioni e richieste di preventivo, vi invitiamo a contattarci tramite telefono o email.
                    </p>

                </div>
            </div>

            <div style={styles.servicesSection}>
                <h1 style={styles.servicesTitle}>I nostri servizi</h1>
                <div style={styles.servicesContainer}>
                    <div style={styles.service}>
                        <img src={giardinaggio1Img} alt="Servizio Giardinaggio" style={styles.serviceImage} />
                        <h2 style={styles.serviceHeading}>Servizio Giardinaggio</h2>
                        <p style={styles.serviceDescription}>Offriamo servizi di giardinaggio professionale per mantenere il vostro spazio verde sempre in perfette condizioni.</p>
                    </div>
                    <div style={styles.service}>
                        <img src={pulizie1Img} alt="Servizio Pulizie" style={styles.serviceImage} />
                        <h2 style={styles.serviceHeading}>Servizio Pulizie</h2>
                        <p style={styles.serviceDescription}>Effettuiamo pulizie, igienizzazioni e sanificazioni certificate per garantire ambienti sicuri e salubri.</p>
                    </div>
                    <div style={styles.service}>
                        <img src={caldaia1Img} alt="Servizio Termoidraulica" style={styles.serviceImage} />
                        <h2 style={styles.serviceHeading}>Servizio Termoidraulica</h2>
                        <p style={styles.serviceDescription}>Ci occupiamo di installazione, manutenzione e riparazione di impianti termoidraulici per garantire il corretto funzionamento.</p>
                    </div>
                </div>
            </div>

            <ClientCarousel />
        </div>
    );
}

const styles: any = {
    container: {
        width: '94%',
        margin: '0 auto',
    },
    hero: {
        backgroundColor: '#390979',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '40px',
        borderRadius: '0% 0% 10% 10%'
    },
    heroImage: {
        width: '50%',
        height: 'auto',
    },
    heroText: {
        flex: '1',
        marginLeft: '40px',
    },
    heroHeading: {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#ff0000',
    },
    heroDescription: {
        fontSize: '18px',
        lineHeight: '1.6',
        marginBottom: '20px',
        color: 'white',
    },

    servicesSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '3px solid #390979',
    },
    servicesTitle: {
        display: 'flex',
        justifyContent: 'center',
        color: '#ff0000'
    },
    servicesContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '40px',
    },
    service: {
        flex: '1',
        textAlign: 'center',
        backgroundColor: '#390979', // blu
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        margin: '10px',
    },
    serviceImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
        marginBottom: '10px',
    },
    serviceHeading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#ff0000', // rosso
    },
    serviceDescription: {
        fontSize: '16px',
        lineHeight: '1.6',
        color: 'white',
    },
};

export default Home;
