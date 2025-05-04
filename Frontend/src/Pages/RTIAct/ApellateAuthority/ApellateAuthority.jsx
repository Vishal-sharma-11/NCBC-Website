import { useNavigate } from "react-router-dom";

const AppellateAuthority = () => {
  const navigate = useNavigate();

  return (
    <div className="authority-container">
      <div className="authority-header">
        <h2>Appellate Authority/Central Public Information Officer</h2>
        <div className="header-buttons">
          <button className="back-button" onClick={() => navigate("/rti-act")}>Back</button>
          <button className="print-btn" onClick={() => window.print()}>Print 🖨️
          </button>
        </div>
      </div>
      <div className="authority-content">
        <h3>1. FIRST APPELLATE AUTHORITY (FAA)</h3>
        <p><strong>Shri Yogendra Prasad Yadav,</strong> Deputy Secretary</p>
        <p>National Commission for Backward Classes,<br />
          Trikoot-1, Bhikaji Cama Place, New Delhi-110066</p>
        <p>Email: dir-admn[at]ncbc[dot]nic[dot]in</p>
        <p>Contact No: 011-26189213</p>

        <h3>2. Central Public Information Officer (CPIO)</h3>
        <p><strong>Shri Arun Kumar Singh,</strong> Under Secretary</p>
        <p>National Commission for Backward Classes,<br />
          Trikoot-1, Bhikaji Cama Place, New Delhi-110066</p>
        <p>Email: us-admn[at]ncbc[dot]nic[dot]in</p>
        <p>Contact No: 011-26189211</p>
      </div>
    </div>
  );
};

export default AppellateAuthority;