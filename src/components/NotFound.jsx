import styled from 'styled-components';
import linkedin from '/assets/linkedin.png'

const ConteinerNotFound = styled.div`
height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    & div {
        display: flex;
        align-items: center;
        & img {
            margin-left: 1rem;
            width: 2rem;
        }
    }
`

const NotFound = () => {

    return (
        <ConteinerNotFound>
            <h2>Página em desenvolvimento</h2>
            <div>
                <span>Link's sugeridos:</span>
                <a href='https://www.linkedin.com/in/abymael-lopes/' target='_blank'><img src={linkedin} alt="" /></a>
            </div>
        </ConteinerNotFound>
    )
}

export default NotFound;