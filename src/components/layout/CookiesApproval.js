import React, { useState, useEffect } from "react";
import Link from "next/link";

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
        <Link href="/privacy" className="cookie-link">
          Privacy Policy
        </Link>{" "}
        and
        <Link href="/terms" className="cookie-link">
          Universal Terms of Service.
        </Link>
      </p>
      {!cookiesApproved ? (
        <button onClick={() => cookiesApproval()}>Proceed to Site</button>
      ) : null}
    </div>
  );
};

export default CookiesApproval;
