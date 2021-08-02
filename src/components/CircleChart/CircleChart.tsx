import * as C from './CircleChart.styles'

export interface CircleChartProps {
    size: number,
    progress: number,
    caption?: string,
    theme?: 'default' | 'primary',
    strokeWidht?: number
}

export default function CircleChart (props : CircleChartProps) {
    return <C.Wrapper>
        todo: circle chart
    </C.Wrapper>
}