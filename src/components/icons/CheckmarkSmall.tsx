import type { SVGProps } from 'react';

// ----------------------------------------------------------------

const CheckmarkSmallIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M13.05 3.928a1.5 1.5 0 0 1 .022 2.121l-6.617 6.762-3.587-4.124a1.5 1.5 0 1 1 2.264-1.969l1.453 1.67 4.343-4.437a1.5 1.5 0 0 1 2.121-.023Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CheckmarkSmallIcon;
