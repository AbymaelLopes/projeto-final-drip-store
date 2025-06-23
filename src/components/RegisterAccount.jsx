import styled from "styled-components";
import fotoLogin from '/assets/foto-login.png';
import Facebook from '/assets/Facebook.png';
import google from '/assets/google.png';
import { ButtonStyle } from "./ButtonStyle";
import { NavLink } from "react-router-dom";

const LoginStyle = styled.div`
    background: linear-gradient(180deg, #B5B6F2 0%, #EFEFFF 100%);
    .conteiner{
        height: auto;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        display: flex;
        & form {
        display: flex;
        flex-direction: column;
        margin: 4rem 0;
        padding: 2rem;
        width: 40vw;
        max-height: 70vh;
        background: var(--white );
        border-radius: 1rem;
        & input {
            padding-left: 1rem;
            margin-top: 0.5rem;
            border-radius: 1rem;
            height: 3rem;
            background: var(--ligth-gray-2);
        }
        & label {
            margin-top: 0.5rem;
        }
        & h2 {
            font-size: 30px;
            font-weight: bolder;
        }
        & span {
            margin-top: 0.5rem;
            color: var(--ligth-gray);
            & a {
                text-decoration: underline;
            }
        }
        & button{
            margin-top: 0.5rem;
            width: 100%;
        }
        .login-externo{
            padding-top: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            & img {
                width: 1.5rem;   
            }
        }
    }
        .foto-destaque{
            display: block;
            width: 22rem;
            height: 22rem;
            & img {
                width: 22rem;
                height: 22rem;
            }
            
        }
    }

    @media screen and (max-width: 768px) {
        .conteiner{
            gap: 0;
            flex-direction: column;
            & form {
                width: 80vw;
                & h2 {
                    font-size: 24px;
                }
            }
            .foto-destaque{
                width: 80%;
                height: 22rem;
                margin-bottom: 2rem;
            }
        }
    }
`

const RegisterAccount = () => {

    return(
        <LoginStyle>
            <div className="conteiner">

                <form action="">
                    <h2>Crie sua conta</h2>
                    <span>Já possui uma conta? Entre <a href="">aqui</a></span>
                    <label htmlFor="login">Email *</label>
                    <input type="text" name="" id="login" placeholder="Insira seu email"/>
                    <NavLink to={'/cadastro/usuario'}><ButtonStyle>Criar Conta</ButtonStyle></NavLink>
                    <span className="login-externo">Ou faça login com 
                        <img src={google} alt="" />
                        <img src={Facebook} alt="" />
                    </span>
                </form>
                
                <div className="foto-destaque">
                    <img src={fotoLogin} alt="Foto não carregada" />
                </div>

            </div>
        </LoginStyle>
    )
}

export default RegisterAccount;