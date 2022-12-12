import React from "react";

const OutsideLink = ({ url, text }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
};

export default OutsideLink;
