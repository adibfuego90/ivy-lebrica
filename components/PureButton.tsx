import { VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { FC } from "react";
import { buttonVariants } from "./Button";

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  placeholder: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const PureButton: FC<ButtonProps> = ({
  placeholder,
  variant,
  size,
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(buttonVariants({ variant, size }))}
    >
      {placeholder}
    </button>
  );
};

export default PureButton;
