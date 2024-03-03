import React from "react";

const Star = () => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_610_5)" filter="url(#filter0_d_610_5)">
        <path
          d="M18.3891 1.00339C19.0651 -0.334462 20.9349 -0.334462 21.6109 1.00339L25.9157 9.52273C26.0882 9.86412 26.36 10.1423 26.6938 10.3188L35.0194 14.7237C36.3269 15.4155 36.3269 17.3287 35.0194 18.0204L26.6938 22.4253C26.36 22.6018 26.0882 22.88 25.9157 23.2215L21.6109 31.7407C20.9349 33.0787 19.0651 33.0787 18.3891 31.7407L14.0843 23.2215C13.9118 22.88 13.6399 22.6018 13.3063 22.4253L4.98058 18.0204C3.67314 17.3287 3.67314 15.4155 4.98058 14.7237L13.3063 10.3188C13.6399 10.1423 13.9118 9.86412 14.0843 9.52273L18.3891 1.00339Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_610_5"
          x="0"
          y="0"
          width="40"
          height="40.7442"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_610_5"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_610_5"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_610_5">
          <rect
            width="32"
            height="32.7442"
            fill="white"
            transform="translate(4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Star;
