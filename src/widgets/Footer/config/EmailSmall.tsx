import { useHover } from "shared/lib/hooks/useHover";

export function EmailSmall(props: React.SVGProps<SVGSVGElement>) {
  const [ref, isHovered] = useHover();
  return (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="24"
        height="24"
        rx="12"
        fill={isHovered ? "#EFCFA5" : "url(#paint0_linear_422_266)"}
      />
      <path
        d="M16 10L12 12.5L8 10V9L12 11.5L16 9V10ZM16 8H8C7.445 8 7 8.445 7 9V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16H16C16.2652 16 16.5196 15.8946 16.7071 15.7071C16.8946 15.5196 17 15.2652 17 15V9C17 8.73478 16.8946 8.48043 16.7071 8.29289C16.5196 8.10536 16.2652 8 16 8Z"
        fill="#1C1A19"
      />
      <defs>
        <linearGradient
          id="paint0_linear_422_266"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9E2BA" />
          <stop offset="1" stopColor="#D7A375" />
        </linearGradient>
      </defs>
    </svg>
  );
}
