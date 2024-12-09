import type { ComponentPropsWithoutRef } from 'react';
import classes from './Checkbox.module.scss';

// ----------------------------------------------------------------

interface ICheckboxProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  isError?: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = ({ id, label, disabled = false, isError, ...rest }) => {
  console.log('classess', classes);
  console.log('isError', isError);

  const labelClassName = [classes.checkbox__label];
  const inputClassName = [classes.checkbox__input];

  if (disabled) {
    labelClassName.push(classes['checkbox__label--disabled']);
  }

  if (isError) {
    labelClassName.push(classes['checkbox__label--error']);
    inputClassName.push(classes['checkbox__input--error']);
  }

  console.log('inputClassName', inputClassName.join(' '));

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
