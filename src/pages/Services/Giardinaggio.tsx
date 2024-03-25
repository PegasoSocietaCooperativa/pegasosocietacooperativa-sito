import '../../styles/Giardinaggio.css'; // Assicurati di importare lo stile coerente con il resto del sito

const Giardinaggio = () => {
    return (
        <div className="giardinaggioPageContainer">
            {/* AGGIUNGERE HERO CARD DEL SERVIZIO */}
            {/* AGGIUNGERE "RICHIEDI ORA UN PREVENTIVO GRATUITO" */}
            <h1 className="giardinaggioPageTitle">Servizi di Giardinaggio</h1>
            <div className="giardinaggioPageContent">
                <p>PEGASO SOCIETA’ COOPERATIVA si occupa sia di manutenzione ordinaria regolare che di quella straordinaria.</p>
                <p>Si impegna a mantenere il giardino del cliente in perfette condizioni nel tempo.</p>
                <p>Si effettuano sfalci, pulizie dei manti erbosi, potature siepi e tanto altro, tutto ciò utilizzando metodi e strumenti professionali con il nostro personale competente e qualificato, pronto a soddisfare ogni tipologia di clientela, dal pubblico al privato.</p>
                <p>Contattaci per chiedere un preventivo con sopralluogo gratuito!</p>
            </div>
        </div>
    );
}

export default Giardinaggio;
