import { Story, Meta } from '@storybook/react';

import ErrorDisplay, { ErrorDisplayProps } from '../app/components/ErrorDisplay';

export default {
  title: 'Example/ErrorDisplay',
  component: ErrorDisplay,
} as Meta;

const Template: Story<ErrorDisplayProps> = (args) => <ErrorDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {}

export const CustomTitle = Template.bind({});
CustomTitle.args = {
    title: 'Custom title'
}

export const CustomMessage = Template.bind({});
CustomMessage.args = {
    message: 'Custom message'
}

export const Small = Template.bind({});
Small.args = {
    small: true
}