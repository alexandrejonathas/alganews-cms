import confirm from '../../core/utils/confirm'
import info from '../../core/utils/info'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'
import SessionController from '../components/SessionController'
import * as DL from './Default.layout.styles'

export interface DefaultLayoutProps {
    children: React.ReactNode
}

export default function DefaultLayout (props: DefaultLayoutProps) {
    return <DL.Wrapper>
        <DL.Header>
            <Logo />
        </DL.Header>
        <DL.Main>
            <DL.Navigation>
                <NavBar />
            </DL.Navigation>

            <DL.FeaturedContent>
                { props.children }
            </DL.FeaturedContent>
            
            <DL.Aside>
                <SessionController 
                    name={'Jonathas Lima'}
                    description={'Programador a mais de 10 anos'}
                    avatar={'https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg'}
                    onLogout={ () => {
                        confirm({
                            title: 'Deseja deslogar?',
                            onConfirm: () => {
                                info({
                                    title: 'Você foi deslogado',
                                    content: 'Você será redirecionado para a página de login'
                                })
                            }
                        }) 
                    }}
                />
            </DL.Aside>
        </DL.Main>
    </DL.Wrapper>
}