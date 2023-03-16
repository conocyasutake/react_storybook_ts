import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubButton } from './SubButton';


export default {
  title: 'Components/Button/SubButton',
  component: SubButton,
} as ComponentMeta<typeof SubButton>;

// テンプレートを作成
const Template:ComponentStory<typeof SubButton> = (args) => <SubButton {...args} />;

// 作ったテンプレートから複製し、propsを指定
export const Default = Template.bind({});
Default.args = {
  label: 'ボタン',
};