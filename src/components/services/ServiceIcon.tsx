interface ServiceIconProps {
  iconSvg: string;
  className?: string;
}

export const ServiceIcon = ({ iconSvg, className = "" }: ServiceIconProps) => {
  return (
    <div className={`h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center ${className}`}>
      <div 
        className="w-5 h-5 flex items-center justify-center"
        dangerouslySetInnerHTML={{ __html: iconSvg }}
        role="img"
        aria-label="Service icon"
      />
    </div>
  );
};
