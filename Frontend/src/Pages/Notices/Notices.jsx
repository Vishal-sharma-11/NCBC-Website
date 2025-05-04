import axios from "axios";
import React, { useEffect, useState } from "react";

const rowsPerPage = 5;

const Notices = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/notice/");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRules();
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  return (
    <div className="notice-container">
      <table className="notice-table">
        <thead>
          <tr>
            <th>NOTICES :</th>

            <th>Start Date</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>{item.notice}</td>
              <td>{item.start_date}</td>
              <td>{item.expiry_date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-container">
        <div className="pagination">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num + 1}
              onClick={() => handlePageChange(num + 1)}
              className={currentPage === num + 1 ? "active" : ""}
            >
              {num + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;
