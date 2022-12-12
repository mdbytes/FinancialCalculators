import React, { useEffect, useState } from "react";
import { allPosts } from "./data/posts";
import reactIcon from "../../images/react.svg";
import Photo from "../../utilities/Photo";

const CalculatorsContent = () => {
  const [posts, setPosts] = useState([]);
  const [havePosts, setHavePosts] = useState(false);

  useEffect(() => {
    setPosts(allPosts);
    setHavePosts(true);
  }, []);

  if (havePosts) {
    return (
      <div id="adventures" className="service-objects">
        {posts.map((post) => (
          <div className="row service-item-row" key={post.id}>
            {post.excerptJsx}
          </div>
        ))}
      </div>
    );
  } else {
    return (
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
    );
  }
};

export default CalculatorsContent;
