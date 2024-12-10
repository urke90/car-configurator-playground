import classes from './RadioButton.module.scss';

import type { ComponentPropsWithoutRef } from 'react';

// ----------------------------------------------------------------

interface IRadioButtonProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
}

const RadioButton: React.FC<IRadioButtonProps> = ({ id, label, ...rest }) => {
  return (
    <div className={classes.radio}>
      <input type="radio" className={classes.radio__input} name="" id={id} {...rest} />
      <label className={classes.radio__label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
