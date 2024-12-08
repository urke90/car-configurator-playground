import type { ComponentPropsWithoutRef } from 'react';
import classes from './Button.module.scss';

// ----------------------------------------------------------------

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button: React.FC<IButtonProps> = ({ className, ...rest }) => {
  console.log('classes', classes);
  console.log('className', className);

  return (
    <button
      className={`${classes.btn}  ${classes['btn--secondary']} ${classes['btn--small']}`}
      {...rest}
    />
  );
};

export default Button;
