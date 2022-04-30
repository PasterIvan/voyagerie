import React from "react";

type PropsType = {
  isHovered?: boolean;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

export const ChatIcon = React.forwardRef<SVGSVGElement, PropsType>(
  ({ className, isHovered, ...props }, ref) => {
    return (
      <svg
        className={className}
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <linearGradient id="circleGradient1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#FAE4BC" />
          <stop offset="100%" stop-color="#D6A072" />
        </linearGradient>
        <linearGradient id="circleGradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#D6A072" />
          <stop offset="100%" stop-color="#FAE4BC" />
        </linearGradient>
        <circle
          fill={isHovered ? "url(#circleGradient2)" : "url(#circleGradient1)"}
          cx="48"
          cy="48"
          r="48"
        />
        <g opacity="0.5">
          <path
            d="M62.2041 50.5029V33.0247C62.2041 30.2614 60.0324 28 57.3787 28H28.8253C26.1717 28 24 30.2614 24 33.0247V50.5091C24 53.26 26.1479 55.509 28.7837 55.5338L28.0221 60.2983C27.9388 60.8002 28.4564 61.1719 28.8789 60.9179L37.8394 55.5338H57.3787C60.0324 55.5338 62.2041 53.2662 62.2041 50.5029Z"
            fill="#180F0B"
          />
          <path
            d="M67.7887 40H65.4484V50.222C65.4484 54.7 61.8527 58.3441 57.4343 58.3441H38.6938V59.0976C38.6938 61.4447 40.5892 63.3656 42.9051 63.3656H59.933L67.74 67.93C68.1117 68.1461 68.5566 67.8311 68.4896 67.405L67.8253 63.3594C70.1229 63.3409 72 61.4323 72 59.0976V44.2679C72 41.9209 70.1046 40 67.7887 40Z"
            fill="#180F0B"
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
            <stop stop-color="#FAE4BC" />
            <stop offset="1" stop-color="#D6A072" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
