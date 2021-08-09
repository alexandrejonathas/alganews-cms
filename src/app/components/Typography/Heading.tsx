import * as H from './Heading.styles'

export interface HeadingProps {
    level: 1 | 2 | 3,
    children: React.ReactNode
}

export default function Heading ({ level, children }: HeadingProps) {
    const Component = ({
        1: H.Heading1,
        2: H.Heading2,
        3: H.Heading3
    }[level])
    return <Component>
        { children }
    </Component>
}

