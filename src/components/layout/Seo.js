import React from "react";
import Head from "next/head";

const Seo = ({ title, description, image, article }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
};

export default Seo;
