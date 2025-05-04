import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const TermsConditions = () => {
    const navigate = useNavigate();

    const handleBack = () => {
      navigate(-1);  // Navigate back
    };
  
    const handlePrint = () => {
      window.print();
    };

  return (
    <div className="Termsconditions-container">
      <div className="Termsconditions-header">
        <h2>Terms and Conditions</h2>
        <div className="Termsconditions-actions">
          <button onClick={handleBack}>🔙 Back</button>
          <button onClick={handlePrint}>🖨️ Print</button>
        </div>
      </div>

      <p>
        This website is designed, developed and maintained by National Informatics Centre and content 
        provided by the National Commission for Backward Classes, Government of India.
      </p>

      <p>
        Though all efforts have been made to ensure the accuracy and currency of the content on this website, 
        the same should not be construed as a statement of law or used for any legal purposes. In case of any 
        ambiguity or doubts, users are advised to verify / check with the Commission and to obtain appropriate 
        professional advice. This Commission will not be responsible for any inadvertent errors/inaccuracies 
        which may have crept in.
      </p>

      <p>
        Under no circumstances will this Commission be liable for any loss or damage including, without limitation, 
        indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss 
        of use, of data, arising out of or in connection with the use of this website.
      </p>

      <p>
        These terms and conditions shall be governed by and construed in accordance with the Indian Laws. 
        Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.
      </p>

      <p>
        The information posted on this website could include hypertext links or pointers to information created 
        and maintained by other Government organisations. National Commission for Backward Classes is providing 
        these links and pointers solely for your information and convenience. When you select a link to an outside 
        website, you are leaving the National Commission for Backward Classes website and are subject to the 
        privacy and security policies of the owners / sponsors of the outside website.
      </p>

      <p>
        National Commission for Backward Classes does not guarantee the availability or accuracy of such linked 
        pages at all times.
      </p>

      <p>
        National Commission for Backward Classes cannot authorise the use of copyrighted materials contained in 
        linked websites. Users are advised to request such authorisation from the owners of the linked website.
      </p>

      <p>
        National Commission for Backward Classes does not guarantee that linked websites comply with Indian 
        Government Web Guidelines.
      </p>
    </div>
  );
};

export default TermsConditions;
