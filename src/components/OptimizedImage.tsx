import { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackFormat?: "png" | "jpg";
}

/**
 * Optimized image component that uses WebP format with fallback
 * Automatically converts .png and .jpg extensions to .webp
 */
export const OptimizedImage = ({ 
  src, 
  alt, 
  fallbackFormat,
  ...props 
}: OptimizedImageProps) => {
  // Convert image path to WebP if it's a static asset
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('/images/')) {
      return originalSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    }
    return originalSrc;
  };

  const webpSrc = getWebPSrc(src);
  const shouldUseWebP = webpSrc !== src;

  if (!shouldUseWebP) {
    // If not a convertible image, just return a regular img tag
    return <img src={src} alt={alt} {...props} />;
  }

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} {...props} />
    </picture>
  );
};
