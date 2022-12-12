import React from "react";
import featuredImage from "./images/ethics.jpg";
import Excerpt from "./Excerpt";
import Photo from "../../../utilities/Photo";

const Template = ({ excerpt = false, seo = false }) => {
  if (seo) {
    return <></>;
  }
  if (excerpt) {
    let excerpt = <p></p>;
    let title = "";
    let categories = [];
    let slug = "";
    return (
      <Excerpt
        excerpt={excerpt}
        image={featuredImage}
        postCategories={categories}
        title={title}
        slug={slug}
      />
    );
  }
  let snippet = ``;
  return (
    <div className="container">
      <div className="feature-image-holder">
        <Photo src={featuredImage} alt="feature" />
        <pre>
          <code>{snippet}</code>
        </pre>
      </div>
      Template
    </div>
  );
};

export default Template;
