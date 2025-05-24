import { useState } from "react";
import arrowLeft from "/assets/arrow-left.svg"
import arrowRight from "/assets/arrow-right.svg"
import styled from "styled-components";
import { ButtonStyle } from "./ButtonStyle";

const GalleryConteiner = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    .gallery-miniatura{
        display: none;
    }
    .gallery{
        position: relative;
        background: var(--blue);
        display: flex;
        width: 85vw;
        height: 32rem;
        border-radius: 15px;
        margin-bottom: 2rem;
        transition: transform 0.5s ease-in-out;
        align-items: center;
        justify-content: flex-end;
        #image-gallery{
            margin-right: 4rem;
            transform: rotate(-20deg);
        }
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
        & button{
            position: absolute;
            left: 6rem;
            bottom: 5rem;
        }
        & h2{
            width: 20rem;
            position: absolute;
            font-size: 3.5rem;
            top: 6rem;
            left: 6rem;
        }
    }
    .miniatura{
        gap: 1rem;
        height: 6rem;
        img {
            width: 8rem;
        }
    }

    @media screen and (max-width: 768px) {
        .gallery{
            height: 15rem;
            & h2{
                top: 3rem;
                width: 15rem;
                font-size: 2.5rem;
                top: 3rem;
                left: 3rem;
            }
            & #image-gallery{
                width: 6rem;
            }
            & button{
                left: 3rem;
            }
        }
    }
`;

const Gallery = ({ className, width, height, images, radius, showThumbs }) => {
    
    
    const [currentIndex, setCurrentIndex] = useState(0)
    
    console.log(images[currentIndex].img)
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
    

    let miniaturas = showThumbs !== undefined || showThumbs !== ""

    return (
        <GalleryConteiner>

            <div className='gallery' >

                <img id="image-gallery" className={className} src={images[currentIndex].img}  alt="" 
                style={{width: width, height: height, borderRadius: radius, objectFit: "cover"}}/>
                
                <h2>{images[currentIndex].title}</h2>
                
                <ButtonStyle>Comprar</ButtonStyle>

                {/*Seta direcional esquerda */}
                <img id="arrowLeft" src={arrowLeft} alt=""
                    onClick={prevSlide} />

                {/*Seta direcional Direita*/}
                <img id='arrowRight' src={arrowRight} alt=""
                    onClick={nextSlide} />
            </div>
{/* 
            <div className='gallery-miniatura' >

                {/*Carrega a imagem do de acordo com o index do state 
                <img className="img-gallery" src={images[currentIndex].img} alt="" />

            </div> 
            */}

            {/*Carregando miniatuas*/}
            <div className={miniaturas ? 'miniatura' : 'noMiniatura'} style={{ display: miniaturas ? 'flex' : 'none'}}>

                {images.map((image, index) => (
                    <img src={image.img} key={index} style={{ borderRadius: radius }} alt="" onClick={() => selecaoSlide(index)} />
                ))}

            </div>
        </GalleryConteiner>
    );
}

export default Gallery;