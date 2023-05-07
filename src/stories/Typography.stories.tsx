import type { Meta, StoryObj } from '@storybook/react';

import { Text } from "../components/Text";

const meta: Meta<typeof Text> = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextStory: Story = {
  args: {
    variant: 'h1',
    children: 'Lorem ipsum dolor sit amet',
  },
};