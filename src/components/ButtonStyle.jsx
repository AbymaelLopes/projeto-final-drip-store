import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: 9rem;
    height: 3rem;
    background-color: var(--primary);
    border-radius: 1rem;
    border: none;
    color: var(--white);
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out ;
    &:hover{
        background-color: var(--primary), 0.2;
        color: var(--primary);
        border: 1px solid var(--primary);
    }

    @media screen and (max-width: 768px) {
        width: 7rem;
        height: 3rem;
        font-size: 12px;
    }

    @media screen and (max-width: 420px) {
        width: 7rem;
        height: 3rem;
        font-size: 12px;
    }
`;