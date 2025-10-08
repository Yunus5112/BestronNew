import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../lib/cn";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
    fullWidth?: boolean;
  }
>;

export const Button = ({
  children,
  className,
  variant = "primary",
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed gap-2";
  const sizes = "h-12 px-6 text-base";
  const variants = {
    primary:
      "bg-blue-900 text-white hover:bg-blue-800 focus-visible:ring-blue-600 ring-offset-white",
    secondary:
      "bg-white text-blue-900 border border-blue-100 hover:bg-blue-50 focus-visible:ring-blue-600",
    ghost: "bg-transparent text-blue-900 hover:bg-blue-50",
  } as const;

  return (
    <button
      className={cn(base, sizes, variants[variant], fullWidth && "w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;


