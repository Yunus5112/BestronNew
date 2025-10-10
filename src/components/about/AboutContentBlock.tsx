import { ReactNode } from "react";
import { Colors, Typography } from "../lib/theme";

interface AboutContentBlockProps {
  children: ReactNode;
  image?: string;
  imagePosition?: "left" | "right";
  imageHeight?: string;
  className?: string;
}

export const AboutContentBlock = ({ 
  children,
  image,
  imagePosition = "right",
  imageHeight = "h-[500px] md:h-[550px] lg:h-[600px]",
  className = ""
}: AboutContentBlockProps) => {
  const imageBlock = image ? (
    <div className="relative">
      <div 
        className={`w-full ${imageHeight} bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg`}
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label="About illustration"
      />
    </div>
  ) : null;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start ${className}`}>
      {imagePosition === "left" && imageBlock}
      <div className="space-y-6">
        {children}
      </div>
      {imagePosition === "right" && imageBlock}
    </div>
  );
};
