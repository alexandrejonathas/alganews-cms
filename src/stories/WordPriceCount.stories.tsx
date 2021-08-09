import { Story, Meta } from '@storybook/react';

import WordPriceCount, { WordPriceCountProps } from '../app/components/WordPriceCount';

export default {
  title: 'Example/WordPriceCount',
  component: WordPriceCount,
} as Meta;

const Template: Story<WordPriceCountProps> = (args) => <WordPriceCount {...args} />;

export const Default = Template.bind({});
Default.args = {
  wordsCount: 20,
  pricePerWord: 0.25
}