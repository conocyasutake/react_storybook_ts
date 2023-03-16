import React from 'react';
import './Button.css';

type TProps = {
  label: string
  size: string
  height: number
  disabled: boolean
  onClick: () => void
}

export const CustomButton: React.FC<TProps> = (props: TProps) => {

  const { label, size, height, disabled, onClick } = props;

  return (
    <button 
      className={`button ${size}`}
      style={{ height: height}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};