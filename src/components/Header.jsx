import { NavLink, useNavigate } from 'react-router-dom';
import lupa from '/assets/lupa.svg'
import logoHeader from '/assets/logo-header.svg';
import cartBuy from '/assets/mini-cart.svg';
import { useState } from 'react';
import menuSvg from '/assets/menu.svg'
import { ButtonStyle } from '../components/ButtonStyle.jsx'
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import HeaderMobile from './HeaderMobile.jsx';

const HeaderStyle = styled.header`
    
    background: #FFFFFF;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    #menu{
        display: none;
    }
    .header{
        padding: 2rem 5rem;
        display: flex;
        align-items: center;
        gap: 3rem;
        justify-content: space-between;
        .area-busca{
            display: inline-flex;
            align-items: center;
            position: relative;
            width: 60%;
            & input{
                margin-right: 2rem;
                width: 100%;
                background-color: var(--ligth-gray-3);
                height: 2.5rem;
                border-radius: 1rem;
                padding: 1rem;
                border: 0.1rem solid var(--ligth-gray-2);
                &:focus{
                    border: 0.1rem solid var(--ligth-gray-3);
                    box-shadow: none;
                    outline: none;
                }
            }
            & img{
                position: absolute;
                right: 17.5rem;
                cursor: pointer;
            }
            & a p{
                width: 6rem;
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
            }& .active{
                color: var(--primary);
                padding-bottom: 10px;
                border-bottom: 3px var(--primary) solid ;
            }
        }
    }

    //Aplicação de responsividade para Tablets
    @media screen and (max-width: 768px){
        flex-direction: row;
        #logo{
            width: 8rem;
        }
        .header{
            padding: 1rem 3rem;
            justify-content: space-between;
            width: 100vw;
            position: relative;
            #menu{
                display: inline-flex;
                justify-content: flex-start;
                width: 1.25rem;
            }
            .area-busca{
                position: absolute;
                top: 50%;
                right: 4rem;
                width: 1.5rem;
                & input, & button, & p{
                    display: none;
                }& img{
                    right: 1rem;
                }
            }
        }
        #buycart{
            position: absolute;
            top: 50%;
        }
        nav ul{
            display: none;
        }
    }
    
    //Aplicação de responsividade para celulares
    @media screen and (max-width: 420px){
        #logo{
            width: 7rem;
        }
        .header{
            padding: 1rem 1rem;
            .area-busca{
                position: absolute;
                top: 50%;
                right: 2rem;
                width: 1.5rem;
                & input, & button, & p{
                    display: none;
                }& img{
                    right: 1rem;
                }
            }
        }
        #buycart{
            position: absolute;
            top: 50%;
        }
        nav ul{
            display: none;
        }
    }
`

const Header = () => {

    const mobile = useMediaQuery({query: '(max-width: 768px)'})

    const [busca, setBusca] = useState('')
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            console.log(e.key)
            handleSearch()
        }
    };

    const handleSearch = () => {
        if (busca.trim() !== '') {
            navigate(`/produtos?search=${encodeURIComponent(busca)}`);
        }
    };

    return mobile ? <HeaderMobile /> :
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

                    <NavLink to={'/cadastro'}><p>Cadastre-se</p></NavLink>

                    <NavLink to={"/login"}>

                        <ButtonStyle>Entrar</ButtonStyle>
                        
                    </NavLink>

                </div>

                <NavLink to={'/:id'}><img className='buycart' src={cartBuy} alt="" /></NavLink>

            </div>

            <nav>

                <ul>

                    <NavLink to={'/'} end><li>Home</li></NavLink>

                    <NavLink to={'/produtos'} end><li>Produtos</li></NavLink>

                    <NavLink to={'/notFound'} end><li>Categorias</li></NavLink>

                    <NavLink to={'/notFound'} end><li>Meus Pedidos</li></NavLink>
                
                </ul>

            </nav>
        </HeaderStyle>
    ;
}

export default Header;