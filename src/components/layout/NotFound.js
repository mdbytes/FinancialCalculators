import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NotFound extends Component {
  componentDidMount() {
    setTimeout(function () {
      window.location.replace("/");
    }, 100);
  }
  render() {
    return (
      <div
        style={{
          height: "100vh",
          marginTop: 0,
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,.9)",
        }}
        id="locating-post"
      >
        <h1>404: Page Not Found</h1>
        <br />
        <br />
        <p style={{ fontSize: "2rem" }}>
          If not redirected, click for &nbsp;&nbsp;<Link to="/">Home Page</Link>
        </p>
      </div>
    );
  }
}

export default NotFound;
