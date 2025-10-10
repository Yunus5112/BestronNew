import { ReactNode } from "react";
import { Colors, Typography } from "../lib/theme";
import { ServiceIcon } from "./ServiceIcon";

interface ServiceCardProps {
  iconSvg: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const ServiceCard = ({ 
  iconSvg, 
  title, 
  description, 
  children,
  className = "",
  imageUrl,
  imageAlt
}: ServiceCardProps) => {
  const cardClasses = `rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6 ${className}`;

  return (
    <div className={cardClasses}>
      <ServiceIcon iconSvg={iconSvg} className="mb-4" />
      
      <h3 
        className="text-[20px] font-semibold mb-2"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {title}
      </h3>
      
      <p 
        className="text-[14px] leading-relaxed"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.textSecondary
        }}
      >
        {description}
      </p>

      {imageUrl && (
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
          <img 
            src={imageUrl} 
            className="w-full h-auto object-cover" 
            alt={imageAlt || title}
            loading="lazy"
          />
        </div>
      )}

      {children}
    </div>
  );
};
