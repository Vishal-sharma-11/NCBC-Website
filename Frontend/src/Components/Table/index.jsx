import React, { useState } from "react";

const Table = (data) => {
    console.log(data);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredDocuments = data.data.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="rules-report">
      {/* Header Section */}
      <div className="rules-report-header">
        <h1>{data.heading}</h1>
        <div className="search-print">
          {data.isSearch  ? (
            <input
              type="text"
              className="organizational-search-box"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          ) : (
            <></>
          )}

          <span className="print-btn" onClick={() => window.print()}>
            Print 🖨️
          </span>
        </div>
      </div>

      {/* Table Rows */}
      <div className="rules-table-container">
        <table className="rules-table-content">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>{data.subHeading}</th>
              <th>View / Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.map((rule, idx) => (
              <tr key={rule.id}>
                <td>{idx + 1}.</td>
                <td>{rule.title}</td>
                <td>
                  <a
                  className="download-btn"
                    href={`http://localhost:3000${rule.pdf_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View / Download
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

export default Table;
