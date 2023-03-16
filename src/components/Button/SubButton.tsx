import React from 'react';

type TProps = {
  label: string
  onClick: () => void
}

export const SubButton: React.FC<TProps> = (props: TProps) => {

  const { label, onClick } = props;

  return (
    <button 
      onClick={onClick}
    >
      {label}
    </button>
  );
};