import React from 'react';
import Slider, { Settings } from 'react-slick';
import acquaSaponeImage from '../assets/clients/AcquaSapone.jpeg';
import arcalanetImage from '../assets/clients/Arcaplanet.jpg';
import brtImage from '../assets/clients/BRT.png';
import familaImage from '../assets/clients/Famila.png';
import globoImage from '../assets/clients/Globo.jpeg';
import marzottoImage from '../assets/clients/Marzotto.png';
import tntImage from '../assets/clients/TNT.png';
import vicolungoImage from '../assets/clients/Vicolungo.png';

// Stili CSS per il carosello
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientCarousel: React.FC = () => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images: string[] = [
        acquaSaponeImage,
        arcalanetImage,
        brtImage,
        familaImage,
        globoImage,
        marzottoImage,
        tntImage,
        vicolungoImage
    ];

    return (<>
        <div style={styles.sectionContainer}>

            <h1 style={styles.title}>I nostri clienti</h1>

            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} style={styles.imageContainer}>
                        <img src={image} alt={`client${index + 1}`} style={styles.carouselImage} />
                    </div>
                ))}
            </Slider>
        </div>
    </>
    );
};


const styles = {
    sectionContainer: {
        borderTop: '3px solid grey',
        marginBottom: '50px'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    carouselImage: {
        width: 'auto',
        height: '200px',
        margin: '0 auto', // Centra l'immagine orizzontalmente
    }
}

export default ClientCarousel;
