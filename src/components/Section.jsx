import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SectionConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & .section-link{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 1rem;
    }#seeMore{
        color: var(--primary);
    }h3{
        color: var(--dark-gray-2);
        font-size: 24px;
    }
    .children{
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 314px){
        & .section-link{
            font-size: 12px;
        }
        h3{
            color: var(--dark-gray-2);
            font-size: 16px;
        }
    }
`;

const Section = ({ title, titleAlign = 'left', children, link }) => {

    let defLink = link !== undefined /*Verifica se a prop link está recebendo valor */
    let defTitle = title !== undefined /*Verifica se a prop title está recebendo valor */
    
    return (
        <SectionConteiner>

            <div className={defLink ? 'section-link':'none'} style={{display: defTitle ? '' : 'none', padding: '1rem 0', margin: '0 1rem' }}>
                <h3
                    style={
                        {textAlign: titleAlign}
                    }>{title}

                </h3>
                
                <nav>
                    <NavLink id="seeMore" to={'/Produtos'} end>{link}</NavLink>
                </nav>
            </div>
            <div className="children">
                {children}
            </div>
        </SectionConteiner>
    );
}

export default Section;