import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const CopyrightPolicy = () => {
    const navigate = useNavigate();

    const handleBack = () => {
      navigate(-1);  // Navigate back
    };
  
    const handlePrint = () => {
      window.print();
    };
  return (
    <div className="copyright-container">
      <div className="copyright-header">
        <h2>Copyright Policy</h2>
        <div className="copyright-actions" >
          <button onClick={handleBack}>🔙 Back</button>
          <button onClick={handlePrint}>🖨️ Print</button>
        </div>
      </div>

      <div className="content">
        <p>
          Material featured on this site may be reproduced free of charge in any format or media without requiring specific permission.
          This is subject to the material being reproduced accurately and not being used in a derogatory manner or in a misleading context.
          Where the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to
          reproduce this material does not extend to any material on this site, which could be the copyright of a third party. Authorization
          to reproduce such material must be obtained from the copyright holders concerned and the NCBC would not be liable for any violation
          by visitors to this site in this regard.
        </p>
      </div>
    </div>
  );
};

export default CopyrightPolicy;
