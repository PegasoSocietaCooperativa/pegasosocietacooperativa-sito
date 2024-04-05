import React from 'react';
import Slider, { Settings } from 'react-slick';
import '../styles/ClientCarousel.css';
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
        decathlonImage,
        lidlImage,
        arcalanetImage,
        brtImage,
        familaImage,
        globoImage,
        marzottoImage,
        tntImage,
        vicolungoImage,
    ];

    return (<>
        <div className='sectionContainer'>

            <h1 className='title'>Tra i nostri clienti</h1>

            <Slider {...settings} className='carousel'>
                {images.map((image, index) => (
                    <div key={index} className='imageContainer'>
                        <img src={image} alt={`client${index + 1}`} className='carouselImage' />
                    </div>
                ))}
            </Slider>
        </div>
    </>
    );
};



export default ClientCarousel;
