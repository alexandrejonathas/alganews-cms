import { useState } from "react"
import { useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import styled from "styled-components"
import { User } from "../../sdk/@types"
import PostService from "../../sdk/services/Post.service"
import UserService from "../../sdk/services/User.service"
import getEditorDescription from "../../sdk/utils/getEditorDescription"
import Profile from "../components/Profile"

export default function EditorsListFeatures () {

    const [editors, setEditors] = useState<User.EditorSummary[]>([])

    useEffect(() => {
        UserService.getAllEditors()
            .then(editors => setEditors(editors))
    }, [])

    if(!editors.length)
        return <EditorsListWrapper>
            <Skeleton width={328} height={82} />
            <Skeleton width={328} height={82} />
            <Skeleton width={328} height={82} />
            <Skeleton width={328} height={82} />
            <Skeleton width={328} height={82} />
            <Skeleton width={328} height={82} />
        </EditorsListWrapper>

    return <EditorsListWrapper>
        {
            editors.map(editor => {
                return <Profile
                            editorId={editor.id}
                            name={editor.name}
                            description={getEditorDescription(new Date(editor.createdAt))}
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