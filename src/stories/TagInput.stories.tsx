import { Story, Meta } from '@storybook/react';

import TagInput, { TagInputProps } from '../components/TagInput';

export default {
  title: 'Example/TagInput',
  component: TagInput,
  argTypes: {
    onAdd: {
      action: 'Adicionando'
    },
    onDelete: {
        action: 'Deletando'
    }
  }   
} as Meta;

const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Insira um tag",
    tags: [{ id: '1', text: 'JavaScript'}, { id: '2', text: 'React'},]
}