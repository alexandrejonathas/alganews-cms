import NavBar from '../components/NavBar'
import * as DL from './Default.layout.styles'

export interface DefaultLayoutProps {
    children: React.ReactNode
}

export default function DefaultLayout (props: DefaultLayoutProps) {
    return <DL.Wrapper>
        <DL.Header>header</DL.Header>
        <DL.Main>
            <DL.Navigation>
                <NavBar />
            </DL.Navigation>
            <DL.FeaturedContent>
                { props.children }
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim vero unde fugiat quaerat totam sint asperiores. Architecto nulla porro pariatur provident sit, sunt delectus hic nesciunt vitae? Quas, error numquam?</p>
            </DL.FeaturedContent>
            <DL.Aside>
                DIV 03
            </DL.Aside>
        </DL.Main>
    </DL.Wrapper>
}