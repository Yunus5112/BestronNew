import { useState, useCallback } from 'react';

interface GoogleMapProps {
  className?: string;
  height?: string;
  loading?: 'eager' | 'lazy';
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const GoogleMap = ({
  className = "",
  height = "h-[400px] lg:h-[500px]",
  loading = 'lazy',
  onLoad,
  onError
}: GoogleMapProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Configuration - could be moved to environment variables
  const mapConfig = {
    coordinates: "29.2345678,40.8765432",
    zoom: "15",
    location: "STAR PORT RESIDENCE",
    language: "tr"
  };

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1234567890123!2d${mapConfig.coordinates.split(',')[0]}!3d${mapConfig.coordinates.split(',')[1]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(mapConfig.location)}!5e0!3m2!1s${mapConfig.language}!2s${mapConfig.language}!4v1234567890123!5m2!1s${mapConfig.language}!2s${mapConfig.language}`;

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.(new Error('Failed to load Google Maps'));
  }, [onError]);

  if (hasError) {
    return (
      <div className={`${height} ${className} flex items-center justify-center bg-gray-100 rounded-2xl`}>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-600">Harita yüklenemedi</p>
          <button 
            onClick={() => setHasError(false)}
            className="mt-2 text-primary hover:underline"
          >
            Tekrar dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${height} rounded-2xl overflow-hidden relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 mx-auto mb-4 border-2 border-primary border-t-transparent rounded-full"></div>
            <p className="text-gray-600">Harita yükleniyor...</p>
          </div>
        </div>
      )}
      
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading={loading}
        referrerPolicy="no-referrer-when-downgrade"
        title="Bestron Technology Location"
        onLoad={handleLoad}
        onError={handleError}
        aria-label="Bestron Technology konum haritası"
      />
    </div>
  );
};
