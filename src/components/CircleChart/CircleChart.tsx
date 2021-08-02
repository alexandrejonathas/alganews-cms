import { useEffect, useState } from 'react'
import * as C from './CircleChart.styles'

export interface CircleChartProps {
    size: number,
    progress: number,
    caption?: string,
    theme?: 'default' | 'primary',
    strokeWidht?: number
}

export default function CircleChart (props : CircleChartProps) {

    //Pega a cor do component com base no tema
    const getThemeColor = () => props.theme === 'primary' ? '#0099FF' : '#274060'

    //Setup (Configurações de cor, borda, etc.)
    const THEME = getThemeColor()
    const STROKE_WIDTH = props.strokeWidht || 8
    const STROKE_COLOR = THEME

    //Matemática
    const CENTER = props.size / 2
    const RADIUS = props.size / 2 - STROKE_WIDTH / 2
    const CIRCUNFERENCE = 2 * Math.PI * RADIUS

    //Estado do offset
    const [offset, setOffset] = useState(CIRCUNFERENCE)

    //Observador para animar o offset
    useEffect(() => {
        const progressOffset = ((100 - props.progress) / 100) * CIRCUNFERENCE
        setOffset(progressOffset)    
    }, [setOffset, CIRCUNFERENCE, props.progress, offset])


    return <C.Wrapper>
        todo: circle chart
    </C.Wrapper>
}