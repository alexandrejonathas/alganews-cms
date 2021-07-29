import { transparentize } from 'polished';
import { Line } from 'react-chartjs-2'
import Heading from '../Typography/Heading';
import NoData from '../NoData/NoData';

import * as C from './Chart.styles'

/*
Execute este comando para instalar o Chart.js e o ReactChart.js 2 no seu projeto com Yarn:

yarn add chart.js@2.9.4 react-chartjs-2@2.11.1
Execute este comando para instalar o Chart.js e o ReactChart.js 2 no seu projeto com NPM:

npm install chart.js@2.9.4 react-chartjs-2@2.11.1
Instale também o @types/chart.js@2.9.32:

yarn add @types/chart.js@2.9.32
*/

//Para manipular a altura pela propriedade height do chart é preciso setar maintainAspectRatio para false

const options: Chart.ChartOptions = {
    maintainAspectRatio: true,
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      labels: {
        usePointStyle: true
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false,
          }
        }
      ],
      yAxes: [
        {
          type: 'linear',
          display: false,
          position: 'left',
          id: 'cashflow',
        }
      ],
    },
};

export interface ChartProps {
  title: string,
  data: Chart.ChartData
}

export default function Chart ({ title, data }: ChartProps) {
    return <C.Wrapper style={{ width: 640 }}>
      <div style={{ marginBottom: 16}}>
        <Heading level={3}>
          {title}
        </Heading>
      </div>
      { data 
          ? <Line width={600} height={139} data={data} options={options} />
          : <NoData height={139}></NoData>
      }
    </C.Wrapper>
};
  