import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Advices = () => {
  const [states, setstates] = useState([])
  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/advices/getStates");
        setstates(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRules();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="custom-table-container">
      <h2 className="custom-table-title">ADVICES :</h2>
      
      <table className="custom-styled-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name of the States</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {states.map((state, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{state.state}</td>
              <td>
                <button
                  className="custom-view-button"
                  onClick={() => navigate(`${state.state}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="custom-table-bottom-border"></div>
    </div>
  );
};

export default Advices;
