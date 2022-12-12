import React, { useEffect, useState } from "react";
import Link from "next/link";
import Seo from "../../layout/Seo";
import Photo from "../../utilities/Photo";
import reactIcon from "../../images/react.svg";
import { allPosts } from "./data/posts";

const Calculator = ({ slug }) => {
  const [post, setPost] = useState();

  useEffect(() => {
    let thisPost = allPosts.filter((post) => post.slug === slug)[0];
    thisPost.datePosted = new Date(thisPost.date).toLocaleDateString();
    setPost(thisPost);
  }, [slug]);

  if (post) {
    return (
      <div className="app services container-fluid">
        <Seo title={post.title.rendered} description={post.seo} />
        <div id="page-top" className="page-top">
          <h1 className="animate__animated animate__zoomInDown">
            Calculator&nbsp;<i className="fa-solid fa-file-code"></i>
          </h1>
        </div>
        <div className="app content container-fluid">
          <div className="app container post-display">
            <div id="page-indicator">Services</div>
            <section id="post" className="post">
              <div
                className="container post-text"
                id={post.id}
                style={{ marginTop: 75 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    className="post-title"
                    style={{
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: "2.5rem",
                    }}
                  >
                    {post.title.rendered}
                  </h3>
                  <h5>By: Martin Dwyer, {post.datePosted}</h5>
                  <div
                    id="featured-image-container"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2rem",
                      width: "100%",
                    }}
                  >
                    {post.featuredImageUrl ? (
                      <Photo
                        src={post.featuredImageUrl}
                        alt="intro view"
                        style={{
                          width: "60%",
                          maxWidth: "600px",
                          minWidth: "300px",
                          borderRadius: "8px",
                          marginBottom: "2rem",
                        }}
                      />
                    ) : null}
                  </div>
                </div>

                {post.contentJsx}
              </div>
            </section>
            <div
              style={{
                textAlign: "center",
                marginTop: "3rem",
                fontWeight: 600,
                fontSize: "1.5rem",
              }}
            >
              <p>
                For inquiries or discussion related to this resource, please
                &nbsp;
                <Link href="/contact">contact Martin</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="services container-fluid">
        <Seo title="Services | MD Web Tech" />
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
