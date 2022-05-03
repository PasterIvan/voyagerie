import classNames from "classnames";
import React from "react";

type PropsType = {
  isHovered?: boolean;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

export const ChatIcon = React.forwardRef<SVGSVGElement, PropsType>(
  ({ className, isHovered, ...props }, ref) => {
    return (
      <svg
        className={classNames("transition-all duration-500", className)}
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <linearGradient id="circleGradient1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FAE4BC" />
          <stop offset="100%" stopColor="#D6A072" />
        </linearGradient>
        <linearGradient id="circleGradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#D6A072" />
          <stop offset="100%" stopColor="#FAE4BC" />
        </linearGradient>
        <circle
          fill={isHovered ? "black" : "url(#circleGradient1)"}
          cx="28"
          cy="28"
          r="28"
        />
        <g>
          <path
            d="M36.0122 29.3766V19.7636C36.0122 18.2438 34.8178 17 33.3583 17H17.6539C16.1944 17 15 18.2438 15 19.7636V29.38C15 30.893 16.1813 32.13 17.631 32.1436L17.2122 34.7641C17.1663 35.0401 17.451 35.2446 17.6834 35.1049L22.6117 32.1436H33.3583C34.8178 32.1436 36.0122 30.8964 36.0122 29.3766Z"
            fill={isHovered ? "white" : "#1C1A19"}
            fillOpacity={isHovered ? undefined : "0.5"}
          />
          <path
            d="M39.0837 23.6H37.7966V29.2221C37.7966 31.685 35.8189 33.6892 33.3888 33.6892H23.0815V34.1037C23.0815 35.3946 24.124 36.451 25.3977 36.451H34.7631L39.0569 38.9615C39.2614 39.0804 39.5061 38.9071 39.4692 38.6727L39.1038 36.4476C40.3675 36.4374 41.3999 35.3878 41.3999 34.1037V25.9473C41.3999 24.6565 40.3575 23.6 39.0837 23.6Z"
            fill={isHovered ? "white" : "#1C1A19"}
            fillOpacity={isHovered ? undefined : "0.5"}
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_408_245"
            x1="48"
            y1="0"
            x2="48"
            y2="96"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FAE4BC" />
            <stop offset="1" stopColor="#D6A072" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
