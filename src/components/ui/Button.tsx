export interface ButtonProps {
  onClick?: () => void;
  label: string;
  variant?: "primary" | "secondary" | "outlined";
}

const Button = ({ label, onClick, variant = "primary" }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
