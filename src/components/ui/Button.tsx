import { generateClassName, removeWhitespaceFromClassName } from '@/lib/utils';

import type { ComponentPropsWithoutRef } from 'react';
import classes from './Button.module.scss';

// ----------------------------------------------------------------

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button: React.FC<IButtonProps> = ({ className = '', ...rest }) => {
  // console.log('classes', classes);
  // console.log('className', className);
  // console.log('className trim()', className.trim());

  const transformedClassNames = removeWhitespaceFromClassName(className);

  const createdClases = generateClassName(classes, transformedClassNames);

  return <button className={`${classes.btn} ${createdClases}`} {...rest} />;
};

export default Button;
