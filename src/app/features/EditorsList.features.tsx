import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { User } from "../../sdk/@types"
import PostService from "../../sdk/services/Post.service"
import UserService from "../../sdk/services/User.service"
import Profile from "../components/Profile"

export default function EditorsListFeatures () {

    const [editors, setEditors] = useState<User.EditorSummary[]>([])

    useEffect(() => {
        UserService.getAllEditors()
            .then(editors => setEditors(editors))
            console.log(editors)
    }, [])

    return <EditorsListWrapper>
        {
            editors.map(editor => {
                return <Profile
                            editorId={editor.id}
                            name={editor.name}
                            description={'editor a X meses'}
                            avatar={editor.avatarUrls.small}
                        />
            })
        }                              
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 24px;
`