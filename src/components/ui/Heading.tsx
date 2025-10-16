import type { ReactNode, HTMLAttributes } from "react";
import { Colors, Typography } from "../lib/theme";

export type HeadingLevel = 'h1' | 'h2' | 'h3';
export type HeadingColor = keyof typeof Colors;
export type HeadingAlign = 'left' | 'center' | 'right';

interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
  children: ReactNode;
  level?: HeadingLevel;
  color?: HeadingColor;
  align?: HeadingAlign;
  className?: string;
  semibold?: boolean;
}

export const Heading = ({ 
  children,
  level = 'h2', 
  color = 'primary',
  align = 'left',
  className = '',
  semibold = true,
  ...props
}: HeadingProps) => {
  const Component = level;
  const fontWeight = semibold ? 'font-semibold' : 'font-normal';
  
  return (
    <Component
      className={`${Typography.sizes[level]} ${fontWeight} leading-[1.2] text-${align} ${className}`}
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

export default Heading;

