import React from 'react';
import { Story, Meta } from '@storybook/react';

import NoData, { NoDataProps } from '../components/NoData/NoData';

export default {
  title: 'Example/NoData',
  component: NoData,
  //argTypes: {
  //  backgroundColor: { control: 'color' },
  //},
} as Meta;

const Template: Story<NoDataProps> = (args) => <NoData {...args} />;

export const Default = Template.bind({});
Default.args = {}

export const FixedHeight = Template.bind({});
FixedHeight.args = {
    height: 200
}