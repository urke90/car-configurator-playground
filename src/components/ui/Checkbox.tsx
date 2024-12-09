import type { ComponentPropsWithoutRef } from 'react';
import classes from './Checkbox.module.scss';

// ----------------------------------------------------------------

interface ICheckboxProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ id, label, ...rest }) => {
  return (
    <div className={classes.checkbox}>
      <input type="checkbox" id={id} className={classes.checkbox__input} {...rest} />
      <label className={classes.checbox__label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
