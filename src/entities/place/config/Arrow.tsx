export function ArrowIcon({
  isHovered,
  className,
  circleClassName,
  pathClassName,
}: {
  isHovered: boolean;
  className?: string;
  circleClassName?: string;
  pathClassName?: string;
}) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="28"
        cy="28"
        r="28"
        className={circleClassName}
        stroke="rgba(249, 226, 186, 0.25)"
        fill={isHovered ? "url(#paint0_linear_408_73)" : "none"}
      />
      <path
        d="M20.4575 20.4575L20.4575 23.1162L30.9887 23.1257L19.5147 34.5997L21.4003 36.4853L32.8743 25.0113L32.8837 35.5425L35.5425 35.5425L35.5425 20.4575L20.4575 20.4575Z"
        className={pathClassName}
        fill="currentColor"
      />
    </svg>
  );
}
