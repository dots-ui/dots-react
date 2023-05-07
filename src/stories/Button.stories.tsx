import type { Meta, StoryObj } from '@storybook/react';

import { Button } from "../components/Button";

const meta = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['text', 'outlined', 'contained'],
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
  args: {
    variant: 'contained',
    accent: 'primary',
    children: 'Button',
    disabled: false,
    href: undefined,
  },
};