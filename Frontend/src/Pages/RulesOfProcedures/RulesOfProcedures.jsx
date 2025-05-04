import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../Components/Table";
const RulesOfProcedures = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/rules/");
        
        setRules(res.data);
        console.log(rules);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRules();
  }, []);

  return (
    <>
      <Table data={rules} heading={"RULES OF PROCEDURE IN NCBC"} isSearch={true} subHeading={"Rules"}></Table>
    </>
  );
};

export default RulesOfProcedures;
