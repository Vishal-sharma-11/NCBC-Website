import React, { useState } from "react";

const obcData = {
  Delhi: [
    {
      id: 1,
      caste: "Aheria, Aheri, Heri, Naik, Thori or Turi",
      gazette: "12011/68/93-BCC(C) dt 10/09/1993",
    },
    {
      id: 2,
      caste: "Badhi, Barhai, Bhardwaj",
      gazette: "12011/68/93-BCC(C) dt 10/09/1993",
    },
    { id: 3, caste: "Badhik", gazette: "12011/68/93-BCC(C) dt 10/09/1993" },
    {
      id: 4,
      caste: "Baghban, Mali",
      gazette: "12011/68/93-BCC(C) dt 10/09/1993",
    },
    { id: 5, caste: "Balai", gazette: "12011/68/93-BCC(C) dt 10/09/1993" },
    { id: 6, caste: "Banjara", gazette: "12011/68/93-BCC(C) dt 10/09/1993" },
  ],
  Bihar: [
    { id: 1, caste: "Abdal", gazette: "12011/68/93-BCC(C) dt 10/09/1993" },
    { id: 2, caste: "Aghori", gazette: "12011/68/93-BCC(C) dt 10/09/1993" },
    { id: 3, caste: "Amaat", gazette: "12011/68/93-BCC(C) dt 10/09/1993" },
    {
      id: 4,
      caste: "Kasab(Kasai) (Muslim)",
      gazette: "12011/68/93-BCC(C) dt 10/09/1993",
    },
    {
      id: 5,
      caste: "Kewat, Keot",
      gazette: "12011/68/93-BCC(C) dt 10/09/1993",
    },
    {
      id: 6,
      caste: "Kushwaha (Koeri)",
      gazette: "12011/68/93-BCC(C) dt 10/09/1993",
    },
  ],
  Goa: [
    { id: 1, caste: "Bhandari", gazette: "12011/09/2004-BCC dt 05/07/2005" },
    {
      id: 2,
      caste: "Christian Namasudra",
      gazette: "12011/21/95-BCC dt 15/05/1995",
    },
    {
      id: 3,
      caste: "Koli, Kharvi",
      gazette: "12011/68/93-BCC(C) dt 10/09/1993",
    },
    { id: 4, caste: "Kunbi", gazette: "12011/68/93-BCC(C) dt 10/09/1993" },
    { id: 5, caste: "Mahar", gazette: "12011/68/93-BCC(C) dt 10/09/1993" },
  ],
  "Andaman and Nicobar": [
    { id: 1, caste: "Karen", gazette: "12011/14/2004-BCC dt. 12/03/2007" },
    { id: 2, caste: "Local Borns", gazette: "12015/15/2008-BCC dt.16/06/2011" },
    { id: 3, caste: "Bhatus", gazette: "12015/15/2008-BCC dt.16/06/2011" },
    { id: 4, caste: "Moplas", gazette: "12015/15/2008-BCC dt.16/06/2011" },
    {
      id: 5,
      caste: "Post 1942 Bengali Settlers",
      gazette: "12015/13/2010-B.C.II.dt.08/12/2011",
    },
  ],
};
const Centralist = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCaste, setSelectedCaste] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Get all unique states
  const states = Object.keys(obcData);

  // Get all unique castes
  const castes = Array.from(
    new Set(
      Object.values(obcData)
        .flat()
        .map((item) => item.caste)
    )
  ).sort();

  // Filter data based on selection
  const filteredData = Object.entries(obcData)
    .filter(([state]) => !selectedState || state === selectedState)
    .flatMap(([state, castes]) =>
      castes
        .filter(
          (item) =>
            (!selectedCaste || item.caste === selectedCaste) &&
            (searchTerm === "" ||
              item.caste.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.gazette.toLowerCase().includes(searchTerm.toLowerCase()) ||
              state.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .map((item) => ({ ...item, state }))
    );

  return (
    <div className="centralist-filter-container">
      <div className="centralist-filter">
        <label htmlFor="stateFilter">Filter By:</label>
        <select
          id="stateFilter"
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">All States/Regions</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select
          id="casteFilter"
          onChange={(e) => setSelectedCaste(e.target.value)}
        >
          <option value="">All Castes/Communities</option>
          {castes.map((caste) => (
            <option key={caste} value={caste}>
              {caste}
            </option>
          ))}
        </select>

        <input
          type="text"
          id="searchInput"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="centralist-container">
        <div className="centralist-header">
          <h2>CENTRAL LIST OF OBCs :</h2>
          <button className="print-btn" onClick={() => window.print()}>
            <span>🖨️</span>
            <span>Print</span>
          </button>
        </div>

        <div className="centralist-table-container">
          <table id="obcTable">
            <thead>
              <tr>
                <th>Entry No.</th>
                <th>State/Region</th>
                <th>Caste/Community</th>
                <th>Gazetted Notification</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.state}</td>
                  <td>{item.caste}</td>
                  <td>
                    <a href={item.gazette} className="download-btn">
                      <span>📄</span>
                      <span>Download PDF</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Centralist;
