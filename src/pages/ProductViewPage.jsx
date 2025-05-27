import Layout from "./Layout";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import Section from "../components/Section";
import styled from "styled-components";
import ProductListing from "../components/ProductListing";
import { ButtonStyle } from "../components/ButtonStyle";
import ProductOptions from "../components/ProductOptions";

const Conteiner = styled.div`
    
    .infoProduto {
        display: flex;
        margin: 1rem 2rem;
        & button{
            font-size: 16px;
            background: var(--warning);
            width: 10rem;
        }
    }
    .gallery{
        width: 40rem;
        & #image-gallery{
            margin-right: 6rem;
        }
        & h2{
            top: 2rem;
            left: 2rem;
        }
    }

    @media screen and (max-width: 768px){
        orientation: portrait;
        .infoProduto {
            display: block;
            margin: 1rem 4rem;
        }
    }
    @media screen and (max-width: 320px){
        orientation: portrait;
        .gallery{
            width: 18rem;
        }
        .infoProduto {
            display: block;
            margin: 1rem 4rem;
        }
    }
`

const optionTamanhos = ['36', '37', '38', '39', '40', '41', '42']
const optionCores = ['#FF0000', '37', '38']

const product = [
    { id: 0, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00', description:'Tênis Nike conforto total, ideal para caminhada e corrida' },
    { id: 1, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00', description:'Tênis Nike conforto total, ideal para caminhada e corrida além de academia'  },
    { id: 2, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00', description:'Tênis Nike conforto total, ideal para caminhada e corrida além de academia'  },
    { id: 3, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00', description:'Tênis Nike conforto total, ideal para caminhada e corrida além de academia'  }
]

const images = [
    {img: '/assets/image.png'},
]

const ProductViewPage = () => {

    return (  
        <Conteiner>
            <Layout>
                <div className="infoProduto">
                    
                    <Gallery images={images} className={'viewProduct'} width={'30rem'} heigth={'10rem'} />

                    <BuyBox price={'R$ 230,00'} priceDescount={'R$ 210,00'} stars={'4,7'} rating={'105'} name={'Tênis Nike Revolution 6 Next Nature Masculino'} references={'Casual | Nike | REF:3214522'} descriptions={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quo alias quidem facilis blanditiis soluta eligendi ipsam illo, atque commodi sed, iusto molestias est nisi! Fugiat nisi expedita tempora ex?'}>
                        
                        <ProductOptions options={optionTamanhos} shape={'square'} />

                        <ProductOptions options={optionCores} shape={'circle'} />

                        <ButtonStyle>Comprar</ButtonStyle>
                    </BuyBox>
                </div>
                <Section title={'Produtos Relacionados'} link={'Ver Todos >>>'} >
                    <ProductListing products={product} />
                </Section>
            </Layout>
        </Conteiner>
    );
}

export default ProductViewPage;