import React, { Component } from "react";
import Seo from "../../layout/Seo";
import CalculatorsIntro from "./CalculatorsIntro";
import CalculatorsContent from "./CalculatorsContent";

const Calculators = () => {
  return (
    <div className="app services container-fluid">
      <Seo title="Calculators | MD Web Tech" />
      <div id="page-top" className="page-top">
        <h1 className="animate__animated animate__zoomInDown">
          Money Matters&nbsp;<i className="fa-solid fa-file-code"></i>
        </h1>
      </div>
      <div className="app content container-fluid">
        <div className="app container">
          <div className="container">
            <div id="page-indicator">Services</div>
            <CalculatorsIntro />
            <hr />
            <CalculatorsContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculators;
