export interface ButtonProps {
  onClick?: () => void;
  label: string;
  variant?: "primary" | "secondary" | "outlined";
}
