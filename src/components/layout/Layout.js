import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      className="container-fluid"
      style={{ paddingLeft: 0, paddingRight: 0, paddingTop: "50px" }}
    >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
