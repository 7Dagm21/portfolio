import type { ButtonProps } from "@/types";

const Button = ({ label, onClick, variant = "primary" }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
