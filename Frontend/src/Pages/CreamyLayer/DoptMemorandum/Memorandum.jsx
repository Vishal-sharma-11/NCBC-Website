import React, { useEffect, useState } from "react";
import Table from "../../../Components/Table";
import axios from "axios";
const Memorandum = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/memorandum/");
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRules();
  }, []);
  return (
    <Table data={data} heading={"DOPT Memorandum"} subHeading={"DOPT Memorandum"}></Table>

    // <div className="memorandum">
      
    //   <div className="memorandum-header">
    //     <h1>DOPT MEMORANDUM : </h1>
    //     <button className="print-btn" onClick={() => window.print()}>
    //       Print 🖨️
    //     </button>
    //   </div>

    //   <div className="memorandum-table-container">
    //     <table className="memorandum-table">
    //       <thead>
    //         <tr>
    //           <th>S.N.</th>
    //           <th>DOPT Memorandum</th>
    //           <th>View / Download</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td>1.</td>
    //           <td>DOPT OMs & Orders Regarding Reservation for OBCs</td>
    //           <td>
    //             <a
    //             className="download-btn"
    //               href="https://ncbc.nic.in/Writereaddata/DOPT_OM637989276765878777.pdf"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               View / Download
    //             </a>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td>2.</td>
    //           <td>DOPT OMs & Orders</td>
    //           <td>
    //             <a
    //             className="download-btn"
    //               href="https://ncbc.nic.in/Writereaddata/dopteng.pdf"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               View / Download
    //             </a>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td>3.</td>
    //           <td>Revision of format for OBC Caste Certificate</td>
    //           <td>
    //             <a
    //             className="download-btn"
    //               href="https://ncbc.nic.in/Writereaddata/36036_2_2013-Estt-Res_30052014635430196013010641.pdf"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               View / Download
    //             </a>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td>4.</td>
    //           <td>Reservation for candidates from Other Backward Classes - Revision of Income Criteria and determining equivalence of posts in Central Public Sector Enterprises (CPSEs), Public Sector Banks, Public Financial Institutions, etc. with Posts in Government for establishing Creamy Layer criteria</td>
    //           <td>
    //             <a
    //             className="download-btn"
    //               href="https://ncbc.nic.in/Writereaddata/DoPTOM08.06.2018.pdf"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               View / Download
    //             </a>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td>5.</td>
    //           <td>Revision of income criteria to exclude socially advanced persons/sections (Creamy Layer) from the purview of reservation for Other Backward Classes (OBCs) </td>
    //           <td>
    //             <a
    //             className="download-btn"
    //               href="https://ncbc.nic.in/Writereaddata/OM8Lakha.pdf"
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

export default Memorandum;
