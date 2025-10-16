import type { ReactNode } from "react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

interface SectorContentBlockProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  image?: string;
  imagePosition?: "left" | "right";
}

export const SectorContentBlock = ({ 
  title, 
  subtitle, 
  children, 
  image,
  imagePosition = "right" 
}: SectorContentBlockProps) => {
  const contentBlock = (
    <div className="space-y-6 md:space-y-8">
      {title && <Heading level="h2">{title}</Heading>}
      {subtitle && <Text>{subtitle}</Text>}
      <div className="space-y-6 md:space-y-8">
        {children}
      </div>
    </div>
  );

  const imageBlock = image ? (
    <div className="relative">
      <div 
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label="Sector illustration"
      />
    </div>
  ) : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
      {imagePosition === "left" && imageBlock}
      {contentBlock}
      {imagePosition === "right" && imageBlock}
    </div>
  );
};

