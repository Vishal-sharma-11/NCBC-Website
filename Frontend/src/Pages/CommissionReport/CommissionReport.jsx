import React, { useEffect, useState } from "react";
import axios from "axios";

const CommissionReport = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/commission/");
        setReport(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRules();
  }, []);

  return (
    <div className="rules-report">
      <div className="rules-report-header">
        <h1>COMMISSION REPORT</h1>
        <button className="print-btn" onClick={() => window.print()}>
          Print 🖨️
        </button>
      </div>
      <div className="rules-table-container">
        <table className="rules-table-content">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Reports</th>
              <th>View / Download</th>
            </tr>
          </thead>
          <tbody>
            {report.map((report, idx) => (
              <tr key={report.id}>
                <td>{idx + 1}.</td>
                <td>{report.title}</td>
                <td>
                  <a
                    href={`http://localhost:3000${report.pdf_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommissionReport;
