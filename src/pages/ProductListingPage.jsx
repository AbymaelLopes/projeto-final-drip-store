import styled from "styled-components";
import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import Layout from "./Layout";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

const PLPageConteiner = styled.div`
    display: flex;
    .filtro{
        display: inline-block;
    }
    .filtrados{
        margin: 0 2rem;
    }
    .lista-produtos{
        margin: 0 2rem;
    }

    @media screen and (max-width: 768px) {
        
    }
`;

const filter = [
    { id: 'opt1', text: 'Menor Valor' },
    { id: 'opt2', text: 'Maior Valor' }
]

const product = [
    { id: 1, image: '../src/assets/Produto.svg', name: 'Banana', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 2, image: '../src/assets/Produto.svg', name: 'Maçã', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 3, image: '../src/assets/Produto.svg', name: 'Moreango', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 4, image: '../src/assets/Produto.svg', name: 'Abacaxi', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 5, image: '../src/assets/Produto.svg', name: 'Goiaba', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 6, image: '../src/assets/Produto.svg', name: 'Acerola', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 7, image: '../src/assets/Produto.svg', name: 'Seriguela', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' },
    { id: 8, image: '../src/assets/Produto.svg', name: 'Abacate', price: 'R$ 230,00', priceDiscount: 'R$ 180,00' }
]

const ProductListingPage = () => {
    
    
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const busca = params.get('search')?.toLocaleLowerCase() || ''
    
    let ListaProdutosExibir = busca !== null || busca !== undefined

    const ProdutosFiltrados = useMemo(()=> {
        return product.filter((produto) => 
            produto.name.toLowerCase().includes(busca)
    )
}, [busca])

    return (
        <Layout>
            <PLPageConteiner>
                <div className="filtro">

                    <FilterGroup title={'Faixa de preço:'} options={filter} inputType={'checkbox'} />
                
                </div>
                <Section>

                    <div className="lista-produtos" style={{display: ListaProdutosExibir ? 'none':'visible'}}>
                    
                        <ProductListing products={product} />

                    </div>                    
                    <div className="filtrados" style={{display: ListaProdutosExibir ? 'visible':'none'}}>
                    
                        <ProductListing products={ProdutosFiltrados} />

                    </div>

                </Section>

            </PLPageConteiner>
        </Layout>
    );
}

export default ProductListingPage;