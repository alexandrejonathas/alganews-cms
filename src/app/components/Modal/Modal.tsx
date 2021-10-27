import Icon from '@mdi/react'
import { mdiInformation } from '@mdi/js'
import * as M from './Modal.styles'

export interface ModalProps {
    children: React.ReactNode
}

export default function Modal ({ children }: ModalProps) {
    return <M.ModalWrapper>
        { children }
    </M.ModalWrapper>    
}