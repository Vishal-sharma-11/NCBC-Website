import React from 'react';
import { Link, useNavigate } from "react-router-dom";
const Help = () => {
  
  // Function to handle the back navigation
  const handleBack = () => {
    window.history.back();   // Navigates to the previous page
  };

  // Function to handle the print functionality
  const handlePrint = () => {
    window.print();   // Opens the print dialog
  };

  return (
    <div className="help-container">
      <div className="help-header">
        <h2>Help</h2>
        <div className="help-actions">
        <button  onClick={handleBack}>🔙 Back</button>
        <button  onClick={handlePrint}>🖨️ Print</button>
        </div>
      </div>
      <div className="help-content">
        <h3>Links at top of the page</h3>
        <ol>
          <li>
            <strong>Screen Reader Access:</strong> This link provides information regarding access to different screen readers.
          </li>
          <li>
            <strong>Skip To Main Content:</strong> This link sends the control to main content, so that visually challenged people can skip to 
            listen header and navigation every time and can switch to main content directly.
          </li>
          <li>
            <strong>Text Size:</strong> Changing the size of the text refers to making the text appear smaller or bigger from its standard size. 
            The website allows you to change the text size in two different ways, by clicking on the text size icons present at the top of each 
            page and through the Accessibility Options page.
          </li>
          <li>
            <strong>Text Size Icons:</strong>
            <ul>
              <li><strong>-</strong> <em>Decrease text size:</em> Allows to decrease the text size to one level.</li>
              <li><strong>A</strong> <em>Normal text size:</em> Allows to set default text size.</li>
              <li><strong>+</strong> <em>Increase text size:</em> Allows to increase the text size to one level.</li>
            </ul>
          </li>
          <li>
            <strong>Accessibility Options:</strong>
            <ol>
              <li>Select <strong>Accessibility Options</strong>. The Accessibility Options page is displayed.</li>
              <li>From the <strong>Text Size</strong> section, select the appropriate text size.</li>
              <li>Click <strong>Apply</strong>.</li>
            </ol>
          </li>
          <li>
            <strong>Change Content Language:</strong>
            <ul>
              <li><strong>हिंदी में:</strong> By clicking on this link, user will be able to see the contents in Hindi.</li>
              <li><strong>In English:</strong> This link displays the contents in English.</li>
            </ul>
          </li>
          <li>
            <strong>Search Facility:</strong> Users can search for documents with entries that contain any one of the words specified in the box.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Help;
