import { Wrapper } from "./Paragraph.styles"

export interface ParagraphProps {
    size?: 'default' | 'small',
    children: string
}

export default function Paragraph ({ size, children }: ParagraphProps) {
    return <Wrapper size={size || 'default'}>
        { children }
    </Wrapper>
}