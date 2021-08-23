import { mdiAlert } from '@mdi/js'
import Icon from '@mdi/react'
import * as ED from './ErrorDisplay.styles'

export interface ErrorDisplayProps {
    small?: boolean,
    title?: string,
    message?: string
}

export default function ErrorDisplay (props: ErrorDisplayProps) {
    return <ED.Wrapper>
        <Icon path={ mdiAlert } size={ props.small ? '24px' : '48px' } />
        <h2>{ props.title || 'Erro ao recuperar componente' }</h2>
        <p>{ props.message || 'Erro desconhecido' }</p>
    </ED.Wrapper>
}