import Layout from '../pages/Layout.jsx'
import Gallery from '../components/Gallery.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import styled from 'styled-components'
import { BtnStyle } from '../components/Styles/BtnStyle.jsx'

const HomePageConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .home{
        width: 90vw;
    }
    .colecoes-destaque{
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        gap: 1rem;
        & img{
            width: 24rem;
            border-radius: 4px;  
        }& div {
            display: flex;
            position: relative;
            & button{
                position: absolute;
                top: 70%;
                left: 2rem;
            }
        }
    }
       
    @media screen and (max-width: 768px){
        .home{
            width: 100%;
        }
        .colecoes-destaque{
            & img{
                width: 12rem;
            }
            & div button{
                position: absolute;
                top: 60%;
                left: 1rem;
            }
        }
    }
`;

const image = [
    '/public/collection-1.png',
    '/public/collection-2.png',
    '/public/collection-3.png',
]

const product = [
    { id: 1, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 2, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 3, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 4, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 5, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 6, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 7, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 8, image: '../src/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' }
]

const HomePage = () => {
    return (
        <HomePageConteiner>

            <Layout>

                <div className='home'>

                    <Gallery images={image} showThumbs={''} width={'85vw'} heigth={'32rem'} radius={'15px'} className={'gallery-conteiner'} />

                    <Section title={'Coleções em Destaque'}>

                        <div className='colecoes-destaque'>

                            {image.map((image, index) => (
                                <div key={index} className='destaques' >
                                    <img src={image} alt="" />
                                    <BtnStyle>Comprar</BtnStyle>
                                </div>
                            ))}

                        </div>

                    </Section>

                    <Section title={'Coleções em Destaque'} titleAlign='center' >

                    </Section>

                    <Section title={'Produtos em Alta'} link={'Ver mais >>>'} >
                        <ProductListing products={product} />
                    </Section>

                    <Section>
                    </Section>

                </div>

            </Layout>
        </HomePageConteiner>
    );
}

export default HomePage;
