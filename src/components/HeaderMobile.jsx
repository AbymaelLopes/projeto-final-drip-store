import { NavLink, useNavigate } from 'react-router-dom';
import lupa from '/assets/lupa.svg'
import logoHeader from '/assets/logo-header.svg';
import cartBuy from '/assets/mini-cart.svg';
import { useState } from 'react';
import menuSvg from '/assets/menu.svg'
import { ButtonStyle } from '../components/ButtonStyle.jsx'
import styled from 'styled-components';

const ConteinerHeaderMobile = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    .headerConteiner{
        
        .header{
            width: 100%;
            display: flex;
            justify-content: space-between;
            #menuLogo{
                width: 1.5rem;
            }
            #logo{
                width: 8rem;
            }
            .area-busca{
                gap: 0.5rem;
                display: flex;
                & input{
                    display: none;
                }
                & button{
                    display: none;
                }
                & p{
                    display: none;
                }
            }
        }
        .menu{
            display: none;
            transition: left 0.5s ease-out, opacity 0.5s ease-out;
            & nav{
                display: none;
            }
        }
    }
    .menuAtivo{
        color: white;
        .header{
            width: 100%;
            display: flex;
            justify-content: space-between;
            #menuLogo{
                width: 1.5rem;
            }
            #logo{
                width: 8rem;
            }
            .area-busca{
                gap: 0.5rem;
                display: flex;
                & input{
                    display: none;
                }
                & button{
                    display: block;
                    font-size: 1rem;
                    font-weight: bold;
                    position: absolute;
                    left: 1rem;
                    bottom: 4rem;
                    z-index: 1000;
                    color: var(--primary);
                    background: var(--white);
                }
                & p{
                    display: flex;
                    position: absolute;
                    left: 1.5rem;
                    bottom: 2rem;
                    z-index: 1000;
                    color: var(--white);
                }
            }
        }   
        .menu{
            display: flex;
            transition: left 0.5s ease-out, opacity 0.5s ease-out;
            left: 0;
            z-index: 100;
            top: 3rem;
            position: fixed;
            width: 90%;
            height: 100vh;
            background-color: var(--primary);
            text-decoration: none;
            & nav{
                padding: 1rem;
                & ul{
                    display: flex;
                    gap: 2rem;
                    flex-direction: column;
                }
                & a{
                    color: var(--white);
                    z-index: 200;
                    text-decoration: none;
                }
            }
        }
    }
`

const HeaderMobile = () => {

    // Função para abrir o menu
    function henderMenu(){

        // Pega os elementos
        const hConteiner = document.querySelector('.headerConteiner')
        const logoMenu = document.getElementById('menuLogo')
        const menu = document.getElementById('menu')
        const body = document.querySelector('.body')

        // Adiciona evento de click no icone de menu
        logoMenu.addEventListener('click', (e) => {
            e.stopPropagation; 
            hConteiner.classList.toggle('menuAtivo') // Altera no nome da classe
            console.log(hConteiner.className)
            body.classList.toggle('no-scroll')
        })
        
        // Adciona evento de click no corpo
        document.addEventListener('click', (e) => {

            // Verifica se o menu está ativo e se o click não foi no icone ou nos itens do menu
            if (hConteiner.classList.contains('menuAtivo') &&
            !logoMenu.contains(e.target) && 
            !menu.contains(e.target))
            {
                // Altera novamente a classe do menu para fechá-lo
                hConteiner.classList.remove('menuAtivo')
                hConteiner.classList.add('headerConteiner')
                body.classList.remove('no-scroll')
            }

        })
    }

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
        
    return(
        <ConteinerHeaderMobile>
        <div className='headerConteiner'>

        <div className='header'>
        
            <img id='menuLogo' src={menuSvg} onClick={henderMenu} alt="" />
            <NavLink to={'/'} end><img id='logo' src={logoHeader} /></NavLink>


            <div className='area-busca'>

                <input type="text" name="busca" id="campoDeBusca"
                    placeholder='Buscar Produto'
                    onChange={(e) => setBusca(e.target.value)}
                    onKeyDown={handleKeyDown} />

                <img id='lupa' src={lupa} alt="" onClick={handleSearch} />

                <NavLink to={"/cadastro"}><p id='cadastrar'>Cadastre-se</p></NavLink>

                <NavLink to={"/login"}>

                    <ButtonStyle>Entrar</ButtonStyle>
                    
                </NavLink>

                <NavLink to={'/:id'}><img className='buycart' src={cartBuy} alt="" /></NavLink>
            </div>


        </div>

        <div id='menu' className='menu'>

            <nav>

                <ul>

                    <NavLink to={'/'} end><li>Home</li></NavLink>

                    <NavLink to={'/categorias'} end><li>Categorias</li></NavLink>

                    <NavLink to={'/produtos'} end><li>Produtos</li></NavLink>

                    <NavLink to={'/meus-pedidos'} end><li>Meus Pedidos</li></NavLink>
                
                </ul>

            </nav>

        </div>
        </div>
        </ConteinerHeaderMobile>
    )
}

export default HeaderMobile;