// DropdownSelector.jsx
import React from "react";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir"
];

const DropdownSelector = ({ selectedState, onSelectState }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Select State</label>
      <select
        value={selectedState}
        onChange={(e) => onSelectState(e.target.value)}
        style={{ width: "100%", padding: "10px", borderRadius: "5px", marginTop: "5px" }}
      >
        <option value="">Select State</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelector;
