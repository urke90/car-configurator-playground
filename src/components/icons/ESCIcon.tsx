import type { SVGProps } from 'react';

// ----------------------------------------------------------------

const ESCIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path stroke="#1C1C1C" strokeLinecap="square" strokeLinejoin="round" d="M15 5 5 15M5 5l10 10" />
  </svg>
);
export default ESCIcon;
