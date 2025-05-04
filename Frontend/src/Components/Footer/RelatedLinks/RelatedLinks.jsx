import React from "react";
import { Link, useNavigate } from "react-router-dom";
const RelatedLinks = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);  // Navigate back
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="related-links-container">
      <div className="related-links-header">
        <h2>Related Links</h2>
        <div className="related-links-actions">
          <button onClick={handleBack}>🔙 Back</button>
          <button onClick={handlePrint}>🖨️ Print</button>
        </div>
      </div>

      <table className="related-links-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Related Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><a href="https://socialjustice.nic.in" target="_blank" rel="noopener noreferrer">Ministry of Social Justice and Empowerment</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td><a href="https://nbcfdc.gov.in" target="_blank" rel="noopener noreferrer">National Backward Classes Finance and Development</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td><Link to="/state-commission">State Commission for Backward Classes</Link></td> 
          </tr>
          <tr>
            <td>4</td>
            <td><a href="https://venturefund.com" target="_blank" rel="noopener noreferrer">Venture Capital Fund For Backward Classes</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RelatedLinks;
