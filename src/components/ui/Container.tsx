import type { PropsWithChildren, HTMLAttributes } from "react";
import { cn } from "../lib/cn";

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={cn("container-page", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;


