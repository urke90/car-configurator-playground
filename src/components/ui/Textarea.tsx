import type { ComponentPropsWithoutRef } from 'react';

import classes from './Textarea.module.scss';

// ----------------------------------------------------------------

interface ITextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  label: string;
  errorText?: string;
}

const Textarea: React.FC<ITextareaProps> = ({ label, errorText, id, ...rest }) => {
  const textareaClassName: string[] = [classes.container__textarea];

  if (errorText) {
    textareaClassName.push(classes['container__textarea--error']);
  }

  return (
    <div className={classes.container}>
      <label className={classes.container__label} htmlFor={id}>
        {label}
      </label>
      <textarea className={textareaClassName.join(' ')} id={id} {...rest} />
      <p className={classes.container__text}>{errorText}</p>
    </div>
  );
};

export default Textarea;
