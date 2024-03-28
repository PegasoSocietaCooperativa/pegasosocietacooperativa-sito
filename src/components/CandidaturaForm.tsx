import emailjs from 'emailjs-com';
import '../styles/CandidaturaForm.css'; // Assicurati di importare lo stile coerente con il resto del sito

const CandidaturaForm = () => {
    const sendEmail = (e: any) => {
        e.preventDefault();
        const serviceID = 'service_qnmzx4m';
        const templateID = 'template_dunbc9v';
        const userID = 'fkHEG6re4cbWnCToq';

        emailjs.sendForm(serviceID, templateID, e.target, userID).then(
            (response) => {
                alert('Richiesta Inviata!');
            },
            (error) => {
                alert(`C'è stato un errore..., ${error.message}`);
            },
        );

        e.target.reset();
    };

    return (
        <div className='candidaturaSection'>
            <form className="candidaturaForm" onSubmit={sendEmail}>
                <input className="formInput" type="text" name="from_name" placeholder="Nome" required />
                <input className="formInput" type="text" name="from_surname" placeholder="Cognome" required />
                <input className="formInput" type="email" name="from_email" placeholder="E-mail" required />
                <input className="formInput" type="text" name="from_tel" placeholder="Telefono" required />
                <textarea className="formTextarea" name="message" placeholder="Raccontaci di te!" required></textarea>
                <button className="formButton" type="submit">Invia Candidatura</button>
            </form>
        </div>
    );
}

export default CandidaturaForm;
