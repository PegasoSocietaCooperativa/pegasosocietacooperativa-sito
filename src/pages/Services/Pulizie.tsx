import React from 'react';
import PreventivoForm from '../../components/PreventivoForm';
import pulizie1Img from '../../assets/services/pulizie1.jpg';
import '../../styles/Pulizie.css';

const Pulizie = () => {
    return (
        <div className="puliziePageContainer" id='pulizie'>
            <div className="heroCard">
                <img src={pulizie1Img} alt="Servizio Pulizie" className="serviceImage" />
            </div>
            <h1 className="puliziePageTitle">Servizi di Pulizie</h1>
            <div className="puliziePageContent">
                <p>Il nostro servizio di pulizie offre una vasta gamma di soluzioni per la tua casa o ufficio. Siamo specializzati in:</p>
                <ul>
                    <li>Pulizia domestica regolare</li>
                    <li>Pulizia profonda post-costruzione o post-rinnovamento</li>
                    <li>Pulizia di uffici e locali commerciali</li>
                    <li>Trattamenti specifici per pavimenti e tappeti</li>
                    <li>Trattamenti per la disinfezione e sanificazione degli ambienti</li>
                </ul>
                <p>Il nostro team altamente qualificato e attrezzato con i migliori strumenti e prodotti sul mercato garantisce risultati di alta qualità e soddisfazione del cliente. Contattaci oggi stesso per richiedere un preventivo gratuito!</p>
            </div>
            <PreventivoForm />
        </div>
    );
}

export default Pulizie;
