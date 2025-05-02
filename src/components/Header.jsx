import { NavLink, useNavigate } from 'react-router-dom';
import lupa from '../assets/lupa.svg'
import logoHeader from '../assets/logo-header.svg';
import cartBuy from '../assets/mini-cart.svg'
import styled from 'styled-components';
import { useState } from 'react';
import menuSvg from '../assets/menu.svg'

const HeaderConteiner = styled.header`
    background: #FFFFFF;
    width: 100%;
    display: flex;
    flex-direction: column;
    & #menu{
        display: none;
    }
    .header{ 
        background: var(--white);
        padding: 2rem 5rem;
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
        flex-flow: row wrap;
        position: fixed;
        z-index: 100;
        width: 100%;
        .logo-header{
            & img{
                display: visible;
                width: 12rem;
            }
        }
        .area-redirecionamento{
            display: flex;
            align-items: center;
            gap: 1rem;
            & a button{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 7rem;
                height: 2.5rem;
                background-color: var(--primary);
                border-radius: 4px;
                color: var(--white);
                font-size: 14px;
                border: none;
                transition: ease-in-out 0.2s;
                cursor: pointer;&:hover{
                    color: var(--primary);
                    background-color: var(--white);
                }
            }
            & a p{
                color: var(--dark-gray-2);
                font-size: 16px;
                width: 6rem;
                text-align: center;
                &:hover{
                    color: var(--primary);
                }
            }
        }
        .area-busca{
            display: flex;
            position: relative;
            align-items: center;
            & input{
                width: 30rem;
                height: 2.5rem;
                border-radius: 15px;
                border: 1px solid var(--ligth-gray);
                padding: 0 1rem;
                &:focus{
                    outline: 1px solid var(--primary);
                    border: none;
                    padding: 0 1rem;
                }
            }& img{
                display: flex;
                position: absolute;
                right: 1rem;
                cursor: pointer;
            }
        }
    }
    .navegacao{
        width: 100%;
        padding-top: 6rem;
        box-shadow: 0 2px 10px 4px var(--ligth-gray-2);
        & nav{
            display: flex;
            justify-content: start;
            padding: 1rem;
            margin-left: 5rem;
            gap: 2rem;
            font-weight: bold;
            & a{
                color: var(--dark-gray);
                transition: ease-in-out 0.2s;
                &:hover{
                    color: var(--primary);
                }&.active{
                    color: var(--primary);
                    padding-bottom: 10px;
                    border-bottom: 3px var(--primary) solid ;
                }
            }
        }
    }

    //Aplicação de responsividade
    @media screen and (max-width: 314px){
        & #menu {
            display: flex;
            width: 1rem;
        }
        .header{
            padding: 1rem;
            gap: 0;
            .logo-header{
                & img{
                    width: 7rem;
                    margin: 0 1rem;
                }
            }
            .area-busca{
                input{
                    display: none;
                }img {
                    position: sticky;
                    padding-left: 1rem;
                }
            }
            .area-redirecionamento{
                gap: 0;
                & a button{
                    display: none;
                }
                & a p{
                    display: none;
                }
            }
        }
        .navegacao{
            display: none;
        }
        }
`;

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

        if(busca.thim()){
            navigate(`/produtos?search=${encodeURIComponent(busca)}`);
        }
    };

    return (
        <HeaderConteiner>

            <div className='header'>

                <img id='menu' src={menuSvg} alt="" />

                <div className='logo-header'>

                    <NavLink to={'/'} end><img id='logo' src={logoHeader} /></NavLink>

                </div>

                <div className='area-busca'>

                    <input type="text" name="busca" id="campoDeBusca"
                        placeholder='Buscar Produto'
                        onChange={(e) => setBusca(e.target.value)}
                        onKeyDown={handleKeyDown} />

                    <img src={lupa} alt="" onClick={handleSearch} />

                </div>

                <div className='area-redirecionamento'>

                    <NavLink to={"/:id"}><p>Cadastre-se</p></NavLink>

                    <NavLink to={"/:id"}><button>Entrar</button></NavLink>

                    <NavLink to={'/:id'}><img src={cartBuy} alt="" /></NavLink>
                </div>
            </div>
            <div className='navegacao'>
                <nav>

                    <NavLink to={'/'} end>Home</NavLink>

                    <NavLink to={'/categorias'} end>Categorias</NavLink>

                    <NavLink to={'/produtos'} end>Produtos</NavLink>

                    <NavLink to={'/meus-pedidos'} end>Meus Pedidos</NavLink>

                </nav>
            </div>
        </HeaderConteiner>
    );
}

export default Header;