// stories
import React from 'react';
// ボタンコンポーネントのインポート
import { BaseButton } from './BaseButton';

// storybookのステータス
export default {
  // storybookの左側に表示されるラベル名
  title: 'Components/Button/BaseButton',
  // コンポーネントを指定
  component: BaseButton,
};

// ここでエクスポートされたものがstorybookに表示される
export const Sample1 = () => <BaseButton label="ボタン" onClick={() => {}}/>;