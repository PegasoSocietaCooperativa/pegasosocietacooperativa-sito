import emailjs from 'emailjs-com';
import '../styles/PreventivoForm.css'; // Assicurati di importare lo stile coerente con il resto del sito

const PreventivoForm = () => {
    const sendEmail = (e: any) => {
        e.preventDefault();
        const serviceID = 'service_qnmzx4m';
        const templateID = 'template_xh8wekz';
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

        <div className='preventivoSection'>
            <h1 className='preventivoTitle'>Contattaci ora!</h1>
            <form className="preventivoForm" onSubmit={sendEmail}>
                {/* <input className="formInput" type="text" name="reply_to" placeholder="Your Name" required/> */}
                <input className="formInput" type="email" name="from_name" placeholder="Inserisci la tua mail..." required />
                <textarea className="formTextarea" name="message" placeholder="Scrivi qui il tuo mesaggio..." required></textarea>
                <button className="formButton" type="submit">Invia Richiesta</button>
            </form>
        </div>

    );
}

export default PreventivoForm;
