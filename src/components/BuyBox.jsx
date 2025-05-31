import styled from "styled-components";

const ConteinerbuyBox = styled.div`
    orientation: landscape;
    padding-top: 1rem;
    .ref-product{
        & span{
            font-size: 12px;
            color: var(--dark-gray-3);
        }& h2{
            padding-bottom: 0.5rem;
        }
    }
    .rating{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        & p{
            background: var(--warning);
            width: 2.5rem;
            height: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: bold;
            color: white;
            border-radius: 4px;
        }
        & span{
            font-size: 14px;
            color: var(--ligth-gray);
        }
    }
    .price-product{
        padding: 1rem 0;
        .price{
            color: var(--dark-gray-2);
            font-size: 32px;
        }
        .descount{
            color: var(--ligth-gray-2);
            font-size: 16px;
            text-decoration: line-through;
        }
        .priceDescount{
            font-size: 32px;
            color: var(--dark-gray-2);
        }
    }
    .descricao{
        padding: 1rem 0;
        & p{
            color: var(--dark-gray-2);
            font-size: 14px;
            margin: 1rem 0;
        }
        & span{
            color: var(--ligth-gray);
        }
    }

    @media screen and (max-width: 420px){
        orientation: portrait;

        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 768px){
        orientation: portrait;

        display: flex;
        flex-direction: column;
    }
`

const BuyBox = ( {name, references, stars, rating, price, priceDescount, descriptions, children} ) => {

    let descount = priceDescount !== null && priceDescount !== undefined
    console.log(descount)
    return(
        <ConteinerbuyBox>

            <div className="ref-product">
            
                <h2>{name}</h2>
                <span>{references}</span>
            
            </div>

            <div className="rating" aria-label="Avaliações do Produto">
            
                <p className="ratings">{stars}</p>
                <span>{`(${rating} avaliações)`}</span>
            
            </div>
            
            <div className="price-product">
            
                <span className="priceDescount">{priceDescount}</span>
                <span className={descount ? 'descount' : 'price'} >{price}</span>
            
            </div>
            <div className="descricao">
            
                <span>Descrição do produto</span>
                <p>{descriptions}</p>
            
            </div>
            
            {children}
        </ConteinerbuyBox>
    )
}

export default BuyBox;