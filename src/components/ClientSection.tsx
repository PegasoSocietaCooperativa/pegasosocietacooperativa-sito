import React from 'react';
import '../styles/ClientSection.css';
import acquaSaponeImage from '../assets/clients/AcquaSapone.jpeg';
import arcalanetImage from '../assets/clients/Arcaplanet.jpg';
import brtImage from '../assets/clients/BRT.png';
import familaImage from '../assets/clients/Famila.png';
import globoImage from '../assets/clients/Globo.jpeg';
import marzottoImage from '../assets/clients/Marzotto.png';
import tntImage from '../assets/clients/TNT.png';
import vicolungoImage from '../assets/clients/Vicolungo.png';
import lidlImage from '../assets/clients/Lidl.png';
import decathlonImage from '../assets/clients/Decathlon.png';

const ClientSection: React.FC = () => {
    const images: string[] = [
        acquaSaponeImage,
        decathlonImage,
        lidlImage,
        arcalanetImage,
        brtImage,
        familaImage,
        marzottoImage,
        globoImage,
        tntImage,
        vicolungoImage,
    ];

    return (
        <div className='sectionContainer1'>
            <h1 className='title'>Tra i nostri clienti</h1>
            <div className='imageContainer1'>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`client${index + 1}`} className='carouselImage1' />
                ))}
            </div>
        </div>
    );
};

export default ClientSection;
