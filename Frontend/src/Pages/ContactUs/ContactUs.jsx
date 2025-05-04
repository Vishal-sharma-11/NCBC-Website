import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/contact");
        setContactData(response.data);
      } catch (e) {
        setError("Failed to fetch data");
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderTable = (title, category) => {
    const filteredData = contactData.filter((person) => person.category === category);
    return (
      <>
        <h2>{title}</h2>
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Intercom</th>
              <th>Designation</th>
              <th>E-mail</th>
              <th>Room No.</th>
              <th>Telephone</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((person, index) => (
                <tr key={index} className={person.name?.toLowerCase() === "vacant" ? "vacant" : ""}>
                  <td>{person.name || "-"}</td>
                  <td>{person.intercom || "-"}</td>
                  <td>{person.designation || "-"}</td>
                  <td>{person.email || "-"}</td>
                  <td>{person.roomNo || "-"}</td>
                  <td>{person.telephone || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="contactUs-full-body">
      <h1>Contact Us</h1>
      {renderTable("Hon'ble Chairperson of National Commission for Backward Classes", "Hon'ble Chairperson")}
      {renderTable("Hon'ble Vice-Chairperson of National Commission for Backward Classes", "Hon'ble Vice-Chairperson")}
      {renderTable("Hon'ble Member of National Commission for Backward Classes", "Hon'ble Member")}
      {renderTable("Secretary of National Commission for Backward Classes", "Secretary")}
      {renderTable("Advisor of National Commission for Backward Classes", "Advisor")}
      {renderTable("Administration of National Commission for Backward Classes", "Administration")}
    </div>
  );
};

export default ContactUs;
