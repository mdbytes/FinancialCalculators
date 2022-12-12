import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Photo from "../../utilities/Photo";
import reactIcon from "../../../assets/images/icons/react.svg";
import { allPosts } from "../posts";

const Calculator = ({ slug }) => {
  const [post, setPost] = useState();

  useEffect(() => {
    let thisPost = allPosts.filter((post) => post.slug === slug)[0];
    thisPost.datePosted = new Date(thisPost.date).toLocaleDateString();
    setPost(thisPost);
  }, [slug]);

  if (post) {
    return (
      <div className="container-fluid calculator">
        <div className="app content container-fluid">
          <div className="app container post-display">
            <section id="post" className="post">
              <div className="container post-text" id={post.id}>
                <div class="post-title">
                  <h3>{post.title.rendered}</h3>
                  <h5>By: Martin Dwyer, {post.datePosted}</h5>
                </div>
                <div class="calculator-content">{post.contentJsx}</div>
              </div>
            </section>
            <div class="calculator-bottom">
              <p>
                For inquiries or discussion related to this resource, please
                &nbsp;
                <NavLink to="/contact">contact Martin</NavLink>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        <div id="page-top" className="page-top">
          <h1 className="animate__animated animate__zoomInDown">
            Resource&nbsp;<i className="fa-solid fa-file-code"></i>
          </h1>
        </div>
        <div className="container">
          <section id="post" className="post">
            <div className="container" style={{ minHeight: "100vh" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Photo
                  src={reactIcon}
                  alt="waiting"
                  className="loading-animation filter-logo-green"
                />
                <h3>Loading</h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
};

export default Calculator;
