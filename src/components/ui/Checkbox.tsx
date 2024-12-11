import type { ComponentPropsWithoutRef } from 'react';
import classes from './Checkbox.module.scss';

// ----------------------------------------------------------------

interface ICheckboxProps extends ComponentPropsWithoutRef<'input'> {
  label: React.ReactNode;
  isError?: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  id,
  label,
  disabled = false,
  isError = false,
  ...rest
}) => {
  const labelClassName = [classes.checkbox__label];
  const inputClassName = [classes.checkbox__input];

  if (isError) {
    labelClassName.push(classes['checkbox__label--error']);
    inputClassName.push(classes['checkbox__input--error']);
  }

  return (
    <div className={classes.checkbox}>
      <input
        type="checkbox"
        id={id}
        className={inputClassName.join(' ')}
        disabled={disabled}
        {...rest}
      />
      <label className={labelClassName.join(' ')} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
