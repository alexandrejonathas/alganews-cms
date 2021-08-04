import { Story, Meta } from '@storybook/react';

import SessionController, { SessionControllerProps } from '../components/SessionController';

export default {
  title: 'Example/SessionController',
  component: SessionController,
  argTypes: {
    onLogout: {
      action: 'logout'
    }
  }  
} as Meta;

const Template: Story<SessionControllerProps> = (args) => <SessionController {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Jonathas Alexandre Bento de Lima',
    description: 'Programador a mais de 10 anos',
    avatar: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg',
}