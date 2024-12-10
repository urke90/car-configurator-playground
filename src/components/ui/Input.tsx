import classes from './Button.module.scss';

import type { ComponentPropsWithoutRef } from 'react';

// ----------------------------------------------------------------

interface IInputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  errorMessage: string;
}

const Input: React.FC<IInputProps> = ({ id, label, errorMessage, ...rest }) => {
  return (
    <div className={classes['container']}>
      <label className={classes['container__label']} htmlFor={id}>
        {label}
      </label>
      <input type="text" className={classes['container__input']} name="" id={id} {...rest} />
      <p className={classes['input-wrapper__error-text']}>{errorMessage}</p>
    </div>
  );
};

export default Input;
