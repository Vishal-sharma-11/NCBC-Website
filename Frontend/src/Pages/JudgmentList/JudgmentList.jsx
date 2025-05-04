import React, { useEffect, useState } from "react";
import Table from "../../Components/Table";
import axios from "axios";

const JudgmentList = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/judgement/");
        setReport(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRules();
  }, []);

  return (
    <Table
      data={report}
      heading={"JUDGEMENT / HEARING"}
      subHeading={"Judgements"}
    ></Table>
  );
};

export default JudgmentList;
