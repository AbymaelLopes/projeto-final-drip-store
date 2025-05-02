import Layout from '../pages/Layout.jsx'
import Gallery from '../components/Gallery.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import styled from 'styled-components'

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
        }
    }
       
    @media screen and (max-width: 314px){
        .home{
            width: 100%;
            position: relative;
            top: 3.5rem;
            padding-bottom: 4rem;
        }
        .colecoes-destaque{
            & img{
                width: 15rem;  
            }
        }
    }
`;

const image = [
    '../src/assets/collection-1.png',
    '../src/assets/collection-2.png',
    '../src/assets/collection-3.png',
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
                            <img key={index} src={image} alt="" />
                        ))}

                    </div>

                </Section>

                <Section title={'Coleções em Destaque'} titleAlign='center' >

                </Section>
                
                <Section title={'Produtos em Alta'} link={'Ver mais >>>'} >
                    <ProductListing products={product} />
                </Section>

            </div>

        </Layout>
        </HomePageConteiner>
    );
}

export default HomePage;
