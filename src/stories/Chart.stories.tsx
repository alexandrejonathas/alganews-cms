import React from 'react';
import { Story, Meta } from '@storybook/react';

import Chart, { ChartProps } from '../app/components/Chart/Chart';
import { transparentize } from 'polished';

export default {
  title: 'Example/Chart',
  component: Chart,
} as Meta;

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

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Média de performance nos últimos 12 meses', 
  data: data
}

export const WithoutData = Template.bind({});
WithoutData.args = {
  title: 'Média de performance nos últimos 6 meses',
}