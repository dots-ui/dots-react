import type { Meta, StoryObj } from '@storybook/react';

import { Text } from "../components/Text";

const meta: Meta<typeof Text> = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'variant', defaultValue: "p" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5',
  },
};

export const Heading6: Story = {
  args: {
    variant: 'h6',
    children: 'Heading 6',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'Paragraph',
  },
};
