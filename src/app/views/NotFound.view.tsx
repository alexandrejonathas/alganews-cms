import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import notFound from '../../assets/not_found.svg'

import Button from '../components/Button'

export default function NotFound () {
    
    const history = useHistory()

    return <NotFoundWrapper>
        <span>Oops!</span>
        <h1>Não encontramos esta página!</h1>
        <img src={notFound} alt="página não encontrada" />
        <Button 
            variant="primary" 
            label="Ir para home"
            onClick={ () => history.replace('/') } 
        /> 
    </NotFoundWrapper>
}

const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;

    gap: 32px;

    span {
        font-size: 72px;
    }

    h1 {
        font-size: 18px;
        font-weight: 400;
    }
`