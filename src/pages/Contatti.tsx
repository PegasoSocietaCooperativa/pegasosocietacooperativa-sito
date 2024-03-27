// Contatti.js
import '../styles/Contatti.css';
import pegasoLogo from '../assets/LogoSmall.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PreventivoForm from '../components/PreventivoForm';

const Contatti = () => {
    return (
        <div className="contattiPageContainer">
            <img src={pegasoLogo} alt="Pegaso Logo" className="heroLogoContatti" />
            <h1 className="contattiTitle">Contattaci</h1>
            <p>Per ulteriori informazioni sui nostri servizi, non esitare a contattarci.</p>

            <div className="contattiContentContainer">
                <div className="contattiContent">
                    <ul className="contactList">
                        <li><FontAwesomeIcon icon={faPhone} /> +39 0321.1696110 / +39 015.9526649</li>
                        <li><FontAwesomeIcon icon={faMobileAlt} /> +39 351/5101152 (<FontAwesomeIcon icon={faWhatsapp} /> anche su WhatsApp)</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> direzione.pegaso@libero.it / soc.pegaso@libero.it</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> info@pegasomultiservizi.it (per collaborazioni e preventivi)</li>
                    </ul>
                </div>
                <div className='contattiDivider'></div>
                <PreventivoForm titleIsVisible={false} />
            </div>
        </div>
    );
}

export default Contatti;
