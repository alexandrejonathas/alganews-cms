import { transparentize } from 'polished';
import { Line } from 'react-chartjs-2'

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Receitas',
        data: [800, 500, 650, 1000, 700, 900],
        fill: true,
        backgroundColor: '#0099FF',
        borderColor: transparentize(0.75, '#0099FF'),
        borderWidth: 0.5,
        yAxisID: 'cashflow',
      },
      {
        label: 'Despesas',
        data: [600, 700, 500, 1100, 750, 850],
        fill: true,
        backgroundColor: '#274060',
        borderColor: transparentize(0.75, '#274060'),
        borderWidth: 0.5,
        yAxisID: 'cashflow',
      },
    ],
};

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
    //maintainAspectRatio: false,
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

}

export default function Chart () {
    return <div style={{ width: 600, height: 400}}>
      <Line data={data} options={options} />
    </div>
};
  