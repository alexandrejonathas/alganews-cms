import React from 'react';
import { Story, Meta } from '@storybook/react';

import ValueDescriptor, { ValueDescriptorProps } from '../components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
  //argTypes: {
  //  backgroundColor: { control: 'color' },
  //},
} as Meta;

const Template: Story<ValueDescriptorProps> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: 'Ganhos no mêsa',
  value: 560322.02
}

export const DefaultCurrency = Template.bind({});
DefaultCurrency.args = {
  description: 'Ganhos no mês',
  value: 560322.02,
  isCurrency: true
}

export const Primary = Template.bind({});
Primary.args = {
  description: 'Ganhos no mês',
  value: 560322.02,
  variant: 'primary'
}

export const PrimaryCurrency = Template.bind({});
PrimaryCurrency.args = {
  description: 'Ganhos no mês',
  value: 560322.02,
  isCurrency: true,
  variant: 'primary'
}