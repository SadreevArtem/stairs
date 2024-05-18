import React from "react";

type Props = {
  className?: string;
};

export const SocialTg: React.FC<Props> = ({ className = "" }) => (
  <svg
    className={className}
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.1831 2.95331C13.3479 2.88397 13.5282 2.86006 13.7053 2.88405C13.8825 2.90805 14.0499 2.97909 14.1903 3.08977C14.3306 3.20044 14.4387 3.34672 14.5034 3.51337C14.568 3.68001 14.5868 3.86094 14.5578 4.03731L13.0458 13.2086C12.8991 14.0933 11.9285 14.6006 11.1171 14.16C10.4385 13.7913 9.43047 13.2233 8.5238 12.6306C8.07047 12.334 6.6818 11.384 6.85247 10.708C6.99913 10.13 9.33247 7.95798 10.6658 6.66664C11.1891 6.15931 10.9505 5.86664 10.3325 6.33331C8.79713 7.49198 6.3338 9.25398 5.51913 9.74998C4.80047 10.1873 4.4258 10.262 3.9778 10.1873C3.16047 10.0513 2.40247 9.84064 1.7838 9.58398C0.9478 9.23731 0.988467 8.08798 1.78313 7.75331L13.1831 2.95331Z'
      fill='currentColor'
    />
  </svg>
);