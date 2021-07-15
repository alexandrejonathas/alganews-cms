import React from 'react';
import { Story, Meta } from '@storybook/react';

import Paragraph, { ParagraphProps } from '../components/Typography/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  //argTypes: {
  //  backgroundColor: { control: 'color' },
  //},
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({})
Default.args = {
    size: 'default',
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt repellendus corrupti modi unde delectus sint eveniet necessitatibus dolorum excepturi voluptas, vero praesentium iure magnam commodi reprehenderit vitae id nisi? Excepturi.'
}

export const Small = Template.bind({})
Small.args = {
    size: 'small',
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt repellendus corrupti modi unde delectus sint eveniet necessitatibus dolorum excepturi voluptas, vero praesentium iure magnam commodi reprehenderit vitae id nisi? Excepturi.'
}
