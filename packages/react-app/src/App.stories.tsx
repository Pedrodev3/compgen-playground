import type { Meta, StoryObj } from '@storybook/react';
import App from './App';

const meta: Meta<typeof App> = {
  title: 'Example/App',
  component: App
};

export default meta;

type Story = StoryObj<typeof App>;

export const Primary: Story = {
  args: {}
};
