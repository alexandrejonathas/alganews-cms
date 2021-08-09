import React from 'react';
import { Story, Meta } from '@storybook/react';

import FieldDescriptor, { FieldDescriptorProps } from '../app/components/FieldDescriptor/FieldDescriptor';

export default {
  title: 'Typography/FieldDescriptor',
  component: FieldDescriptor,
  //argTypes: {
  //  backgroundColor: { control: 'color' },
  //},
} as Meta;

const Template: Story<FieldDescriptorProps> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = {
    description: 'data de nascimento',
    value: '26 de dezembro de 1997 (22 anos)'
}