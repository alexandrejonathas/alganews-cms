import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

//import { Button } from './Button';

import Button, { ButtonProps } from '../components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  //argTypes: {
  //  backgroundColor: { control: 'color' },
  //},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'Danger',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  label: 'Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  label: 'Disabled',
  disabled: true
};
