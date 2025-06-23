import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage.jsx'
import ProductListingPage from "../pages/ProductListingPage.jsx";
import ProductViewPage from '../pages/ProductViewPage.jsx'
import AccessPage from "../pages/AccessPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import RegisterAccountPage from "../pages/RegisterAccountPage.jsx";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <HomePage />}></Route>
                    <Route path="/produtos" element={ <ProductListingPage />}></Route>
                    <Route path="/produtos/product-view" element={ <ProductViewPage />}></Route>
                    <Route path="/login" element={ < AccessPage />}></Route>
                    <Route path="/cadastro" element={ < RegisterAccountPage />}></Route>
                    <Route path="/cadastro/usuario" element={ < RegisterPage />}></Route>
                    <Route path="/notFound" element={ < NotFoundPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;