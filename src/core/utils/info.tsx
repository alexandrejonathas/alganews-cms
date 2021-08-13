import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Info from '../../app/components/Info'

export interface InfoProps {
    title: string,
    content: string,
    onConfirm?: () => any,
    onCancel?: () => any,
}

export default function info (props: InfoProps) {
    confirmAlert({
        overlayClassName: 'info-overlay',
        customUI: () => {
            return (
                <Info title={props.title} content={props.content} />
            )
        }
    })
}