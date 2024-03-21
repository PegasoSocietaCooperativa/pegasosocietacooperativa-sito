const Servizi = () => {
    return (
        <div style={styles.sectionContainer}>
            <h1>I nostri servizi</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>Servizio 5</li>
                <li>Servizio 2</li>
                <li>Servizio 3</li>
                {/* Aggiungi altri servizi qui */}
            </ul>
        </div>
    );
}

const styles: any = {
    sectionContainer: {
        borderTop: '3px solid grey',
        textAlign: 'center',
        padding: '20px',
    }
}

export default Servizi;
