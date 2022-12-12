import React from "react";
import CalculatorsIntro from "./CalculatorsIntro";
import CalculatorsContent from "./CalculatorsContent";

const Calculators = () => {
  return (
    <div className="container calculators">
      <div className="app content">
        <CalculatorsIntro />
        <hr />
        <CalculatorsContent />
      </div>
    </div>
  );
};

export default Calculators;
