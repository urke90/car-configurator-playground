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

  return classesToCreate.map((c) => moduleClasses[c]).join(' ');
};
