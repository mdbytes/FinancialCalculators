import React from "react";
import { NavLink } from "react-router-dom";
import Photo from "../../utilities/Photo";
import categories from "../categories";

const Excerpt = ({ title, excerpt, image, postCategories, slug }) => {
  const linkUrl = `/calculator/${slug}`;

  return (
    <>
      <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="">
          <h3 className="display-3--title">{title}</h3>
          <span className="lh-lg">{excerpt}</span>

          <div className="categories">
            <span>
              <b>Topics:&nbsp;</b>
              {"  "}
            </span>
            <span>
              {postCategories.map((c, index) => {
                let catName = categories.filter((obj) => obj.id === c)[0].name;
                let catString;
                if (postCategories.length === 1) {
                  catString = catName + ".";
                } else if (index === postCategories.length - 1) {
                  catString = "and " + catName + ".";
                } else {
                  catString = catName + ", ";
                }
                return <span key={c}>{catString}</span>;
              })}
            </span>
          </div>
          <div className="learn-btn">
            <NavLink to={linkUrl} className="rounded-pill btn">
              Calculator
              <span>
                <i className="fa-solid fa-forward"></i>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="services__pic">
          {image ? (
            <NavLink to={linkUrl}>
              <span style={{ textDecoration: "none", border: "none" }}>
                <Photo
                  src={image}
                  alt="UI Design"
                  className="img-fluid animate__animated animate__zoomIn"
                />
              </span>
            </NavLink>
          ) : (
            <div>
              <h4>No featured image</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Excerpt;
