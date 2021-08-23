import styled from "styled-components"
import Profile from "../components/Profile"

export default function EditorsListFeatures () {

    return <EditorsListWrapper>
        <Profile
            editorId={1}
            name="Jonathas Lima"
            description="Editor de conteúdo há 3 anos"
            avatar="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"
        />

        <Profile
            editorId={2}
            name="Jonathas Lima"
            description="Editor de conteúdo há 3 anos"
            avatar="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"
        />

        <Profile
            editorId={3}
            name="Jonathas Lima"
            description="Editor de conteúdo há 3 anos"
            avatar="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"
        />

        <Profile
            editorId={4}
            name="Jonathas Lima"
            description="Editor de conteúdo há 3 anos"
            avatar="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"
        />

        <Profile
            editorId={5}
            name="Jonathas Lima"
            description="Editor de conteúdo há 3 anos"
            avatar="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"
        />                                
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 24px;
`