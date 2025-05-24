import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage.jsx'
import ProductListingPage from "../pages/ProductListingPage.jsx";
import ProductViewPage from '../pages/ProductViewPage.jsx'

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <HomePage />}></Route>
                    <Route path="/produtos" element={ <ProductListingPage />}></Route>
                    <Route path="/produtos/product-view" element={ <ProductViewPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;