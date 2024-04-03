import { useEffect } from 'react';
import '../styles/PrivacyPolicy.css';
import { useLocation } from 'react-router-dom';

const PrivacyPolicy = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="privacyPolicyContainer">
            <h1>Informativa sulla privacy</h1>

            <section>
                <h2>Scopo del Sito</h2>
                <p>Benvenuto nell'informativa sulla privacy di [Nome del Sito]. La tua privacy è importante per noi e ci impegniamo a proteggere e rispettare le tue informazioni personali. Questa pagina ti fornirà informazioni su come vengono gestiti i tuoi dati quando utilizzi il nostro sito.</p>
                <p>Il nostro sito è un'importante risorsa informativa, dedicata a far conoscere PEGASO e i servizi che offre. Operiamo senza fini di lucro e ci impegniamo a fornire informazioni accurate e aggiornate ai nostri utenti.</p>
            </section>

            <section>
                <h2>Trattamento dei dati personali</h2>
                <p>L’informativa è resa ai sensi dell'art. 13 del D. Lgs. n. 196/2003 – Codice in materia di protezione dei dati personali a tutti gli utenti che, interagendo con il Sito, forniscono a questo sito la propria email.</p>
                <p>Presso [Nome del Sito], trattiamo i dati personali in conformità con le leggi applicabili in materia di protezione dei dati, incluso il D. Lgs. n. 196/2003. Questo significa che ci impegniamo a trattare i tuoi dati in modo trasparente, lecito e secondo principi di correttezza e riservatezza.</p>
                <p>Quando utilizzi il nostro sito e fornisci la tua email, ci impegniamo a utilizzare queste informazioni solo per gli scopi specifici indicati e previsti dalla legge. La tua privacy è importante per noi e non condivideremo mai i tuoi dati con terze parti senza il tuo consenso esplicito.</p>
            </section>

            <section>
                <h2>Tipologia dei dati e finalità del trattamento</h2>
                <p>Gli indirizzi email personali forniti attraverso il Sito saranno trattati in modo lecito e secondo correttezza al fine di fornire assistenza solo su novità di articoli e servizi così come previsti dalla Legge.</p>
                <p>Utilizziamo i tuoi dati personali, come l'indirizzo email fornito, solo per gli scopi specifici indicati e previsti dalla legge. Questi scopi potrebbero includere l'invio di comunicazioni relative ad aggiornamenti del sito, nuovi articoli o servizi che potrebbero interessarti.</p>
                <p>Assicuriamo che i tuoi dati verranno trattati con la massima riservatezza e non saranno utilizzati per scopi diversi da quelli specificati, né verranno condivisi con terze parti senza il tuo consenso esplicito.</p>
            </section>

            <section>
                <h2>Cookies</h2>
                <p>I cookies sono piccoli file di testo che i siti visitati inviano al terminale dell’utente, dove vengono memorizzati, per poi essere ritrasmessi agli stessi siti alla visita successiva.</p>
                <p>Utilizziamo i cookie per migliorare l'esperienza di navigazione degli utenti e per raccogliere informazioni sulle interazioni con il sito. I cookie ci aiutano a comprendere come gli utenti utilizzano il nostro sito web e ci forniscono informazioni utili per migliorare e personalizzare la tua esperienza.</p>
                <p>I cookies tecnici non sono utilizzati per attività di profilazione dell’Utente, ma sono essenziali per il corretto funzionamento del sito.</p>
                <p>Per maggiori informazioni sulla gestione dei cookies e per personalizzare le tue impostazioni, consulta le istruzioni fornite dai relativi fornitori:</p>
                <ul>
                    <li><a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                    <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                    <li><a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer">Safari</a></li>
                    <li><a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                    <li><a href="https://help.opera.com/it/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer">Opera</a></li>
                </ul>
            </section>

            <section>
                <h2>Aggiornamenti</h2>
                <p>La Privacy Policy di questo sito è soggetta ad aggiornamenti. Eventuali modifiche saranno pubblicate su questa pagina e la data di "Ultima modifica" sarà aggiornata di conseguenza.</p>
                <p>Ti consigliamo di controllare periodicamente questa pagina per rimanere informato su eventuali cambiamenti. Utilizzando il sito dopo la pubblicazione di eventuali modifiche, accetti tali modifiche alla Privacy Policy.</p>
            </section>

            <section>
                <p>Utilizzando questo sito, l'utente accetta la nostra Politica sulla Privacy e l'uso dei cookie. Se non sei d'accordo con questa Politica, ti preghiamo di non utilizzare il sito.</p>
            </section>

        </div>
    );
}

export default PrivacyPolicy;
