// Contatti.js
import '../styles/Contatti.css';
import pegasoLogo from '../assets/LogoSmall.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PreventivoForm from '../components/PreventivoForm';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import CandidaturaForm from '../components/CandidaturaForm';

const Contatti = () => {


    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [location]);


    return (
        <div className="contattiPageContainer" >
            <img src={pegasoLogo} alt="Pegaso Logo" className="heroLogoContatti" />
            <h1 className="contattiTitle" id='contattaci'>Contattaci</h1>
            <p>Per ulteriori informazioni sui nostri servizi, non esitare a contattarci.</p>

            <div className="contattiContentContainer" >
                <div className="contattiContent" >
                    <ul className="contactList" >
                        <li><FontAwesomeIcon icon={faMobileAlt} /> <a href="tel:3515101152" className='contactLink'>351 5101152</a> (<FontAwesomeIcon icon={faWhatsapp} /> anche su WhatsApp)</li>
                        <li><FontAwesomeIcon icon={faPhone} /> <a href="tel:03211696110" className='contactLink'>0321 1696110</a> </li>
                        <li><FontAwesomeIcon icon={faPhone} /> <a href="tel:0159526649" className='contactLink'>015 9526649</a></li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@pegasomultiservizi.it" className='contactLink'>info@pegasomultiservizi.it</a> </li>
                    </ul>
                </div>
                <div className='contattiDivider'></div>
                <PreventivoForm titleIsVisible={false} />
            </div>

            <h1 className="contattiTitle" id='lavoraConNoi'>Lavora con noi</h1>
            <p>Siamo sempre alla ricerca di personale qualificato, pronto a mettersi in gioco! </p>
            <p>Compila il Form o invia il tuo CV aggiornato a  <a href="mailto:info@pegasomultiservizi.it">info@pegasomultiservizi.it</a> ed inizia a far parte della nostra squadra!</p>

            <CandidaturaForm />


        </div>
    );
}

export default Contatti;
