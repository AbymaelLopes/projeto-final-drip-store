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
    #menu{
        display: none;
    }
    .header{
        padding: 2rem 5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;
        .area-busca{
            display: inline-flex;
            align-items: center;
            position: relative;
            width: 40%;
            & input{
                width: 100%;
                background-color: var(--ligth-gray-3);
                height: 2.5rem;
                border-radius: 1rem;
                padding: 1rem;
                border: 0.1rem solid var(--ligth-gray-2);
                &:focus{
                    border: 0.1rem solid var(--ligth-gray-3);
                    box-shadow: none;
                }
            }
            & img{
                position: absolute;
                right: 0.75rem;
                cursor: pointer;
            }
        }
        .area-redirecionamento{
            display: inline-flex;
            gap: 1rem;
            align-items: center;
            & button{
                width: 5.5rem;
                height: 2.5rem;
                background-color: var(--primary);
                border-radius: 1rem;
                border: none;
                color: var(--white);
                font-size: 1rem;        
            }
            & a p{
                transition: 0.2s ease-in-out;
                color: var(--dark-gray-2);
                &:hover{
                    color: var(--primary);
                }
            }
        }
    }
    nav ul{
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

    //Aplicação de responsividade para celulares
    @media screen and (max-width: 768px){
        flex-direction: row;
        
        #logo{
            width: 8rem;
        }
        .header{
            padding: 1rem 2rem;
            #menu{
                display: inline-flex;
                justify-content: flex-start;
                width: 1.25rem;
            }
            .area-busca{
                & input{
                    display: none;
                }
                & img{
                    position: static;
                }
            }
            .area-redirecionamento{
                display: none;
            }
        }

        nav ul{
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
        console.log(busca)
        if (busca.trim() !== '') {
            navigate(`/produtos?search=${encodeURIComponent(busca)}`);
        }
    };

    return (
        <HeaderConteiner>

            <div className='header'>

                <img id='menu' src={menuSvg} alt="" />

                <NavLink to={'/'} end><img id='logo' src={logoHeader} /></NavLink>


                <div className='area-busca'>

                    <input type="text" name="busca" id="campoDeBusca"
                        placeholder='Buscar Produto'
                        onChange={(e) => setBusca(e.target.value)}
                        onKeyDown={handleKeyDown} />

                    <img id='lupa' src={lupa} alt="" onClick={handleSearch} />

                </div>
                <div className='area-redirecionamento'>

                    <NavLink to={"/:id"}><p>Cadastre-se</p></NavLink>

                    <NavLink to={"/:id"}><button>Entrar</button></NavLink>

                </div>

                <NavLink to={'/:id'}><img className='imgs' src={cartBuy} alt="" /></NavLink>

            </div>

            <nav>

                <ul>

                    <NavLink to={'/'} end><li>Home</li></NavLink>

                    <NavLink to={'/categorias'} end><li>Categorias</li></NavLink>

                    <NavLink to={'/produtos'} end><li>Produtos</li></NavLink>

                    <NavLink to={'/meus-pedidos'} end><li>Meus Pedidos</li></NavLink>
                
                </ul>

            </nav>
        </HeaderConteiner>
    );
}

export default Header;