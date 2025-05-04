import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Disclaimer = () => {
 const navigate = useNavigate();
 
     const handleBack = () => {
       navigate(-1);  // Navigate back
     };
   
     const handlePrint = () => {
       window.print();
     };

  return (
    <div className="disclaimer-container">
      <div className="disclaimer-header">
        <h2>Disclaimer</h2>
        <div className="disclaimer-actions">
          <button onClick={handleBack}>🔙 Back</button>
          <button onClick={handlePrint}>🖨️ Print</button>
        </div>
      </div>

      <p>
        This website belongs to the National Commission for Backward Classes. While going through this site you 
        may come across directories and links to other Government Organizations. The contents of these third-party 
        sites are not to be construed as a responsibility of or an endorsement by this Commission and are the 
        responsibility of the respective organizations which may be contacted for any further information or clarification.
      </p>
    </div>
  );
};

export default Disclaimer;
