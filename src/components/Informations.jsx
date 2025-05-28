import { NavLink } from "react-router-dom";
import styled from "styled-components";

const InformationsConteiner = styled.main`
    width: 30%;
    & p, h3{
        padding-bottom: 1rem;
    }
    
    @media screen and (max-width: 420px){
        text-align: center;
        width: 100%;
    }

    @media screen and (max-width: 768px){
        text-align: center;
        width: 100%;
        & div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

const Informations = ( {title, informations} ) => {
    return ( 
        <InformationsConteiner>
        <h3>{title}</h3>
        {informations.map((information, index) => (
            <div key={index}>
                <NavLink style={{color: "white"}} to={information.link} end><p>{information.text}</p></NavLink>
            </div>
        ))}
        </InformationsConteiner>
     );
}
 
export default Informations;