import React from 'react';
import PreventivoForm from '../../components/PreventivoForm';
import controlloAccessi4Img from '../../assets/services/portierato4.jpeg';
import '../../styles/Portierato.css'; // Assicurati di importare lo stile coerente con il resto del sito

const Portierato = () => {
    return (
        <div className="portieratoPageContainer" id='portierato'>
            {/* HERO CARD DEL SERVIZIO */}
            <div className="heroCard">
                {/* Contenuto della Hero Card */}
                <img src={controlloAccessi4Img} alt="Servizio Portierato" className="serviceImage" />
            </div>

            <h1 className="portieratoPageTitle">Servizio di Portierato e Controllo Accessi</h1>
            <div className="portieratoPageContent">
                <p>Il servizio di portierato e controllo accessi offre una gestione professionale degli accessi e della sicurezza nei tuoi edifici e strutture.</p>
                <p>I nostri addetti sono addestrati per garantire la massima sicurezza e riservatezza, fornendo servizi come:</p>
                <ul>
                    <li>Controllo e registrazione degli accessi</li>
                    <li>Gestione delle chiavi</li>
                    <li>Sorveglianza costante delle aree comuni</li>
                    <li>Assistenza agli ospiti e ai residenti</li>
                    <li>Interventi di sicurezza in caso di emergenza</li>
                </ul>
                <p>Contattaci oggi stesso per richiedere un preventivo personalizzato!</p>
            </div>
        </div>
    );
}

export default Portierato;
