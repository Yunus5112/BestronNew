import { Colors, Typography } from "../lib/theme";
import logo from "../../assets/images/logo";

interface FooterBrandProps {
  description: string;
  copyright: string;
}

export const FooterBrand = ({ description, copyright }: FooterBrandProps) => {
  return (
    <div className="space-y-4 lg:space-y-6 lg:col-span-1">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div
          className="h-12 w-auto"
          dangerouslySetInnerHTML={{ __html: logo }}
          role="img"
          aria-label="Bestron Technology Logo"
        />
      </div>

      {/* Company description */}
      <p 
        className="text-[16px] leading-[1.5] max-w-lg"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.textSecondary
        }}
      >
        {description}
      </p>

      {/* Copyright */}
      <p 
        className="text-[14px] leading-[1.5] mt-8 lg:mt-16"
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.textSecondary
        }}
      >
        {copyright}
      </p>
    </div>
  );
};
