import * as P from './Profile.styles'

export interface ProfileProps{
    name: string,
    description: string,
    avatar: string,
    editorId: number
}

export default function Profile (props: ProfileProps) {
    return <P.Wrapper to={`/editores/${props.editorId}`}>
        <P.Avatar src={props.avatar} alt={props.name} />
        <P.Info>
            <P.Name>{props.name}</P.Name>
            <P.Description>{props.description}</P.Description>
        </P.Info>
    </P.Wrapper>
}