import React from "react";

const Photo = ({ src, type = "image/webp", fallback, alt, ...delegated }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={src} alt={alt} {...delegated} layout="responsive" />
    </picture>
  );
};

export default Photo;
