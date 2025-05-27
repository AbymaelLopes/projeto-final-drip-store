import Layout from '../pages/Layout.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import styled from 'styled-components'
import CardDestaque from '../components/CardDestaque.jsx'
import Gallery from '../components/Gallery.jsx'
import { ButtonStyle } from '../components/ButtonStyle.jsx'

const HomePageConteiner = styled.div`
    orientation: landscape;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .home{
        width: 90vw;
        & .destaques{
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-flow: row wrap;
        }
        .button-gallery{
            & button{
                width: 15rem;
                height: 4rem;
                font-size: 1.5rem;
            }
        }
    }
       
    @media screen and (max-width: 768px){
        orientation: portrait;
        .home{
            width: 100%;
        }
        .destaques{
            width: 18rem;
        }
    }   
    @media screen and (max-width: 320px){
        orientation: portrait;
        .home{
            width: 100%;
        }
        .destaques{
            width: 15rem;
        }
    }
`

const slider = [
    {title: 'Queima de stoque Nike', img: '/assets/image.png'},
    {title: 'Queima de stoque Nike', img: '/assets/image.png'}
]

const destaques = [
    {title: 'Novo Drop Supreme', img: '/assets/destaque1.png'},
    {title: 'Coleção Adiddas', img: '/assets/destaque2.png'},
    {title: 'Novo Beats Bass', img: '/assets/destaque3.png'}
]

const products = [
    { id: 1, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 2, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 3, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 4, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 5, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 6, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 7, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 8, image: '/assets/Produto.svg', name: 'Produto', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' }
]

const HomePage = () => {
    return (
        <HomePageConteiner>

            <Layout>

                <div className='home'>
                   
                    <Gallery images={slider} showThumbs={''} width={'35rem'} height={'18rem'} radius={'15px'} className={'gallery-conteiner'}>
                    
                    <div className='button-gallery'>
                        <ButtonStyle>COMPRAR</ButtonStyle>    
                    </div>
                    
                    </Gallery>        

                    <Section title={'Coleções em Destaque'}>

                        <div className='destaques'>
                            {destaques.map((image, index) => (
                                <CardDestaque key={index} img={image.img} title={image.title} />
                            ))}
                        </div>

                    </Section>

                    <Section title={'Coleções em Destaque'} titleAlign='center' >

                    </Section>

                    <Section title={'Produtos em Alta'} link={'Ver mais >>>'} >
                        <ProductListing products={products} />
                    </Section>

                    <Section>
                    </Section>

                </div>

            </Layout>
        </HomePageConteiner>
    );
}

export default HomePage;
