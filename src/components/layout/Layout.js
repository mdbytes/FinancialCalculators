import React from "react";
import NavBar from "./NavBar";
import Navbar from "./NavbarDD";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
