import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg"
import arrowRight from "../assets/arrow-right.svg"
import styled from "styled-components";

const GalleryConteiner = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem;
    align-items: center;
    position: relative;
    #gallery{
        display: flex;
        border-radius: 15px;
        margin-bottom: 2rem;
        position: relative;
        transition: transform 0.5s ease-in-out;
        #arrowLeft {
            position: absolute;
            top: 50%;
            left: 2rem;
        }
        #arrowRight {
            top: 50%;
            right: 2rem;
            position: absolute;
        }
    }
    .miniatura{
        gap: 1rem;
        img {
            width: 10rem;
            height: 6rem;
        }
    }

    @media screen and (max-width: 314px) {
        .miniatura{
            gap: 8px;
            img {
                width: 5rem;
                height: 3rem;
            }
        }
    }
`;

const Gallery = ({ className, width, heigth, images, radius, showThumbs }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0)
    
    {/*Passa para o próximo indice */ }
    const nextSlide = () => {
        setCurrentIndex((atual) => (atual + 1) % images.length)
    }
    
    {/*Volta para o indice anterior */ }
    const prevSlide = () => {
        setCurrentIndex((atual) => (atual - 1 + images.length) % images.length)
    }
    
    const selecaoSlide = (index) => {
        setCurrentIndex(index)
    }
    

    let miniaturas = showThumbs !== undefined

    return (
        <GalleryConteiner>

            <div id="gallery" className={className} >

                {/*Carrega a imagem do de acordo com o index do state */}
                <img id="img" src={images[currentIndex]} alt="" 
                style={{width: width, height: heigth,borderRadius: radius}}/>

                {/*Seta direcional esquerda */}
                <img id="arrowLeft" src={arrowLeft} alt=""
                    onClick={prevSlide} />

                {/*Seta direcional Direita*/}
                <img id='arrowRight' src={arrowRight} alt=""
                    onClick={nextSlide} />
            </div>

            {/*Carregando miniatuas*/}
            <div className={miniaturas ? 'miniatura' : 'noMiniatura'} style={{ display: miniaturas ? 'flex' : 'none'}}>

                {images.map((image, index) => (
                    <img src={image} key={index} style={{ borderRadius: radius }} alt="" onClick={() => selecaoSlide(index)} />
                ))}

            </div>
        </GalleryConteiner>
    );
}

export default Gallery;