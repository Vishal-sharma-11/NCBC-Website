import axios from "axios";
import Table from "../../Components/Table";
import React, { useEffect, useState } from "react";
const ActRules = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/ncbc-act/");
        setReport(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRules();
  }, []);
  return (
    <Table data={report} heading={"Act & RULES"} subHeading={"Name"}></Table>
  );
};

export default ActRules;
