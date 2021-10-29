import { Metric } from "alexandrejonathas-alganews-sdk";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { transparentize } from "polished";
import { ChartProps } from "../../app/components/Chart/Chart";

function transformEditorMontlyEarningsIntoChartJs ( 
    editorEarnings: Metric.EditorMonthlyEarnings ): ChartProps['data'] {

    const labels: string[] = []    

    const data1: number[] = []
    
    const data2: number[] = []  

    editorEarnings.forEach(earnig => {

        const formattedMonth = format(new Date(earnig.yearMonth), 'MMMM', {
            locale: ptBR
        })

        labels.push(formattedMonth)
        data1.push(earnig.totalAmount)
        data2.push(earnig.totalPlatformAverageAmount)
    })

    return {
        labels,
        datasets: [
            {
                label: 'Performance pessoal',
                data: data1,
                fill: true,
                backgroundColor: '#0099FF',
                borderColor: transparentize(0.75, '#0099FF'),
                borderWidth: 0.5,                 
            },
            {
                label: 'Performance média do time',
                data: data2,
                fill: true,
                backgroundColor: '#274060',
                borderColor: transparentize(0.75, '#274060'),
                borderWidth: 0.5,                
            }
        ]
    }
}

export default transformEditorMontlyEarningsIntoChartJs