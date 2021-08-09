import Icon from '@mdi/react'
import { mdiInformation } from '@mdi/js'
import * as I from './Info.styles'

export interface InfoProps {
    title: string,
    content: string
}

export default function Info ({ title, content }: InfoProps) {
    return <I.InfoWrapper>
        <I.InfoIcon>
            <Icon color="#09F" size="48px" path={ mdiInformation }></Icon>
        </I.InfoIcon>
        <I.InfoMessage>
            <I.InfoTitle>{ title }</I.InfoTitle>
            <p>{ content }</p>
        </I.InfoMessage>
    </I.InfoWrapper>    
}