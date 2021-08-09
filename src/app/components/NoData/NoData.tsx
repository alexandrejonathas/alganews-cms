import { Message, SadFace, Wrapper } from "./NoData.styles";

export interface NoDataProps {
    height?: number
}

export default function NoData ({ height }: NoDataProps) {
    return <Wrapper height={height ?? 120}>
        <Message>Sem dados para exibir</Message>
        <SadFace>:(</SadFace>
    </Wrapper>
}