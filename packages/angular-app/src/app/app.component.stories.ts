import type { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';

const meta: Meta<AppComponent> = {
  title: 'Example/AppComponent',
  component: AppComponent,
  render: (args: AppComponent) => ({
    props: args
  })
};

export default meta;

type Story = StoryObj<AppComponent>;

export const Primary: Story = {
  args: {
    title: 'Angular App Starter'
  }
};
