import styled from "styled-components";
import logoFooter from '../assets/logo-footer.svg';
import Informations from "./Informations";
import { NavLink } from "react-router-dom";
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'

const FooterConteiner = styled.footer`
    background: var(--dark-gray);
    color: var(--white);
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    padding: 3rem;
    text-align: center;
    .footer{
        display: flex;
        justify-content: space-between;
        padding-bottom: 1rem;
        width: 100%;
        gap: 2rem;
        .sociais{
            display: flex;
            flex-direction: column;
            width: 30vw;
            gap: 2rem;
            & p{
                display: block;
                text-align: start;
            }
            & img{
                width: 12rem;
            }& div{
                display: flex;
                gap: 2rem;
            }
            & a img{
                width: 1rem;
                height: 1rem;
            }
        }
    }

    //Aplicação de responsividade
    @media screen and (max-width: 314px){
        padding: 3rem 2rem;
        text-align: center;
        justify-content: center;
        .footer{
            flex-direction: column;
            padding: 1rem;
            & p{
                display: block;
                text-align: start;
            }
            .sociais{
                width: 100%;
                & div{
                    gap: 1rem;
                }
            }
        }
    }
    @media screen and (max-width: 700px){
        padding: 3rem 2rem;
        text-align: center;
        .footer{
            flex-direction: column;
            padding: 1rem;
            width: 100%;
            & p{
                display: block;
                text-align: start;
            }
            .sociais{
                width: 100%;
                & div{
                    gap: 1rem;
                }
            }
        }
    }
`;

const i = [
    { text: 'Sobre Drip Store', link: '/' },
    { text: 'Segurança', link: '/' },
    { text: 'Wishlist', link: '/' },
    { text: 'Blog', link: '/' },
    { text: 'Trabalhe conosco', link: '/' },
    { text: 'Meus Pedidos', link: '/' }
]

const i2 = [
    { text: 'Camisetas', link: '/' },
    { text: 'Calças', link: '/' },
    { text: 'Bonés', link: '/' },
    { text: 'Headphones', link: '/' },
    { text: 'Tênes', link: '/' }
]

const i3 = [
    { text: 'Av. Santos Dumont,1510-1 andar - Audeota, Fortaleza- CE, 60150-161', link: '/' },
    { text: '(85) 3051-3411', link: '/' }
]

const Footer = () => {
    return (
        <FooterConteiner>
                <div className="footer">

                    <div className="sociais">
                        <img src={logoFooter} />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, eius quasi blanditiis aspernatur soluta ut unde laboriosam, officia culpa consequuntur ullam animi ad voluptas tempore sapiente excepturi corporis. Quis, aperiam?</p>
                        <div >
                            <NavLink><img src={twitter} alt="" /></NavLink>
                            <NavLink><img src={facebook} alt="" /></NavLink>
                            <NavLink><img src={instagram} alt="" /></NavLink>
                        </div>
                    </div>
                    <Informations title={'Informação'} informations={i} />
                    <Informations title={'Categorias'} informations={i2} />
                    <Informations title={'Contato'} informations={i3} />


                </div>

                    <hr />
                    <p style={{ padding: '1rem 0' }}>@2025 Digitall College</p>

        </FooterConteiner>
    );
}

export default Footer;