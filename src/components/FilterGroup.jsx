import { useState } from "react";
import styled from "styled-components";

const FilterGroupConteiner = styled.main`
    margin: 1em 0 1em 1em;
    width: 18rem;
    background: var(--white);
    padding: 1rem;
    border-radius: 4px;
    .fg-cabeçalho{
        padding-bottom: 1rem;
        & h2{
            font-size: 16px;
            color:  var(--primary);
            padding-bottom: 5px; 
        }& hr{
             border: var(--ligth-gray-2) 1px solid;
        }
    }
    .title{
        border: 1px solid var(--ligth-gray-2);
        border-radius: 5px;
        padding: 0 0 1em 0;
        & h4{
            margin: 1rem 0 0 1rem;
            color: var(--dark-gray-2);
            font-size: 14px
        }
        & input{
            width: 1rem;
            height: 1rem;
            background: var(--primary);
            margin: 1rem 0 0 1rem;
        }
        & label{
            margin: 1rem 0 0 1rem;
        }
    }

    @media screen and (max-width: 768px){
       display: none;
    }
`;

const FilterGroup = ({ title, inputType, options }) => {

    const [checked, setChecked] = useState(false)

    return (
        <FilterGroupConteiner>

            <div className="fg-cabeçalho">

                <h2>Filtar Selecção:</h2>

                <hr/>
            </div>

            <div className="title">
                <h4>{title}</h4>
                
                {options.map((option, index) => (
                    <div key={index} style={{display: 'flex'}}>

                        <input id={option.id} type={inputType}
                            checked={checked[option.id]}
                            onChange={(e) => setChecked(e.target.checked)} />

                        <label htmlFor={option.id}>{option.text}</label>

                    </div>

                ))}
            </div>

        </FilterGroupConteiner>
    );
}

export default FilterGroup;