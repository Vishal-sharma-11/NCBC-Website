import { useNavigate } from "react-router-dom";

const InfoHandbook = () => {
  const navigate = useNavigate();

  return (
    <div className="content-container">
      <button className="back-button" onClick={() => navigate("/rti-act")}>Back</button>
      <h2>Information Handbook under RTI, 2005</h2>
      <p>This section contains details about the Right to Information Handbook.</p>
    </div>
  );
};

export default InfoHandbook;
