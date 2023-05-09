import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from "../components/TextField";

const meta: Meta<typeof TextField> = {
  title: 'Example/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    placeholder: {
      defaultValue: "lorem ipsum",
      control: {
        type: "text",
      },
    },
  },

};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextStory: Story = {
  args: {
    type: 'text',
    disabled: false,
    placeholder: "lorem ipsum",
    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  },
};