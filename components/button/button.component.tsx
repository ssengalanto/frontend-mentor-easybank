import React, { ComponentPropsWithRef } from 'react';
import styles from './button.module.scss';

interface Props extends ComponentPropsWithRef<'button'> {}

export const Button: React.FC<Props> = ({ children, className, ...props }) => (
  <button
    {...props}
    type="button"
    className={`${styles.gradient} ${className} transition-opacity duration-300 ease-in-out hover:opacity-75 text-sm py-3 px-6 rounded-full text-white outline-none focus:outline-none`}
  >
    {children}
  </button>
);
