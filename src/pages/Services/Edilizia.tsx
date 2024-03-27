import React from 'react';
import PreventivoForm from '../../components/PreventivoForm';
import serviziEdili1Img from '../../assets/services/edilizia1.jpg';
import '../../styles/Edilizia.css'; // Assicurati di importare lo stile coerente con il resto del sito

const Edilizia = () => {
    return (
        <div className="serviziEdiliPageContainer" id='edilizia'>
            {/* HERO CARD DEL SERVIZIO */}
            <div className="heroCard">
                {/* Contenuto della Hero Card */}
                <img src={serviziEdili1Img} alt="Servizio Edilizia" className="serviceImage" />
            </div>

            <h1 className="serviziEdiliPageTitle">Servizi Edili</h1>
            <div className="serviziEdiliPageContent">
                <p>Offriamo una vasta gamma di servizi edili per soddisfare le tue esigenze di costruzione e ristrutturazione. Il nostro team altamente qualificato è pronto ad assisterti in progetti di varia complessità.</p>
                <p>I nostri servizi includono, ma non sono limitati a:</p>
                <ul>
                    <li>Costruzione di nuove strutture</li>
                    <li>Ristrutturazioni e ampliamenti</li>
                    <li>Demolizioni controllate</li>
                    <li>Lavori di muratura e cemento armato</li>
                    <li>Impianti elettrici e idraulici</li>
                    <li>Installazione di pavimenti e rivestimenti</li>
                </ul>
                <p>Contattaci oggi stesso per discutere i tuoi progetti ed ottenere un preventivo personalizzato!</p>
            </div>

        </div>
    );
}

export default Edilizia;
