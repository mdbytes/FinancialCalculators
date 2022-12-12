import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_USER } from "../../config/keys";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
    this.confirmSend = this.confirmSend.bind(this);
  }

  confirmSend(e) {
    document.querySelector("#close-modal").click();
    document.querySelector("#submit-button").style.backgroundColor = "#009900";
    document.querySelector("#submit-button").style.border = "1px solid #009900";
    document.querySelector("#submit-button").classList.add("shadow-none");
    document.querySelector("#submit").disabled = false;
    document.querySelector("#submit").click();
    document.querySelector("#submit").disabled = true;
  }

  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_998jv3x", "template_gkvwqkc", e.target).then(
      (result) => {
        document.querySelector("#success-message").innerHTML =
          "Thanks!  We will reply to your message within 24 hours.";
        document.getElementById("form").reset();
      },
      (error) => {
        document.querySelector("#error-message").innerHTML =
          "A problem was incurred sending your message.  Please try again later.";
        document.getElementById("form").reset();
      }
    );
  }

  componentDidMount() {
    emailjs.init(EMAILJS_USER);
  }

  render() {
    return (
      <div className="col-lg-6">
        <div className="contact-form">
          <form id="form" onSubmit={this.sendEmail}>
            <h3 className="display-4">Contact Us</h3>
            <div className="form-group">
              <label id="name-label" htmlFor="name">
                Name
              </label>
              <input
                name="from_name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter full name"
                aria-describedby="nameHelp"
              />
              <small id="nameHelp" className="form-text text-muted">
                We&apos;ll never share your name with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label id="email-label" htmlFor="email">
                Email address
              </label>
              <input
                name="reply_to"
                type="email"
                className="form-control"
                id="email"
                placeholder="e.g. fred@flintstones.com"
                aria-describedby="emailHelp"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We&apos;ll never share your email with anyone else.
              </small>
            </div>
            <div className="mb-3">
              <label htmlFor="comments">Message</label>
              <textarea
                name="message"
                className="form-control"
                id="comments"
                placeholder="Your message here"
                required
              />
            </div>

            <button
              id="submit-button"
              type="button"
              className="btn rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Submit
            </button>
            <input
              id="submit"
              type="submit"
              className="btn btn-primary"
              disabled
            />
          </form>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Confirm Send
                  </h5>
                  <button
                    id="close-modal"
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Click <i>Send</i> to finalize your message.
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    onClick={this.confirmSend}
                    type="button"
                    className="btn btn-primary"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="success-message"></div>
          <div id="error-message"></div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
