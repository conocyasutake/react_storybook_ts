import React from 'react';

type TProps = {
  label: string
  bgColor: string
  onClick: () => void
}

export const ColorButton: React.FC<TProps> = (props: TProps) => {

  const { label, bgColor, onClick } = props;

  const buttonStyles = {
    color: '#fff',
    padding: '8px',
    borderRadius:'5px',
    // 値が無けれはグレー
    backgroundColor: bgColor ? bgColor : 'gray',
  }

  return (
    <button 
      style={buttonStyles}
      onClick={onClick}
    >
      {label}
    </button>
  );
};