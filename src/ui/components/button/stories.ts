import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Button from './index';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fill: Story = {
    args: {
        variant: "fill",
        label: "Button",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        label: "Button",
    },
};

export const Disabled: Story = {
    args: {
        variant: "disabled",
        label: "Button",
    },
};
