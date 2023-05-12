import { FC } from "react";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

export const buttonVariants = cva("transition-colors duration-300", {
  variants: {
    variant: {
      default:
        "bg-salmon text-slate border border-transparent hover:bg-darksalmon hover:border-salmon hover:text-salmon",
    },
    size: {
      default: "py-3 px-6",
      full: "py-3 inline-block w-full flex justify-center",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  placeholder: string;
}

const Button: FC<ButtonProps> = ({ href, placeholder, variant, size }) => {
  return (
    <Link href={href} className={clsx(buttonVariants({ variant, size }))}>
      {placeholder}
    </Link>
  );
};

export default Button;
