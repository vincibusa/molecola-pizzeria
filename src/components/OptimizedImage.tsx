import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIiAvPjwvc3ZnPg=='
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(placeholder);

  useEffect(() => {
    // Carica l'immagine solo se è nel viewport o vicina
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      console.error(`Errore nel caricamento dell'immagine: ${src}`);
    };
  }, [src]);

  // Dimensioni predefinite per layout stabile
  const imgStyle = {
    opacity: isLoaded ? 1 : 0.5,
    transition: 'opacity 0.3s',
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      style={imgStyle}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default OptimizedImage; 