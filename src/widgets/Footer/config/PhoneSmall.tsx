import { useHover } from "shared/lib/hooks/useHover";

export function PhoneSmall(props: React.SVGProps<SVGSVGElement>) {
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
      <g clipPath="url(#clip0_422_266)">
        <path
          d="M15.1231 13.9385C14.731 13.5514 14.2416 13.5514 13.852 13.9385C13.5549 14.2331 13.2577 14.5278 12.9656 14.8275C12.8857 14.9099 12.8183 14.9273 12.7209 14.8724C12.5286 14.7675 12.3238 14.6826 12.139 14.5678C11.2775 14.0259 10.5559 13.3292 9.91664 12.5451C9.59951 12.1556 9.31734 11.7386 9.12007 11.2691C9.08011 11.1742 9.0876 11.1118 9.16501 11.0344C9.46217 10.7472 9.75183 10.4526 10.044 10.1579C10.451 9.74838 10.451 9.26894 10.0415 8.85692C9.80926 8.62219 9.57703 8.39246 9.3448 8.15773C9.10508 7.91801 8.86786 7.6758 8.62564 7.43857C8.2336 7.05652 7.74417 7.05652 7.35463 7.44107C7.05498 7.73573 6.76781 8.03787 6.46317 8.32754C6.181 8.59472 6.03866 8.92184 6.0087 9.3039C5.96125 9.92567 6.11357 10.5125 6.32832 11.0843C6.76781 12.2679 7.43703 13.3192 8.24858 14.2831C9.3448 15.5866 10.6533 16.6179 12.184 17.362C12.8732 17.6966 13.5874 17.9538 14.3639 17.9963C14.8983 18.0262 15.3628 17.8914 15.7348 17.4744C15.9896 17.1897 16.2767 16.93 16.5464 16.6578C16.9459 16.2533 16.9484 15.7639 16.5514 15.3643C16.077 14.8874 15.6 14.4129 15.1231 13.9385Z"
          fill="#1C1A19"
        />
        <path
          d="M14.6463 11.9478L15.5677 11.7905C15.4229 10.944 15.0234 10.1774 14.4166 9.56811C13.7748 8.92636 12.9633 8.52183 12.0693 8.39697L11.9395 9.32339C12.6311 9.42078 13.2604 9.73291 13.7573 10.2298C14.2268 10.6993 14.5339 11.2936 14.6463 11.9478Z"
          fill="#1C1A19"
        />
        <path
          d="M16.0868 7.94273C15.0231 6.87897 13.6771 6.20726 12.1914 6L12.0615 6.92642C13.345 7.10621 14.5087 7.68803 15.4276 8.60446C16.2991 9.47594 16.8709 10.5772 17.0782 11.7882L17.9996 11.6309C17.7574 10.2276 17.0957 8.95405 16.0868 7.94273Z"
          fill="#1C1A19"
        />
      </g>
      <defs>
        <clipPath id="clip0_422_266">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
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
        <linearGradient
          id="paint1_linear_422_266"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7A375" />
          <stop offset="1" stopColor="#F9E2BA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
