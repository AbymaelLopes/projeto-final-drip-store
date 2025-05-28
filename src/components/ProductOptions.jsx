import styled from "styled-components";

const ConteinerOptions = styled.div`
    display: flex;
    flex-direction: column;
    .product-options{
        display: flex;
        gap: 8px;
        padding: 1rem 0;
    }
    .circle{
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 31px;
        height: 31px;
        & p{
            display: none;
        }
    }
    .square{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
        border: 1px solid var(--ligth-gray-2);
    }    
`

const ProductOptions = ( {options, radius, shape, type} ) => {
 
    let typeVerify = type == 'color'
    
    return(
        <ConteinerOptions>
            <span>Tamanho</span>
            <div className="product-options" style={{borderRadius: radius}}>
                {options.map((option, index) =>
                    <div  style={{background: typeVerify ? option: ''}} className={shape} key={index}>
                        
                        <p>{option}</p>
                    
                    </div>
                )}
            </div>
        </ConteinerOptions>
    )
}

export default ProductOptions;