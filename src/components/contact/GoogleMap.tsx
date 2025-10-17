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

  // Bestron Technology Location - STAR PORT RESIDENCE, Pendik/İstanbul
  // Address: Yenişehir Mah. Sümbül Sok. STAR PORT RESIDENCE No: 10/104, 34912 Pendik/İstanbul
  // Google Maps Share Link: https://maps.app.goo.gl/BvrGQRKtaVH18nvt9
  const locationName = "Bestron Technology";
  const address = "Yenişehir Mah. Sümbül Sok. STAR PORT RESIDENCE No: 10/104, 34912 Pendik/İstanbul";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(locationName + ", " + address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

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
      <div className={`${height} ${className} flex items-center justify-center bg-gray-100`}>
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
    <div className={`w-full ${height} overflow-hidden relative ${className}`}>
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
