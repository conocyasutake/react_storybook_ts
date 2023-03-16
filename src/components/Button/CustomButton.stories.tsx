import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomButton } from './CustomButton';


export default {
  title: 'Components/Button/CustomButton',
  component: CustomButton,
  // controlの設定
  argTypes: {
    label: { control: { type: 'text' } },
    // typeのみの場合は省略可
    disabled: { control: 'boolean' }, 
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    height: {control: {type: 'range', min: 10, max: 200, step: 10}},
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof CustomButton>;

// テンプレート
const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  disabled: true,
  size: 'large',
};

