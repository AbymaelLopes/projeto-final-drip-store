import Layout from "./Layout";
import Gallery from "../components/Gallery";

const image = [
    '../src/assets/collection-1.png',
    '../src/assets/collection-2.png',
    '../src/assets/collection-3.png'
]

const ProductViewPage = () => {
    return (  
        <>
            <Layout>

                <Gallery images={image} width={'700px'} heigth={'570px'} radius={'4px'} className={'gallery-conteiner'} showThumbs='' />
            
            </Layout>
        </>
    );
}

export default ProductViewPage;