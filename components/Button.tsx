import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

export const buttonVariants = cva("rounded-lg transition-colors duration-300", {
  variants: {
    variant: {
      default: "bg-black text-white hover:bg-gray-700",
      bordered:
        "bg-transparent text-black border border-black hover:bg-black hover:text-white",
      pinkish:
        "bg-gradient-to-tr from-rose-600 to-pink-500 text-white hover:shadow-lg hover:shadow-rose-200",
      organic:
        "bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white hover:shadow-lg hover:shadow-emerald-200",
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
