import { useNavigate } from "react-router-dom";
const Table = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="RTI-table-container">
      <h2 className="RTI-table-title">RIGHT TO INFORMATION ACT, 2005 :</h2>
      <table className="RTI-styled-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Right to Information</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => navigate("info-handbook")}>
            <td>1</td>
            <td className="clickable">Information Handbook under RTI, 2005</td>
          </tr>
          <tr onClick={() => navigate("appellate-authority")}>
            <td>2</td>
            <td className="clickable">
              Appellate Authority/Central Public Information Officers
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
