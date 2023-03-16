import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorButton } from './ColorButton';


export default {
  title: 'Components/Button/ColorButton',
  component: ColorButton,
} as ComponentMeta<typeof ColorButton>;

// テンプレート
const Template: ComponentStory<typeof ColorButton> = (args) => <ColorButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  bgColor: 'gray',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  bgColor: 'blue',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  bgColor: 'red',
};