import classes from './RadioButton.module.scss';

import type { ComponentPropsWithoutRef } from 'react';

// ----------------------------------------------------------------

interface IRadioButtonProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  isError?: boolean;
}

const RadioButton: React.FC<IRadioButtonProps> = ({ id, label, isError = false, ...rest }) => {
  const labelClassName: string[] = [classes.radio__input];

  if (isError) {
    labelClassName.push(classes['radio__input--error']);
  }

  return (
    <div className={classes.radio}>
      <input type="radio" className={labelClassName.join(' ')} name="" id={id} {...rest} />
      <label className={classes.radio__label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
