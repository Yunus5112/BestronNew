interface SectorImageGridProps {
  images: string[];
  imageHeight?: string;
  className?: string;
}

export const SectorImageGrid = ({ 
  images, 
  imageHeight = "h-[250px] md:h-[280px] lg:h-[300px]",
  className = "" 
}: SectorImageGridProps) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {images.map((image, index) => (
        <div 
          key={index}
          className={`w-full ${imageHeight} bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg`}
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={`Sector image ${index + 1}`}
        />
      ))}
    </div>
  );
};

