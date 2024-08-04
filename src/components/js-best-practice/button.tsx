import React from "react";
import "./button-styles.css"; // Import CSS styles

// Define the types for props
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary"; // Optional prop with specific values
  onClick: () => void;
  disabled?: boolean; // Optional prop with a default value
}

/**
 * Button component for reusable button elements.
 *
 * @param {ButtonProps} props - The properties object for the Button component.
 * @returns {JSX.Element} - The rendered Button component.
 */
const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
  disabled = false,
}) => {
  const className = `button ${variant}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
