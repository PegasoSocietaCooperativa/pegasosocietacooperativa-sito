import React from 'react';
import PreventivoForm from '../../components/PreventivoForm';
import caldaia2Img from '../../assets/services/caldaia2.jpg';
import '../../styles/Termoidraulica.css'; // Assicurati di importare lo stile coerente con il resto del sito

const Termoidraulica = () => {
    return (
        <div className="termoidraulicaPageContainer" id='termoidraulica'>
            {/* HERO CARD DEL SERVIZIO */}
            <div className="heroCard">
                {/* Contenuto della Hero Card */}
                <img src={caldaia2Img} alt="Servizio Termoidraulica" className="serviceImage" />
            </div>

            <h1 className="termoidraulicaPageTitle">Servizio di Termoidraulica</h1>
            <div className="termoidraulicaPageContent">
                <p>Il servizio di termoidraulica offre soluzioni complete per l'installazione, manutenzione e riparazione di impianti di riscaldamento, condizionamento e idraulica.</p>
                <p>I nostri professionisti qualificati sono in grado di gestire una vasta gamma di servizi, tra cui:</p>
                <ul>
                    <li>Installazione e manutenzione di caldaie e sistemi di riscaldamento</li>
                    <li>Riparazione e sostituzione di tubazioni e impianti idraulici</li>
                    <li>Installazione e manutenzione di impianti di climatizzazione</li>
                    <li>Manutenzione e controllo della qualità dell'acqua</li>
                </ul>
                <p>Contattaci oggi stesso per ricevere assistenza professionale e preventivi personalizzati!</p>
            </div>
        </div>
    );
}

export default Termoidraulica;
