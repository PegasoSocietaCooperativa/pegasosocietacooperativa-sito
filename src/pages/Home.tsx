import '../styles/Home.css';
import ClientCarousel from '../components/ClientCarousel';
import giardinaggio4Img from '../assets/services/giardinaggio4.jpg';
import pulizie1Img from '../assets/services/pulizie1.jpg';
import caldaia2Img from '../assets/services/caldaia2.jpg';
import controlloAccessi4Img from '../assets/services/portierato4.jpeg'
import tinteggiature1Img from '../assets/services/tinteggiature1.jpg'
import serviziEdili1Img from '../assets/services/edilizia1.jpg'
import pegasoLogo from '../assets/LogoSmall.png';
import ClientSection from '../components/ClientSection';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="container" >
            <div className='hero'>
                <img src={pegasoLogo} alt="Pegaso Logo" className="heroImage" />
                <div className='heroPresentazione'>Con oltre dieci anni di esperienza nel settore, ci specializziamo in servizi di giardinaggio e manutenzione di aree verdi nel Biellese, Vercellese e Novarese. Presso Pegaso, garantiamo massima qualità, affidabilità e precisione nei nostri interventi, sia per la manutenzione ordinaria che straordinaria. Oltre al giardinaggio, operiamo anche nei settori della pulizia, igienizzazione, sanificazione certificata, edilizia residenziale, tinteggiature, termoidraulica, portierato fiduciario e custodia. Effettuiamo sopralluoghi e preventivi gratuiti senza impegno. Per ulteriori informazioni e richieste di preventivo, vi invitiamo a contattarci tramite telefono o email.</div>
            </div>
            <div className="servicesSection">
                <h1 className="servicesTitle">I nostri servizi</h1>

                <div className="servicesContainer">
                    <Link to='/servizi#giardinaggio' className="service">
                        <img src={giardinaggio4Img} alt="Servizio Giardinaggio" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Manutenzione del Verde</h2>
                        </div>
                    </Link>
                    <Link to='/servizi#pulizie' className="service">
                        <img src={pulizie1Img} alt="Servizio Pulizie" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Pulizie e Sanificazioni</h2>
                        </div>
                    </Link>
                    <Link to='/servizi#termoidraulica' className="service">
                        <img src={caldaia2Img} alt="Servizio Termoidraulica" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Termoidraulica</h2>
                        </div>
                    </Link>

                    <Link to='/servizi#portierato' className="service">
                        <img src={controlloAccessi4Img} alt="Servizio Controllo Accessi" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Portierato e controllo accessi</h2>
                        </div>
                    </Link>
                    <Link to='/servizi#tinteggiature' className="service">
                        <img src={tinteggiature1Img} alt="Servizio Tinteggiature" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Tinteggiature</h2>
                        </div>
                    </Link>
                    <Link to='/servizi#edilizia' className="service">
                        <img src={serviziEdili1Img} alt="Servizi Edili" className="serviceImage" />
                        <div className='serviceInfo'>
                            <h2 className="serviceHeading">Servizi Edili</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='clientCarouselSection'>
                <ClientCarousel />
            </div>
            <div className='clientSection'>
                <ClientSection />
            </div>
        </div>
    );
}

export default Home;
