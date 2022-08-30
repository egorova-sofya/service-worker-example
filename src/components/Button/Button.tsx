import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={`${className} button`} {...props}>
      {children}
    </button>
  );
};

export default Button;
