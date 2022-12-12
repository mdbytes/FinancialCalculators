import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const CookiesApproval = () => {
  const [cookiesApproved, setCookiesApproved] = useState(false);

  const cookiesApproval = () => {
    if (window != null) {
      document.querySelector("#cookie-disclosure").style.display = "none";
      setCookiesApproved(true);
    }
  };

  useEffect(() => {
    // Track the approval of cookies and privacy settings
    if (document && !cookiesApproved) {
      setTimeout(() => {
        document.querySelector("#cookie-disclosure").style.display = "flex";
      }, 2000);
    }
  }, [cookiesApproved]);

  return (
    <div
      id="cookie-disclosure"
      className="animate__animated animate__zoomInDown"
    >
      <p>
        We use cookies to ensure you have the best browsing experience on our
        website. By using our site, you acknowledge that you have read and
        understood our
        <NavLink to="/calculator/privacy" className="cookie-link">
          Privacy Policy
        </NavLink>{" "}
        and
        <NavLink to="/calculator/terms" className="cookie-link">
          Universal Terms of Service.
        </NavLink>
      </p>
      {!cookiesApproved ? (
        <button onClick={() => cookiesApproval()}>Proceed to Site</button>
      ) : null}
    </div>
  );
};

export default CookiesApproval;
