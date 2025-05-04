import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HyperlinkPolicy = () => {
  
  // Function to handle the back navigation
  const handleBack = () => {
    window.history.back();   // Navigates to the previous page
  };

  // Function to handle the print functionality
  const handlePrint = () => {
    window.print();   // Opens the print dialog
  };
  return (
    <div className="hyperlinking-policy-container">
      <div className="hyperlinking-policy-header">
        <h1 className="hyperlinking-policy-title">Hyperlinking Policy</h1>
        <div className="hyperlinking-policy-actions">
        <button onClick={handleBack}>🔙 Back</button>
        <button onClick={handlePrint}>🖨️ Print</button>
        </div>
      </div>

      <div className="hyperlinking-policy-section">
        <h2 className="hyperlinking-policy-subtitle">Links to external websites/portals</h2>
        <p className="hyperlinking-policy-text">
          At many places in this website, you may find links to other
          websites/portals. These links have been placed for your convenience.
          NCBC is not responsible for the accuracy of the contents and
          reliability of the linked websites and does not necessarily endorse
          the views expressed in them. Mere presence of the links or its listing
          on this portal should not be assumed as endorsement of any kind. We
          cannot guarantee that these links will work all the time and we have
          no control over availability of linked pages.
        </p>
      </div>

      <div className="hyperlinking-policy-section">
        <h2 className="hyperlinking-policy-subtitle">Links to NCBC website by other websites/portals</h2>
        <p className="hyperlinking-policy-text">
          NCBC does not object to you linking directly to the information that
          is hosted on this portal and no prior permission is required for the
          same. However, we should like you to inform us about any links
          provided to this website so that you can be informed of any changes or
          updates therein. Also, we do not permit our pages to be loaded into
          frames on your site. The pages belonging to this website must load
          into a newly opened browser window of the user.
        </p>
      </div>
    </div>
  );
};

export default HyperlinkPolicy;

