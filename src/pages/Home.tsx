import React from 'react';
import '../styles/Home.css';
import ClientCarousel from '../components/ClientCarousel';
import giardinaggio1Img from '../assets/services/giardinaggio1.jpg';
import pulizie1Img from '../assets/services/pulizie1.jpg';
import caldaia1Img from '../assets/services/caldaia1.jpg';
import pegasoLogo from '../assets/LogoSmall.svg';

const Home = () => {
    return (
        <div className="container">
            <div className='hero'>
                <img src={pegasoLogo} alt="Pegaso Logo" className="heroImage" />
                <div className='heroPresentazione'>Con oltre dieci anni di esperienza nel settore, ci specializziamo in servizi di giardinaggio e manutenzione di aree verdi nel Biellese, Vercellese e Novarese. Presso Pegaso, garantiamo massima qualità, affidabilità e precisione nei nostri interventi, sia per la manutenzione ordinaria che straordinaria.

                    Oltre al giardinaggio, operiamo anche nei settori della pulizia, igienizzazione, sanificazione certificata, edilizia residenziale, tinteggiature, termoidraulica, portierato fiduciario e custodia. Effettuiamo sopralluoghi e preventivi gratuiti senza impegno. Per ulteriori informazioni e richieste di preventivo, vi invitiamo a contattarci tramite telefono o email.</div>
            </div>
            <div className="servicesSection">
                <h1 className="servicesTitle">I nostri servizi</h1>
                <div className="servicesContainer">
                    <div className="service">
                        <img src={giardinaggio1Img} alt="Servizio Giardinaggio" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Servizio Giardinaggio</h2>
                        </div>
                    </div>
                    <div className="service">
                        <img src={pulizie1Img} alt="Servizio Pulizie" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Servizio Pulizie</h2>
                        </div>
                    </div>
                    <div className="service">
                        <img src={caldaia1Img} alt="Servizio Termoidraulica" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Servizio Termoidraulica</h2>
                        </div>
                    </div>

                    <div className="service">
                        <img src={giardinaggio1Img} alt="Servizio Giardinaggio" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Servizio Giardinaggio</h2>
                        </div>
                    </div>
                    <div className="service">
                        <img src={pulizie1Img} alt="Servizio Pulizie" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Servizio Pulizie</h2>
                        </div>
                    </div>
                    <div className="service">
                        <img src={caldaia1Img} alt="Servizio Termoidraulica" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Servizio Termoidraulica</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ClientCarousel />
            </div>
        </div>
    );
}

export default Home;
