import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import withBoundary from "../../core/hoc/withBoundary";
import transformEditorMontlyEarningsIntoChartJs from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs";
import MetricService from "../../sdk/services/Metric.service";
import Chart, { ChartProps } from "../components/Chart/Chart";

function UserPermormanceFeatures () {

    const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()

    const [error, setError] = useState<Error>()

    useEffect(() => {
      MetricService.getEditorMonthlyEarnings()
        .then(transformEditorMontlyEarningsIntoChartJs)
        .then(setEditorEarnings)
        .catch(e => setError(new Error(e.message)))
    }, [])

    if(error)
      throw error

    if(!editorEarnings)
      return <div>
        <Skeleton height={'227px'} />
      </div>
    
    const data = {
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: 'Receitas',
          data: [800, 500, 650, 1000, 700, 900],
 
          yAxisID: 'cashflow',
        },
        {
          label: 'Despesas',
          data: [600, 700, 500, 1100, 750, 850],

          yAxisID: 'cashflow',
        },
      ],
    };

    return <Chart 
        title="Média de performance nos últimos 12 meses" 
        data={editorEarnings} 
    />
}

export default withBoundary(UserPermormanceFeatures, 'performance do usuário')