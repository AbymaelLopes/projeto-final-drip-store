import styled from "styled-components";

export const HeaderStyle = styled.header`
    
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
                right: 16rem;
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
            }&.active{
                color: var(--primary);
                padding-bottom: 10px;
                border-bottom: 3px var(--primary) solid ;
            }
        }
    }

    //Aplicação de responsividade para celulares
    @media screen and (max-width: 820px){
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
`;