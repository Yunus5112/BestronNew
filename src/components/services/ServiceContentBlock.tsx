import type { ReactNode } from "react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

interface ServiceContentBlockProps {
  title: string;
  intro?: string;
  children: ReactNode;
  conclusion?: string;
  image?: string;
  imagePosition?: "left" | "right";
  imageHeight?: string;
  logoSvg?: string;
  className?: string;
}

export const ServiceContentBlock = ({ 
  title,
  intro,
  children,
  conclusion,
  image,
  imagePosition = "right",
  imageHeight = "h-[400px] md:h-[500px] lg:h-[600px]",
  logoSvg,
  className = ""
}: ServiceContentBlockProps) => {
  const contentBlock = (
    <div className={`space-y-6 ${className}`}>
      <Heading level="h2">{title}</Heading>
      {intro && <Text>{intro}</Text>}
      {children}
      {conclusion && <Text>{conclusion}</Text>}
    </div>
  );

  const imageBlock = image ? (
    <div className="relative">
      <div 
        className={`w-full ${imageHeight} bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg`}
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label="Service illustration"
      />
    </div>
  ) : logoSvg ? (
    <div className="relative">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
        <div 
          className="w-full h-auto flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: logoSvg }}
          role="img"
          aria-label="Support organization logos"
        />
      </div>
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

