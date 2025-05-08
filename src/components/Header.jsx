import { NavLink, useNavigate } from 'react-router-dom';
import lupa from '../assets/lupa.svg'
import logoHeader from '../assets/logo-header.svg';
import cartBuy from '../assets/mini-cart.svg';
import { useState } from 'react';
import menuSvg from '../assets/menu.svg'
import { HeaderStyle } from './Styles/HeaderStyle'
import { BtnStyle } from './Styles/BtnStyle';

const Header = () => {

    const [busca, setBusca] = useState('')
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            console.log(e.key)
            handleSearch()
        }
    };

    const handleSearch = () => {
        console.log(busca)
        if (busca.trim() !== '') {
            navigate(`/produtos?search=${encodeURIComponent(busca)}`);
        }
    };

    return (
        <HeaderStyle>

            <div className='header'>

                <img id='menu' src={menuSvg} alt="" />

                <NavLink to={'/'} end><img id='logo' src={logoHeader} /></NavLink>


                <div className='area-busca'>

                    <input type="text" name="busca" id="campoDeBusca"
                        placeholder='Buscar Produto'
                        onChange={(e) => setBusca(e.target.value)}
                        onKeyDown={handleKeyDown} />

                    <img id='lupa' src={lupa} alt="" onClick={handleSearch} />

                    <NavLink to={"/:id"}><p>Cadastre-se</p></NavLink>

                    <NavLink to={"/:id"}><BtnStyle>Entrar</BtnStyle></NavLink>

                </div>

                <NavLink to={'/:id'}><img className='buycart' src={cartBuy} alt="" /></NavLink>

            </div>

            <nav>

                <ul>

                    <NavLink to={'/'} end><li>Home</li></NavLink>

                    <NavLink to={'/categorias'} end><li>Categorias</li></NavLink>

                    <NavLink to={'/produtos'} end><li>Produtos</li></NavLink>

                    <NavLink to={'/meus-pedidos'} end><li>Meus Pedidos</li></NavLink>
                
                </ul>

            </nav>
        </HeaderStyle>
    );
}

export default Header;