import '../styles/Footer.css';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerContent'>
                <div className='footerSection'>
                    <h3 className='footerHeading'>Contatti</h3>
                    <p className='footerText'><a href='mailto:info@pegasomultiservizi.it' className='footerLink'>info@pegasomultiservizi.it</a></p>
                    <p className='footerText'><a href='callto:+393515101152' className='footerLink'>+39 351 5101152</a></p>
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
                <p className='footerText'>&copy; 2024 PEGASO SOCIETA' COOPERATIVA. Tutti i diritti riservati.</p>
            </div>
        </footer>
    );
}



export default Footer;
