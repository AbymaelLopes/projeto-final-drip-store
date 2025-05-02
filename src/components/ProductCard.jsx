import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductCardConteiner = styled.main`
    p{
        font-size: 1.5rem;
        color: var(--dark-gray);
    }
    & .valores{
        display: flex;
        & p{
            font-size: 1rem;
        }
    }
    img{
        width: 14rem;
        height: 16rem;
        background: var(--white);
        border-radius: 4px;
    }
    @media screen and (max-width: 314px){
        p{
            font-size: 16px;
        }
        & .valores{
            & p{
                font-size: 12px;
            }
        }
        img{
            width: 8rem;
            height: 10rem;
        }
    }
`;

const ProductCard = ({ id, image, name, price, priceDiscount }) => {

    const temDeconto = priceDiscount !== undefined
    const navigate = useNavigate()

    return (
        <ProductCardConteiner>

            <img id={id} src={image} alt=""
                onClick={() => navigate('/produtos/:id')} />

            <p>{name}</p>

            <div className="valores">

                <p style={{ color: temDeconto ? '#8F8F8F' : '#1F1F1F', textDecoration: temDeconto ? 'line-through' : 'none'}}>{price}</p>
                <p>{priceDiscount}</p>

            </div>
        </ProductCardConteiner>
    );
}

export default ProductCard;