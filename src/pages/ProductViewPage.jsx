import Layout from "./Layout";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import Section from "../components/Section";
import styled from "styled-components";
import ProductListing from "../components/ProductListing";
import { ButtonStyle } from "../components/ButtonStyle";
import ProductOptions from "../components/ProductOptions";

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .infoProduto {
        flex-wrap: wrap;
        width: 95vw;
        display: flex;
        margin: 1rem 2rem;
        overflow: hidden;
        & button{
            font-size: 16px;
            background: var(--warning);
            width: 10rem;
        }
        .gallery{
            width: 100%;
            & #image-gallery{
                margin-right: 5rem;
            }
            & h2{
                top: 2rem;
                left: 2rem;
            }
        }
        .buy-box{
            width: 50%;
            padding: 0 2rem;
            user-select: none;
        }
    }

    @media screen and (max-width: 768px){
        orientation: portrait;
        .infoProduto {
            display: block;
            margin: 1rem 4rem;
            .gallery{
                & #image-gallery{
                    margin-right: 4rem;
                }
            }
        }
    }
    @media screen and (max-width: 420px){
        orientation: portrait;
        
        .infoProduto {
            display: block;
            margin: 1rem 4rem;
            .gallery{
                & #image-gallery{
                    margin-right: 1rem;
                }
            }
            .buy-box{
                width: 100%;
            }
        }
    }
`

const optionTamanhos = ['36', '37', '38', '39', '40', '41', '42']
const optionCores = ['#FF0000', '#373737', '#000000']

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
                    
                    <Gallery images={images} className={'viewProduct'} showThumbs={'miniatura'} width={'30rem'} heigth={'10rem'} />

                    <div className="buy-box">

                        <BuyBox price={'R$ 230,00'} priceDescount={'R$ 210,00'} stars={'4,7'} rating={'105'} name={'Tênis Nike Revolution 6 Next Nature Masculino'} references={'Casual | Nike | REF:3214522'} descriptions={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quo alias quidem facilis blanditiis soluta eligendi ipsam illo, atque commodi sed, iusto molestias est nisi! Fugiat nisi expedita tempora ex?'}>
                            
                            <ProductOptions type={'text'} options={optionTamanhos} shape={'square'} />

                            <ProductOptions type={'color'} options={optionCores} shape={'circle'} />

                            <ButtonStyle>Comprar</ButtonStyle>
                        </BuyBox>
                        
                    </div>
                </div>
                <Section title={'Produtos Relacionados'} link={'Ver Todos >>>'} >
                    <ProductListing products={product} />
                </Section>
            </Layout>
        </Conteiner>
    );
}

export default ProductViewPage;