import React, { Component } from "react";
import Calculators from "./Calculators";

export class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <Calculators />
      </div>
    );
  }
}

export default HomePage;
