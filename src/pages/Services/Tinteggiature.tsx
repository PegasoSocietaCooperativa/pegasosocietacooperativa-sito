import React from 'react';
import PreventivoForm from '../../components/PreventivoForm';
import tinteggiature1Img from '../../assets/services/tinteggiature1.jpg';
import '../../styles/Tinteggiature.css'; // Assicurati di importare lo stile coerente con il resto del sito

const Tinteggiature = () => {
    return (
        <div className="tinteggiaturePageContainer" id='tinteggiature'>
            {/* HERO CARD DEL SERVIZIO */}
            <div className="heroCard">
                {/* Contenuto della Hero Card */}
                <img src={tinteggiature1Img} alt="Servizio Tinteggiature" className="serviceImage" />
            </div>

            <h1 className="tinteggiaturePageTitle">Servizio di Tinteggiature</h1>
            <div className="tinteggiaturePageContent">
                <p>Il servizio di tinteggiature offre soluzioni professionali per dare nuova vita e freschezza ai tuoi ambienti.</p>
                <p>I nostri esperti forniscono una vasta gamma di servizi di tinteggiatura, tra cui:</p>
                <ul>
                    <li>Tinteggiatura interna ed esterna di edifici residenziali e commerciali</li>
                    <li>Preparazione delle superfici e applicazione di primer e stucchi</li>
                    <li>Utilizzo di vernici di alta qualità e rispettose dell'ambiente</li>
                    <li>Finiture decorative e speciali</li>
                </ul>
                <p>Contattaci oggi stesso per richiedere un preventivo personalizzato!</p>
            </div>
        </div>
    );
}

export default Tinteggiature;
