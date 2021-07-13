import * as VD from './ValueDescriptor.styles'

const COLORS = {
    default: '#274060',
    primary: '#0099FF'
}

export interface ValueDescriptorProps {
    description: string,
    value: number,
    variant: 'primary' | 'default',
    isCurrency?: boolean,
}

export default function ValueDescriptor (props: ValueDescriptorProps) {
    return <VD.Wrapper color={ COLORS[props.variant || 'default'] } >
        <span className="Description">
            { props.description }:
        </span>
        <div>
            {
                props.isCurrency && 
                <span className="Currency">{'R$'}</span> 
            }
            
            <span className="Value">{ props.value.toLocaleString('pt-BR') }</span>
        </div>
    </VD.Wrapper>
} 