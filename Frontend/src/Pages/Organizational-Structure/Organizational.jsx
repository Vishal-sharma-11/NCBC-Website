import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../Components/Table";
const Organizational = () => {
  const [documents, setdocuments] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/organizational/");
        console.log(res.data);
        setdocuments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRules();
  }, []);

  return (
    <Table
      data={documents}
      heading={"Organizational Structure"}
      isSearch={true}
      subHeading={"Name"}
    ></Table>
  );
};

export default Organizational;
