import type { ComponentPropsWithoutRef } from 'react';

import classes from './Input.module.scss';

// ----------------------------------------------------------------

interface IInputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  errorText?: string;
}

const Input: React.FC<IInputProps> = ({ type = 'text', id, label, errorText, ...rest }) => {
  console.log('classes', classes);
  const inputCLassName: string[] = [classes.container__input];

  if (errorText) {
    inputCLassName.push(classes['container__input--error']);
  }

  return (
    <div className={classes.container}>
      <label className={classes.container__label} htmlFor={id}>
        {label}
      </label>
      <input type={type} className={inputCLassName.join(' ')} name="" id={id} {...rest} />
      <p className={classes.container__text}>{errorText}</p>
    </div>
  );
};

export default Input;
