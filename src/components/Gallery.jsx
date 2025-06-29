import { useEffect, useState } from "react";
import styled from "styled-components";

const GalleryConteiner = styled.div`
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
    .noMiniatura{
        display: flex;
        & img{
            display: none;
        }
    }
    .miniatura{
        display: flex;
        gap: 1rem;
        height: 6rem;
        img {
            width: 8rem;
        }
    }
    .slider-radio{
        display: flex;
        gap: 0.5rem;
        display: none;
    }
    .custom-radio {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid var(--primary);
        border-radius: 50%; /* tira se quiser quadrado */
        margin: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    /* Quando o radio está checked, muda o estilo */
    .slider-radio:checked + .custom-radio {
        background-color: var(--primary);
    }

    @media screen and (max-width: 768px) {
        orientation: portrait;
        .gallery{
            #arrowLeft, #arrowRight{
                display: none;
            }
            height: 15rem;
            & h2{
                width: 15rem;
                font-size: 1.5rem;
                top: 2rem;
                left: 2rem;
            }
            & #image-gallery{
                margin-right: 4rem;
                overflow: hidden;
            }
            & button{
                left: 2rem;
                bottom: 2rem;
            }
        }
        .miniatura{
            gap: 1rem;
            height: 4rem;
            img {
                width: 6rem;
            }
        }
    }
    
    @media screen and (max-width: 420px) {
        orientation: portrait;
        .gallery{
            #arrowLeft, #arrowRight{
                display: none;
            }
            height: 15rem;
            & h2{
                width: 15rem;
                font-size: 1.5rem;
                top: 1rem;
                left: 1rem;
            }
            & #image-gallery{
                margin-right: 2rem;
            }
            & button{
                left: 4.5rem;
                bottom: 1rem;
            }
        }
        .miniatura{
            gap: 1rem;
            height: 3rem;
            img {
                width: 4rem;
            }
        }
    }
`;

const Gallery = ({ className, width, height, images, radius, showThumbs, children }) => {
    
    
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const selecaoSlide = (index) => {
        setCurrentIndex(index)
    }
    
    
    let miniaturas = showThumbs !== undefined && showThumbs !== ""
    
    let widthTablet = window.innerWidth >= 320 && window.innerWidth < 768
    
    let widthMobile = window.innerWidth <= 320 

    useEffect(() => {
        // Marca o primeiro radio assim que o componente monta
        const radioButtons = document.querySelectorAll('.slider-radio');
        if (radioButtons[0]) {
            radioButtons[0].checked = true;
    }

    // Roda o carrossel a cada 3 segundos
    const intervalId = setInterval(() => {
        setCurrentIndex((atual) => {
        const proximoIndex = (atual + 1) % images.length;
        const radioButtons = document.querySelectorAll('.slider-radio');
        if (radioButtons[proximoIndex]) {
            radioButtons[proximoIndex].checked = true;
        }
        return proximoIndex;
        });
    }, 3000);

    return () => clearInterval(intervalId); // Limpa ao desmontar
    }, [images.length]);

    return (
        <GalleryConteiner>

            <div className='gallery' >

                <img id="image-gallery" className={className} src={images[currentIndex].img}  alt="" 
                style={{width: widthTablet ? '20rem' : widthMobile ? '13rem': width, height: height, borderRadius: radius, objectFit: "contain"}}/>

                <h2>{images[currentIndex].title}</h2>
                
                {children}

            </div>

            <div className="radio">
                {images.map((image, indexRadio) => (
                    <label key={indexRadio} className="custom-radio-label">
                        <input id={image.id} onClick={() => selecaoSlide(indexRadio)} type="radio" name="radio-slider" className="slider-radio"/>
                        <span className="custom-radio"></span>
                    </label>
                ))}
            </div>

            <div className={miniaturas ? 'miniatura' : 'noMiniatura'}>

                {images.map((image, index) => (
                    <img src={image.img} key={index} style={{ borderRadius: radius, objectFit: 'contain' }} alt="" onClick={() => selecaoSlide(index)} />
                ))}

            </div>
        </GalleryConteiner>
    );
}

export default Gallery;