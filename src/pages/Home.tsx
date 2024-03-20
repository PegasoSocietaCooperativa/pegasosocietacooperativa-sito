import React from 'react';
import ClientCarousel from '../components/ClientCarousel';

const Home = () => {
    return (
        <>
            <div style={styles.container}>
                <h1>Benvenuti su Pegaso Società Multiservizi</h1>
                <p>
                    Siamo lieti di presentarvi i servizi offerti da PEGASO SOCIETA' MULTISERVIZI. Con oltre dieci anni di esperienza nel settore, ci specializziamo in servizi di giardinaggio e manutenzione aree verdi nel Biellese, Vercellese e Novarese.
                </p>
                <p>
                    Presso Pegaso, garantiamo massima qualità, affidabilità e precisione nei nostri interventi, sia per la manutenzione ordinaria che straordinaria. Offriamo servizi di sfalcio, pulizia manti erbosi, potatura siepi e molto altro, utilizzando solo metodi e strumenti professionali.
                </p>
                <p>
                    Oltre al giardinaggio, operiamo anche nei settori della pulizia, igienizzazione e sanificazioni certificate, edilizia residenziale, tinteggiature, termoidraulica, portierato fiduciario e custodia.
                </p>
                <p>
                    Effettuiamo sopralluoghi e preventivi gratuiti senza impegno. Per ulteriori informazioni e richieste di preventivo, vi invitiamo a contattarci ai seguenti recapiti:
                </p>
                <ul>
                    <li>Telefono: +39 351.5101152 / +39 015.9526649 (anche su WhatsApp)</li>
                    <li>Email: <a href="mailto:info@pegasomultiservizi.it">info@pegasomultiservizi.it</a></li>
                </ul>
                <p>Rimaniamo a vostra disposizione per qualsiasi domanda o chiarimento.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>I nostri servizi</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>Servizio 1</li>
                    <li>Servizio 2</li>
                    <li>Servizio 3</li>
                    {/* Aggiungi altri servizi qui */}
                </ul>
            </div>
            <ClientCarousel />

        </>
    );
}
const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    },
};

export default Home;