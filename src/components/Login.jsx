import styled from "styled-components";
import fotoLogin from '/assets/foto-login.png';
import { ButtonStyle } from "./ButtonStyle";


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

const Login = () => {

    return(
        <LoginStyle>
            <div className="conteiner">

                <form action="">
                    <h2>Acesse sua conta</h2>
                    <span>Novo Cliente? Então registre-se <a href="">aqui</a></span>
                    <label htmlFor="login">Login</label>
                    <input type="text" name="" id="login" placeholder="Digite o usuário"/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="" id="password" placeholder="Digite sua senha"/>
                    <span><a href="">Esqueci minha senha</a></span>
                    <ButtonStyle>Entrar</ButtonStyle>
                </form>
                
                <div className="foto-destaque">
                    <img src={fotoLogin} alt="Foto não carregada" />
                </div>

            </div>
        </LoginStyle>
    )
}

export default Login;