import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const AccessibilityOptions = () => {
  const [textSize, setTextSize] = useState('standard');
  const [contrast, setContrast] = useState('standard');
  const [spacing, setSpacing] = useState('standard');

  const handleApply = () => {
    alert(`Applied Settings: \nText Size: ${textSize}\nContrast: ${contrast}\nText Spacing: ${spacing}`);
  };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);  // Navigate back
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="accessibilityoptions-container">
      <h2>Accessibility Options</h2>
      <div className="accessibilityoptions-actions">
          <button onClick={handleBack}>🔙 Back</button>
          <button onClick={handlePrint}>🖨️ Print</button>
        </div>
      <p>
        Accessibility options enable you to increase or decrease the Font Size and/or change the color scheme of this website according to your preferences.
      </p>

      {/* Text Size Section */}
      <fieldset>
        <legend>Change Text Size</legend>
        <label>
          <input 
            type="radio" 
            name="textSize" 
            value="large" 
            checked={textSize === 'large'}
            onChange={() => setTextSize('large')} 
          />
          Large Font Size
        </label>
        <label>
          <input 
            type="radio" 
            name="textSize" 
            value="standard" 
            checked={textSize === 'standard'}
            onChange={() => setTextSize('standard')} 
          />
          Standard Font Size
        </label>
        <label>
          <input 
            type="radio" 
            name="textSize" 
            value="small" 
            checked={textSize === 'small'}
            onChange={() => setTextSize('small')} 
          />
          Small Font Size
        </label>
      </fieldset>

      {/* Contrast Section */}
      <fieldset>
        <legend>Change Contrast</legend>
        <label>
          <input 
            type="radio" 
            name="contrast" 
            value="standard" 
            checked={contrast === 'standard'}
            onChange={() => setContrast('standard')} 
          />
          Standard
        </label>
        <label>
          <input 
            type="radio" 
            name="contrast" 
            value="yellow-black" 
            checked={contrast === 'yellow-black'}
            onChange={() => setContrast('yellow-black')} 
          />
          Yellow on Black
        </label>
        <label>
          <input 
            type="radio" 
            name="contrast" 
            value="yellow-blue" 
            checked={contrast === 'yellow-blue'}
            onChange={() => setContrast('yellow-blue')} 
          />
          Yellow on Blue
        </label>
        <label>
          <input 
            type="radio" 
            name="contrast" 
            value="fuchsia-black" 
            checked={contrast === 'fuchsia-black'}
            onChange={() => setContrast('fuchsia-black')} 
          />
          Fuchsia on Black
        </label>
      </fieldset>

      {/* Text Spacing Section */}
      <fieldset>
        <legend>Change Text Spacing</legend>
        <label>
          <input 
            type="radio" 
            name="spacing" 
            value="standard" 
            checked={spacing === 'standard'}
            onChange={() => setSpacing('standard')} 
          />
          Standard
        </label>
        <label>
          <input 
            type="radio" 
            name="spacing" 
            value="wider" 
            checked={spacing === 'wider'}
            onChange={() => setSpacing('wider')} 
          />
          Wider
        </label>
        <label>
          <input 
            type="radio" 
            name="spacing" 
            value="widest" 
            checked={spacing === 'widest'}
            onChange={() => setSpacing('widest')} 
          />
          Widest
        </label>
      </fieldset>

      <button className="apply-btn" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
};

export default AccessibilityOptions;
