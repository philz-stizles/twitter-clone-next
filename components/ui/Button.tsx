import { MouseEvent } from "react";

interface ButtonProps {
    label: string;
    disabled?: boolean
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
    secondary?: boolean
    outlined?: boolean
    fullWidth?: boolean
    large?: boolean
}

const Button: React.FC<ButtonProps> = ({label, disabled, onClick, secondary, outlined, large, fullWidth}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "bg-white" : "bg-sky-500"}
        ${secondary ? "text-black" : "text-white"}
        ${secondary ? "border-black" : "border-sky-500"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${outlined ? "bg-transparent" : ""}
        ${outlined ? "border-white" : ""}
        ${outlined ? "text-white" : ""}
      `}
    >
      {label}
    </button>
  );
}

export default Button