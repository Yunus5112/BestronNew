import { ReactNode } from "react";
import { Colors, Typography } from "../lib/theme";

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
      <h2 
        className={`${Typography.sizes.h2} font-semibold`}
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {title}
      </h2>

      {intro && (
        <p 
          className={`${Typography.sizes.body} leading-[1.5]`}
          style={{ 
            fontFamily: Typography.fontFamily,
            color: Colors.primary
          }}
        >
          {intro}
        </p>
      )}

      {children}

      {conclusion && (
        <p 
          className={`${Typography.sizes.body} leading-[1.5]`}
          style={{ 
            fontFamily: Typography.fontFamily,
            color: Colors.primary
          }}
        >
          {conclusion}
        </p>
      )}
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

