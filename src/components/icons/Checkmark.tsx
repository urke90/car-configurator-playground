import type { SVGProps } from 'react';

// ----------------------------------------------------------------

const CheckmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="currentColor"
      d="M19.708 7.292a.999.999 0 0 1 0 1.416l-9 9a.999.999 0 0 1-1.416 0l-4-4a1.001 1.001 0 0 1 1.416-1.416L10 15.586l8.292-8.294a1 1 0 0 1 1.416 0Z"
    />
  </svg>
);
export default CheckmarkIcon;
