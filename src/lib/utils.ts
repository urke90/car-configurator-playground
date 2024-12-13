export const removeWhitespaceFromClassName = (className: string | undefined) => {
  if (typeof className !== 'string') return [];

  return className
    .trim()
    .split(' ')
    .filter((str) => str !== '');
};

export const generateClassName = (
  moduleClasses: { [key: string]: string },
  classesToCreate: string[]
) => {
  if (classesToCreate.length === 0) return '';
  const unsupportedClassNames: string[] = [];

  const classes = classesToCreate
    .filter((c) => {
      if (!moduleClasses[c]) {
        unsupportedClassNames.push(c);
        return false;
      }
      return true;
    })
    .map((c) => moduleClasses[c])
    .join(' ');

  if (unsupportedClassNames.length) {
    console.warn('Unsupported className provided', unsupportedClassNames);
  }

  return classes;
};

export const formatPrice = (price: number, currency: string = '€', digits: number = 2) => {
  if (price === 0) return `0${currency}`;

  return `${price.toFixed(digits)}${currency}`;
};
