import Button from '../Button/Button'
import * as SC from './SessionController.styles'

export interface SessionControllerProps {
    name: string,
    description: string,
    avatar: string,
    onLogout?: () => any
}

export default function (props: SessionControllerProps) {
    return <SC.Wrapper>
        <SC.Avatar src={ props.avatar }></SC.Avatar>
        <SC.Name>{ props.name }</SC.Name>
        <SC.Description>{ props.description }</SC.Description>
        <Button variant="danger" label="Logout"
            onClick={ props.onLogout }></Button>
    </SC.Wrapper>
}