import React from "react";

// Importing all images
import digitalIndia from '../../assets/digital-india.jpg';
import meityLogo from '../../assets/Meity-logo.png';
import myGov from '../../assets/MyGov.png';
import indiaGov from '../../assets/India.gov.png';

const Fheader = () => {
  return (
    <header className="fheader-container">  
      <div className="fheader-tiles">

        <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer" className="fheader-tile">
          <img src={digitalIndia} alt="Digital India Logo" />
        </a>

        <a href="https://en.m.wikipedia.org/wiki/File:Ministry_of_Electronics_and_Information_Technology.svg" 
           target="_blank" rel="noopener noreferrer" className="fheader-tile">
          <img src={meityLogo} alt="MeitY Logo" />
        </a>

        <a href="https://www.mygov.in/" target="_blank" rel="noopener noreferrer" className="fheader-tile">
          <img src={myGov} alt="MyGov Logo" />
        </a>

        <a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" className="fheader-tile">
          <img src={indiaGov} alt="India.gov Logo" />
        </a>

      </div>
    </header>
  );
};

export default Fheader;
