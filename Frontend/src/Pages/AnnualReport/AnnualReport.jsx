import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../Components/Table";
const AnnualReport = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/annual/");
        setReport(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRules();
  }, []);

  

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredReports = selectedYear
    ? report.filter((report) => report.YEAR === selectedYear)
    : report;

  return (

    <div className="rules-report">
      <div className="annual-filter-section">
        <label htmlFor="yearFilter">Filter By:</label>
        <select
          className="annual-filter-dropdown"
          id="yearFilter"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="">Year</option>
          <option value="2021-2022">2021-2022</option>
          <option value="2020-2021">2020-2021</option>
          <option value="2019-2020">2019-2020</option>
        </select>
      </div>

      <div className="annual-report">
        <div className="rules-report-header">
          <h1>ANNUAL REPORT</h1>
          <button className="print-btn" onClick={() => window.print()}>
            Print 🖨️
          </button>
        </div>

        <div className="rules-table-container">
          <table className="rules-table-content">
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Year</th>
                <th>View / Download</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report, index) => (
                <tr key={report.id}>
                  <td>{index + 1}.</td>
                  <td>{report.YEAR}</td>
                  <td>
                    <a
                      className="download-btn"
                      href={`http://localhost:3000${report.pdf_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View / Download
                    </a>
                  </td>
                </tr>
              ))}
              {filteredReports.length === 0 && (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    No report found for the selected year.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnnualReport;
