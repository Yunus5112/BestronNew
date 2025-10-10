import { Colors, Typography } from "../lib/theme";

interface SpecialServiceCardProps {
  iconSvg: string;
  title: string;
  description: string;
  logoSvg: string;
  className?: string;
}

export const SpecialServiceCard = ({ 
  iconSvg, 
  title, 
  description, 
  logoSvg,
  className = "" 
}: SpecialServiceCardProps) => {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6 lg:col-span-2 flex flex-col lg:flex-row items-center justify-between gap-6 ${className}`}>
      <div className="flex-1">
        <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
          <div 
            className="h-5 w-5 -translate-x-3 -translate-y-3"
            dangerouslySetInnerHTML={{ __html: iconSvg }}
            role="img"
            aria-label="Service icon"
          />
        </div>
        
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
      </div>
      
      <div className="rounded-2xl bg-white/80 flex items-center justify-center p-6 min-w-[180px]">
        <div 
          className="h-24 w-auto -translate-y-15"
          dangerouslySetInnerHTML={{ __html: logoSvg }}
          role="img"
          aria-label="Organization logo"
        />
      </div>
    </div>
  );
};
