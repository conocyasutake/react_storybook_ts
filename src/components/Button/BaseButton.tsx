// コンポーネント
import React from 'react';

type TProps = {
  label: string
  onClick: () => void
}

// labelとonClickを受け取る
export const BaseButton: React.FC<TProps> = (props: TProps) => {

  const { label, onClick } = props;

  return (
    <button 
      onClick={onClick}
    >
      {label}
    </button>
  );
};