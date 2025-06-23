import styled from "styled-components";
import { ButtonStyle } from "./ButtonStyle";


const LoginStyle = styled.div`
    background: var(--ligth-gray-2);
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
        width: 60vw;
        background: var(--white );
        border-radius: 1rem;
        .infoPessoais, .infoEntrega{
            display: flex;
            flex-direction: column;
            padding: 1rem 0;
        }
        .cadastrar{
            display: flex;
            align-items: self-start;
            & input{
                width: 2rem;
                height: 2rem;
                margin-right: 1rem;
            }
            & p{
                font-size: 16px;
            }
        }
        & input {
            padding-left: 1rem;
            margin-top: 0.5rem;
            border-radius: 1rem;
            height: 3rem;
            background: var(--ligth-gray-2);
        }
        & input::placeholder{
            font-size: 12px;
        }
        & label {
            margin-top: 1rem;
        }
        & h2 {
            font-size: 30px;
            font-weight: bolder;
        }
        & button{
            margin-top: 0.5rem;
            width: 100%;
        }
    }

    @media screen and (max-width: 768px) {
        
    }
`

const Register = () => {

    return(
        <LoginStyle>
            <div className="conteiner">

                <form action="">
                    <h2>Criar conta</h2>
                    <div className="infoPessoais">
                    
                        <span>Informações Pessoais</span>
                        <hr />
                        <label htmlFor="nome">Nome Completo *</label>
                        <input type="text" name="" id="nome" placeholder="Insira seu nome"/>
                        <label htmlFor="cpf">CPF *</label>
                        <input type="text" name="" id="cpf" placeholder="Insira seu CPF"/>
                        <label htmlFor="email">E-mail *</label>
                        <input type="email" name="" id="email" placeholder="Insira seu email"/>
                        <label htmlFor="celular">Celular *</label>
                        <input type="text" name="" id="celular" placeholder="Insira seu celular"/>
                    
                    </div>
                    <div className="infoEntrega">
                        
                        <span>Informações de Entrega</span>
                        <hr />
                        <label htmlFor="endereco">Endereço *</label>
                        <input type="text" name="" id="endereco" placeholder="Insira seu endereço"/>
                        <label htmlFor="bairro">Bairro *</label>
                        <input type="text" name="" id="bairro" placeholder="Insira seu bairro"/>
                        <label htmlFor="cidade">Cidade *</label>
                        <input type="email" name="" id="cidade" placeholder="Insira sua cidade"/>
                        <label htmlFor="cep">CEP *</label>
                        <input type="text" name="" id="cep" placeholder="Insira seu CEP"/>
                        <label htmlFor="complemento">Complemento *</label>
                        <input type="text" name="" id="complemento" placeholder="Insira complemento"/>

                    </div>
                        <div className="cadastrar">
                            <input type="checkbox" name="" id="ckb" />
                            <label htmlFor="ckb">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
                    </div>
                        <ButtonStyle>Criar Conta</ButtonStyle>
                </form>
                

            </div>
        </LoginStyle>
    )
}

export default Register;