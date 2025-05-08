import styled from "styled-components";

export const BtnStyle = styled.button`
    width: 7rem;
    height: 2.5rem;
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
`;