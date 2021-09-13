import { mdiDelete, mdiUpload } from '@mdi/js'
import Icon from '@mdi/react'
import { ChangeEvent, useState } from 'react'
import FileService from '../../../sdk/services/File.service'
import Loading from '../Loading'
import * as IU from './ImageUpload.styles'

export interface ImageUploadProps {
    label: string,
    onImageUpload: (imageUrl: string) => any
}

export default function ImageUpload (props: ImageUploadProps) {

    const [filePreview, setFilePreview] = useState<string | null>(null)

    const [publishing, setPublishing] = useState(false)

    function handleChange (e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files![0]
        if(file){
            const reader = new FileReader()

            reader.addEventListener('load', async (e) => {
                try{
                    setPublishing(true)
                    setFilePreview(String(e.target?.result))

                    const imageUrl = await FileService.upload(file)

                    props.onImageUpload(imageUrl)
                }finally {
                    setPublishing(false)
                }
            })
            reader.readAsDataURL(file)
        }
    }

    if(filePreview){        
        return <IU.ImagePreviewWrapper >
            <Loading show={publishing} />
            <IU.ImagePreview preview={filePreview} >
                <IU.Button onClick={ () => setFilePreview(null) } >
                    Remover imagem
                    <Icon size={'24px'} path={mdiDelete} />    
                </IU.Button>
            </IU.ImagePreview>    
        </IU.ImagePreviewWrapper>
    }

    return <IU.Wrapper>
        <Loading show={publishing} />
        <IU.Label>
            <Icon size={'24px'} path={mdiUpload}/>
            { props.label }
            <IU.Input type="file" onChange={ handleChange } />
        </IU.Label>
    </IU.Wrapper>
}