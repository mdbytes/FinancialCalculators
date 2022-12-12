import React, { Component } from "react";
import serviceImage from "../../images/home/celtic-logo.png";
import Photo from "../../utilities/Photo";

class CalculatorsIntro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="overview calculator-intro">
          <h3>Financial Calculators</h3>
          <div className="row">
            <div className="col-md-7">
              <p>
                Welcome to our financial calculators. These calculators were
                constructed by Martin for two reasons; (1) whether it be to buy
                a home, retire, or meet some other financial need, we all have
                them, and (2) these calculators provide good examples of user
                interaction.
              </p>
              <p>
                To obtain the best user experience possible, all of our
                applications use the&nbsp;
                <a href="https://reactjs.org/">React Framework</a>. You will
                notice key advantages for the user with React. First, the
                <b>whole page does not need to refresh</b>. Next, because the
                work is all being done without refreshing a page, the{" "}
                <b>response is lightning fast</b>.
              </p>
              <p>
                {" "}
                No longer spending what seems like eons watching a wheel spin.
                Last, and perhaps most importantly for your website, because the{" "}
                <b>React Framework is fast and efficient</b>, your clients and
                prospects get to see more of what you do.
              </p>
            </div>
            <div className="col-md-5 stool-holder">
              <Photo
                src={serviceImage}
                className="img-fluid"
                alt="responsive services"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CalculatorsIntro;
