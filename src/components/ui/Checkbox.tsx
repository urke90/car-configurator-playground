import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import classes from './Checkbox.module.scss';

// ----------------------------------------------------------------

interface ICheckboxProps extends ComponentPropsWithoutRef<'input'> {
  label: React.ReactNode;
  isError?: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ id, label, disabled = false, isError = false, ...rest }, ref) => {
    const labelClassName = [classes.checkbox__label];
    const inputClassName = [classes.checkbox__input];

    if (isError) {
      labelClassName.push(classes['checkbox__label--error']);
      inputClassName.push(classes['checkbox__input--error']);
    }

    return (
      <div className={classes.checkbox}>
        <label className={labelClassName.join(' ')} htmlFor={id}>
          <input
            type="checkbox"
            ref={ref}
            id={id}
            className={inputClassName.join(' ')}
            disabled={disabled}
            {...rest}
          />
          {label}
        </label>
      </div>
    );
  }
);

export default Checkbox;
