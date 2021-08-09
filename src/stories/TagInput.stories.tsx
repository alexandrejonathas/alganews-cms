import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Tag } from 'react-tag-input';

import TagInput, { TagInputProps } from '../app/components/TagInput';

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

export function WorkingLiveExample () {

  const [tags, setTags] = useState<Tag[]>([])

  function onAdd (tag: Tag) {
    setTags([...tags, tag])
  }

  function onDelete (i: number) {
    setTags(tags.filter((tag, index) => index !== i))
  }

  return <TagInput
    placeholder="Insira as tags"
    tags={tags}
    onAdd={onAdd}
    onDelete={onDelete}
  />
}