interface WhyUsImageGridProps {
  images: Array<{
    src: string;
    height: string;
    alt: string;
  }>;
  className?: string;
}

export const WhyUsImageGrid = ({ images, className = "" }: WhyUsImageGridProps) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {images.map((image, index) => (
        <div 
          key={index}
          className={`w-full ${image.height} bg-cover bg-center bg-no-repeat rounded-2xl`}
          style={{ backgroundImage: `url(${image.src})` }}
          role="img"
          aria-label={image.alt}
        />
      ))}
    </div>
  );
};
