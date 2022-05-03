import React from "react";
import { useHover } from "shared/lib/hooks/useHover";

export const ArrowDown = React.forwardRef<
  SVGSVGElement,
  { className?: string } & React.SVGProps<SVGSVGElement>
>(function ArrowDown({ className, ...props }, forwardedRef) {
  const [hoverRef, isHovered] = useHover();
  return (
    <svg
      ref={(ref) => {
        hoverRef.current = ref;
        if (typeof forwardedRef === "function") {
          forwardedRef(ref);
        } else {
          if (forwardedRef) {
            forwardedRef.current = ref;
          }
        }
      }}
      className={className}
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        fill={isHovered ? "url(#paint0_linear_408_73)" : "none"}
        cx="28"
        cy="28"
        r="28"
        stroke="white"
        strokeOpacity="0.2"
      />
      <path
        d="M39.6665 29L37.7865 27.12L30.3332 34.56V18.3333H27.6665V34.56L20.2132 27.12L18.3332 29L28.9998 39.6666L39.6665 29Z"
        fill={isHovered ? "#826C55" : "white"}
      />
      <defs>
        <linearGradient
          id="paint0_linear_408_73"
          x1="0"
          y1="0"
          x2="56"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAE4BC" />
          <stop offset="1" stopColor="#D6A072" />
        </linearGradient>
      </defs>
    </svg>
  );
});
