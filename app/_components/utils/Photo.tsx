import React from 'react';

type PhotoProp = {
  src: string;
  className?: string;
  type?: string;
  fallback?: string;
  alt?: string;
};

const Photo = ({
  src,
  className,
  type = 'image/webp',
  fallback,
  alt,
  ...delegated
}: PhotoProp) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={src} alt={alt} {...delegated} className={className} />
    </picture>
  );
};

export default Photo;
