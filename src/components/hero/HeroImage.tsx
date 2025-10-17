interface HeroImageProps {
  imageSvg: string;
  className?: string;
}

export const HeroImage = ({ imageSvg, className = "" }: HeroImageProps) => {
  return (
    <div className={`order-1 lg:order-2 flex justify-center lg:justify-end w-full ${className}`}>
      <div 
        className="w-full h-auto max-w-[90%] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px]"
        dangerouslySetInnerHTML={{ __html: imageSvg }}
        role="img"
        aria-label="Hero illustration"
      />
    </div>
  );
};
