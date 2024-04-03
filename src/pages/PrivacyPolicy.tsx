// PrivacyPolicy.js
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
                <p>Questo è un sito informativo senza scopo di lucro.</p>
            </section>

            <section>
                <h2>Trattamento dei dati personali</h2>
                <p>L’informativa è resa ai sensi dell'art. 13 del D. Lgs. n. 196/2003 – Codice in materia di protezione dei dati personali a tutti gli utenti che, interagendo con il Sito, forniscono a questo sito la propria email.</p>
            </section>

            <section>
                <h2>Tipologia dei dati e finalità del trattamento</h2>
                <p>Gli indirizzi email personali forniti attraverso il Sito saranno trattati in modo lecito e secondo correttezza al fine di fornire assistenza solo su novità di articoli e servizi così come previsti dalla Legge.</p>
            </section>

            <section>
                <h3>Dati forniti volontariamente</h3>
                <p>Attraverso il Sito è possibile comunicare l’indirizzo email per ricevere solo informazioni di inserimento di nuovi articoli suggeriti.</p>
            </section>

            <section>
                <h2>Cookies</h2>
                <p>I cookies sono piccoli file di testo che i siti visitati inviano al terminale dell’utente, dove vengono memorizzati, per poi essere ritrasmessi agli stessi siti alla visita successiva.</p>
                <ul>
                    <li>Cookies di sessione</li>
                    <li>Cookies di terza parte</li>
                    <li>Cookies analytics</li>
                </ul>
                <p>I cookies tecnici non sono utilizzati per attività di profilazione dell’Utente.</p>
                <p>Per maggiori informazioni sulla gestione dei cookies, consultare le istruzioni fornite dai relativi fornitori:</p>
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
                <p>La Privacy Policy di questo sito è soggetta ad aggiornamenti.</p>
            </section>
            <section>
                <p>Utilizzando questo sito, l'utente accetta la nostra Politica sulla Privacy e l'uso dei cookie.</p>
            </section>
        </div>
    );
}

export default PrivacyPolicy;
