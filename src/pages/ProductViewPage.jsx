import Layout from "./Layout";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import Section from "../components/Section";
import styled from "styled-components";
import ProductListing from "../components/ProductListing";

const Conteiner = styled.div`
    .infoProduto {
        display: flex;
        margin: 1rem 2rem;
    }
    .viewProduct {
        display: flex;
        background: var(--gallery);
        width: 35rem;
        height: 25rem;
        align-items: center;
        justify-content: center;
    }
`

const product = [
    { id: 1, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 2, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 3, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 4, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 4, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' }
]

const images = [
    '../public/image.png',
]

const ProductViewPage = () => {
    return (  
        <Conteiner>
            <Layout>
                <div className="infoProduto">
                    
                        <Gallery images={images} className={'viewProduct'} width={'25rem'} heigth={'15rem'} showThumbs={""} />

                    <BuyBox />
                </div>
                <Section title={'Produtos Relacionados'} link={'Ver Todos >>>'} >
                    <ProductListing products={product} />
                </Section>
            </Layout>
        </Conteiner>
    );
}

export default ProductViewPage;