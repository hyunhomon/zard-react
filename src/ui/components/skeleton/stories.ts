import type { Meta, StoryObj } from '@storybook/react-vite';
import Skeleton from './index';

const meta = {
  title: 'Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        w: 100,
        h: 100,
    },
};
