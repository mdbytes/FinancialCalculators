import React, { Component } from "react";
import ContactForm from "./ContactForm";

class Contact extends Component {
  render() {
    return (
      <div>
        <section id="contact" className="get-started container-fluid">
          <div className="container contact-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="cta-info w-100">
                  <h3 className="display-4">Next steps?</h3>
                  <p style={{ color: "black" }}>
                    We look forward to designing a custom solution to fit your
                    needs. Satisfaction guaranteed.
                  </p>
                  <ul className="cta-info__list">
                    <li>
                      <i className="fa-solid fa-circle-check"></i>Send us a
                      message today.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>Give us an
                      idea of your strategic objectives.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>Tell us about
                      your business needs.
                    </li>
                  </ul>
                  <p style={{ color: "black" }}>
                    We will contact you within 24 hours with a range of
                    alternatives.
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
