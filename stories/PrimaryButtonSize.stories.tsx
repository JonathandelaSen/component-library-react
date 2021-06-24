import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PrimaryButton } from '../src/PrimaryButton';

const meta: Meta = {
  title: 'PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <PrimaryButton  {...args} onClick={() => {}}/>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
