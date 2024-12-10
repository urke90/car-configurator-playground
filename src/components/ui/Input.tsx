import type { ComponentPropsWithoutRef } from 'react';

import classes from './Input.module.scss';

// ----------------------------------------------------------------

interface IInputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  errorMessage: string;
}

const Input: React.FC<IInputProps> = ({ type = 'text', id, label, errorMessage, ...rest }) => {
  return (
    <div className={classes.container}>
      <label className={classes.container__label} htmlFor={id}>
        {label}
      </label>
      <input type={type} className={classes.container__input} name="" id={id} {...rest} />
      <p className={classes.container__text}>{errorMessage}</p>
    </div>
  );
};

export default Input;
