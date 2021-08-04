import { Story, Meta } from '@storybook/react';

import Profile, { ProfileProps } from '../components/Profile';

export default {
  title: 'Example/Profile',
  component: Profile,
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Jonathas Lima',
    description: 'Programador a mais de 10 anos',
    avatar: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg'
}