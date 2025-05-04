import axios from "axios";
import React, { useEffect, useState } from "react";

function MainContent() {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeetings = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("http://localhost:3000/meeting/");
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  useEffect(() => {
    if (!data.length) return;

    const sorted = [...data].sort((a, b) => {
      if (sortBy === "year") {
        return parseInt(b.annual) - parseInt(a.annual);
      } else {
        return new Date(b.dates_of_meeting) - new Date(a.dates_of_meeting);
      }
    });

    setSortedData(sorted);
  }, [sortBy, data]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredData = sortedData.filter((meeting) => {
    return (
      (meeting.annual && meeting.annual.toString().toLowerCase().includes(searchQuery)) ||
      (meeting.dates_of_meeting && meeting.dates_of_meeting.toLowerCase().includes(searchQuery)) ||
      (meeting.chaired_by && meeting.chaired_by.toLowerCase().includes(searchQuery))
    );
  });

  return (
    <>
      {/* Sort Section */}
      <div className="sort-section">
        <div className="sort-by">
          <span>Sort By:</span>
          <div className="date-select">
            <select value={sortBy} onChange={handleSortChange}>
              <option value="date">Date</option>
              <option value="year">Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Meeting Minutes Section */}
      <div className="meeting-container">
        <div className="meeting-header">
          <h2>MINUTES OF FULL COMMISSION MEETING:</h2>
          <div className="meeting-actions">
            <input
              type="text"
              placeholder="Search by name, date, or year"
              className="meeting-search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="print-btn" onClick={() => window.print()}>
              Print 🖨️
            </button>
          </div>
        </div>

        {/* Meeting Table */}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <table className="meeting-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Dates of meeting</th>
                <th>Chaired By</th>
                <th>View / Download PDF</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((meeting, index) => (
                  <tr key={index}>
                    <td>{meeting.annual}</td>
                    <td>{meeting.dates_of_meeting}</td>
                    <td>{meeting.chaired_by}</td>
                    <td>
                      <a
                        href={`http://localhost:3000${meeting.pdf_url}`}
                        className="download-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="pdf-icon">📄</i> Download PDF
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center", padding: "10px" }}>
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default MainContent;
