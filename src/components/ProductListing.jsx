import styled from "styled-components";
import ProductCard from "./ProductCard";

const PLConteiner = styled.main`
    display: flex;
    flex-flow: row wrap;
    margin: 1rem 0; 
    gap: 1rem;
    justify-content: center;
`;

const ProductListing = ({ products }) => {
    return ( 
        <PLConteiner>
            {products.map((product, index) => (
                <ProductCard 
                    key={index}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                    image={product.image}
                />
            ))}
        </PLConteiner>
     );
}
 
export default ProductListing;