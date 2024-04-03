import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Footer.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerContent'>
                <div className='footerSection'>
                    <h3 className='footerHeading'>Contatti</h3>

                    <p className='footerText'><FontAwesomeIcon icon={faMobileAlt} /> <a href="tel:3515101152" className='footerLink'>351 5101152</a> (<FontAwesomeIcon icon={faWhatsapp} /> anche su WhatsApp)</p>
                    <p className='footerText'><FontAwesomeIcon icon={faPhone} /> <a href="tel:03211696110" className='footerLink'>0321 1696110</a> </p>
                    <p className='footerText'><FontAwesomeIcon icon={faPhone} /> <a href="tel:0159526649" className='footerLink'>015 9526649</a></p>
                    <p className='footerText'><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@pegasomultiservizi.it" className='footerLink'>info@pegasomultiservizi.it</a> </p>

                </div>

                <div className='footerSection'>
                    <h3 className='footerHeading'>Seguici su</h3>
                    <ul className='socialLinks'>
                        <li><a href="https://www.facebook.com/people/Pegaso-Multiservice/100086601938626/" className='footerLink'>Facebook</a></li>
                    </ul>
                </div>
                <div className='footerSection'>
                    <h3 className='footerHeading'>Indirizzo</h3>
                    <p className='footerText'>Corso della Vittoria, 12/B</p>
                    <p className='footerText'>NOVARA, 28100</p>
                </div>
            </div>
            <div className='footerBottom'>
                <p className='footerText'>&copy; 2024 PEGASO SOCIETA' COOPERATIVA - 02262640036</p>
                <p className='footerText'>Tutti i diritti riservati.</p>
                <Link to={"/privacy"} className='footerLink'>Policy Privacy e Cookies</Link>
            </div>
        </footer >
    );
}



export default Footer;
