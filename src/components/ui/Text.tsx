import type { ReactNode, HTMLAttributes } from "react";
import { Colors, Typography } from "../lib/theme";

export type TextVariant = 'body' | 'bodyLarge' | 'label';
export type TextColor = keyof typeof Colors;
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

interface TextProps extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'> {
  children: ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  align?: TextAlign;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export const Text = ({ 
  children,
  variant = 'body', 
  color = 'primary',
  align = 'left',
  className = '',
  as: Component = 'p',
  ...props
}: TextProps) => {
  return (
    <Component
      className={`${Typography.sizes[variant]} leading-[1.5] text-${align} ${className}`}
      style={{ 
        fontFamily: Typography.fontFamily,
        color: Colors[color]
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;

