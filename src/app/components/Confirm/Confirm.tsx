import Button from '../Button/Button'
import * as C from './Confirm.styles'

export interface ConfirmProps {
    title: string
}

export default function Confirm ({ title }: ConfirmProps) {
    return <C.Wrapper>
        <C.Title>{ title }</C.Title>
        <C.ButtonWrapper>
            <Button variant="danger" label="Não" /> 
            <Button variant="primary" label="Sim" />             
        </C.ButtonWrapper>
    </C.Wrapper>
}