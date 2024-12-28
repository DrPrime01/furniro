export default function Hamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 8H17M7 12H17M7 16H17"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
