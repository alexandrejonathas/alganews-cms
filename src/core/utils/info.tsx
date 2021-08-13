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
    //Tranforma a função numa makroTask
    //MikroTasks são executadas no fim do loop atual
    //MakroTasks são executadas no início do proximo loop
    setTimeout(() => {
        confirmAlert({
            overlayClassName: 'info-overlay',
            customUI: () => {
                return (
                    <Info title={props.title} content={props.content} />
                )
            }
        })
    }, 0)
}