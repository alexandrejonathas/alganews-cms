import * as FD from './FieldDescriptor.styles'

export interface FieldDescriptorProps {
    description: string
    value: string
}

export default function FieldDescription ({ description, value }: FieldDescriptorProps) {
    return <FD.Wrapper>
        <span className="Description">{ description }</span>
        <span className="Value">{ value }</span>
    </FD.Wrapper>
}