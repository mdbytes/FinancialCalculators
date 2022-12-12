import React from "react";
import Helmet from "react-helmet";

const Seo = ({ title, description, image, article }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {description ? (
          <meta name="description" content={description} />
        ) : (
          <meta
            name="description"
            content="MD Web Technologies, where we build high performance websites and web applications to meet your goals."
          />
        )}
      </Helmet>
    </>
  );
};

export default Seo;
