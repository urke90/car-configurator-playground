import classes from './RadioButton.module.scss';

import type { ComponentPropsWithoutRef } from 'react';

// ----------------------------------------------------------------

interface IRadioButtonProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  isError?: boolean;
}

const RadioButton: React.FC<IRadioButtonProps> = ({ id, label, isError = false, ...rest }) => {
  const inputClassName: string[] = [classes.radio__input];
  const labelClassName: string[] = [classes.radio__label];

  if (isError) {
    inputClassName.push(classes['radio__input--error']);
    labelClassName.push(classes['radio__label--error']);
  }

  return (
    <div className={classes.radio}>
      <input type="radio" className={inputClassName.join(' ')} id={id} {...rest} />
      <label className={labelClassName.join(' ')} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
