import React, { useEffect, useState } from "react";
import Table from "../../../Components/Table";
import axios from "axios";
const MinistryOrders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/ministry/");
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRules();
  }, []);
  return (
    <Table data={data} heading={"MINISTRY ORDERS"} subHeading={"Subject"}></Table>
    // <div className="ministry-orders">
    //   <div className="ministry-header">
    //     <h1>MINISTRY ORDERS :</h1>
    //     <button className="print-btn" onClick={() => window.print()}>
    //       Print 🖨️
    //     </button>
    //   </div>
    //   <div className="ministry-table-container">
    //     <table className="ministry-table">
    //       <thead>
    //         <tr>
    //           <th>S.N.</th>
    //           <th>Subject</th>
    //           <th>View / Download</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td>1.</td>
    //           <td>Migrant Rules</td>
    //           <td>
    //             <a
    //               className="download-btn"
    //               href="https://ncbc.nic.in/Writereaddata/ministryorder.pdf"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               View / Download
    //             </a>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default MinistryOrders;
