import styled from "styled-components";
import { ButtonStyle } from "./ButtonStyle";

const Conteiner = styled.div`
    overflow: hidden;
    .destaque{
        width: 22rem;
        height: 14rem;
        position: relative;
        border-radius: 4px;  
        background: var(--blue);
        display: flex;
        justify-content: flex-end;
        & img{
            object-fit: cover;
        }
        & h3{
            width: 10rem;
            position: absolute;
            top: 2rem;
            left: 2rem;
        }
        & button{
            position: absolute;
            bottom: 2rem;
            left: 2rem;
        }
    }
`

const CardDestaque = ( {title, img} ) => {

    return(
        <Conteiner>
            <div className="destaque">
                <h3>{title}</h3>
                <img src={img} alt="" />
                <ButtonStyle>Comprar</ButtonStyle>
            </div>
        </Conteiner>
    )
}

export default CardDestaque;