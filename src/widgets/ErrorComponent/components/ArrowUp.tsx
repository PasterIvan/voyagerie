import React from "react";
import { useHover } from "shared/lib/hooks/useHover";

export const ArrowUp = React.forwardRef<
  SVGSVGElement,
  {
    className?: string;
    canHover?: boolean;
    isLight: boolean;
  } & React.SVGProps<SVGSVGElement>
>(function ArrowDown(
  { className, canHover = true, isLight, ...props },
  forwardedRef
) {
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
      <rect
        x="57.5"
        y="57.5"
        width="57"
        height="57"
        rx="28.5"
        transform="rotate(-180 57.5 57.5)"
        stroke={isLight ? "black" : "white"}
        strokeOpacity="0.2"
        fill={canHover && isHovered ? (isLight ? "black" : "white") : "none"}
      />
      <path
        d="M18.3335 28.9998L20.2135 30.8798L27.6668 23.4398V39.6665H30.3335V23.4398L37.7868 30.8798L39.6668 28.9998L29.0002 18.3332L18.3335 28.9998Z"
        fill={
          canHover && isHovered
            ? isLight
              ? "white"
              : "black"
            : isLight
            ? "black"
            : "white"
        }
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
