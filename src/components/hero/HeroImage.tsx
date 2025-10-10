interface HeroImageProps {
  imageSvg: string;
  className?: string;
}

export const HeroImage = ({ imageSvg, className = "" }: HeroImageProps) => {
  return (
    <div className={`order-1 lg:order-2 justify-self-center ${className}`}>
      <div 
        className="w-full h-auto max-w-[480px] sm:max-w-[520px] lg:max-w-[560px]"
        dangerouslySetInnerHTML={{ __html: imageSvg }}
        role="img"
        aria-label="Hero illustration"
      />
    </div>
  );
};
