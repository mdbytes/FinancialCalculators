import React from "react";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Photo from "../../../utilities/Photo";
import categories from "../data/categories";

const Excerpt = ({ title, excerpt, image, postCategories, slug }) => {
  const linkUrl = `/gallery/web-apps/money-matters/calculator/${slug}`;

  return (
    <>
      <div className="col-lg-6 col-sm-12 col-xs-12 services-column">
        <div className="services__content">
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
            <Link href={linkUrl}>
              <a className="rounded-pill btn">
                Try It Out
                <span>
                  <i className="fa-solid fa-forward"></i>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-xs-12  services-column">
        <div className="services__pic">
          {image ? (
            <AnimationOnScroll animateIn="animate__fadeInDownBig">
              <Link href={linkUrl}>
                <a style={{ textDecoration: "none", border: "none" }}>
                  <Photo src={image} alt="UI Design" className="img-fluid" />
                </a>
              </Link>
            </AnimationOnScroll>
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
