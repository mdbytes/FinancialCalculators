import React, { useEffect, useState } from "react";
import { allPosts } from "../posts/posts";
import reactIcon from "../../assets/images/icons/react.svg";
import Photo from "../utilities/Photo";

const CalculatorsContent = () => {
  const [posts, setPosts] = useState([]);
  const [havePosts, setHavePosts] = useState(false);

  useEffect(() => {
    setPosts(allPosts);
    setHavePosts(true);
  }, []);

  if (havePosts) {
    return (
      <div id="calculators-content" className="calculators-content">
        {posts.map((post) => (
          <div className="row calculator-excerpt" key={post.id}>
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
