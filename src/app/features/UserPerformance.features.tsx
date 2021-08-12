import { transparentize } from "polished";
import Chart from "../components/Chart/Chart";

export default function UserPermormanceFeatures () {

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

    return <Chart 
        title="Média de performance nos últimos 12 meses" 
        data={data} 
    />
}