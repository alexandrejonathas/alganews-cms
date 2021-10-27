import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Modal from '../../app/components/Modal'

export interface InfoProps {
    children: React.ReactNode
}

export default function modal (props: InfoProps) {
    //Tranforma a função numa makroTask
    //MikroTasks são executadas no fim do loop atual
    //MakroTasks são executadas no início do proximo loop
    setTimeout(() => {
        confirmAlert({
            overlayClassName: 'info-overlay',
            customUI: () => {
                return (
                    <Modal children={props.children} />
                )
            }
        })
    }, 0)
}