import React, { useState } from 'react';

const data = [
  // Your existing data...
  //First page
  { id: 1, notice: "Information related to Hearing details of National Law Universities/Schools-Reg", startDate: "10 Jan 2020", expiryDate: "21 Jan 2020" },
  { id: 2, notice: "Engagement of One Consultant (Law) On Contract basis in NCBC-reg", startDate: "13 Feb 2020", expiryDate: "13 Mar 2020" },
  { id: 3, notice: "Donation of one day salary to PM Cares Funds-Reg", startDate: "20 Apr 2020", expiryDate: "24 Apr 2020" },
  { id: 4, notice: "APPEAL:- Voluntary Contribution to PM CARES FUND", startDate: "24 Apr 2020", expiryDate: "30 Apr 2020" },
  { id: 5, notice: "Anti Terrorism Day- Pledge Taking Ceremony", startDate: "20 May 2020", expiryDate: "25 May 2020" },
  { id: 6, notice: "Engagement of One Consultant (Accounts Officer) On Contract basis", startDate: "10 Jun 2020", expiryDate: "26 Jun 2020" },
  //Second page
  { id: 7, notice: "Vacancy Notice: Applications for Consultant Research Officers", startDate: "20 Aug 2020", expiryDate: "30 Sep 2020" },
  { id: 8, notice: "CIRCULAR: Engagement of One Consultant (Accounts Officer)", startDate: "26 Aug 2020", expiryDate: "30 Sep 2020" },
  { id: 9, notice: "CIRCULAR: Engagement of One Consultant (Accounts Officer)", startDate: "11 Nov 2020", expiryDate: "30 Nov 2020" },
  //Third page
  { id: 10, notice: "Circular: Engagement of One Consultant (Accounts Officer)", startDate: "25 Jan 2021", expiryDate: "19 Feb 2021" },
  { id: 11, notice: "Circular Notice: Engagement of 01 Hindi Officer & 01 Hindi Translator in NCBC", startDate: "02 Feb 2021", expiryDate: "26 Feb 2021" },
  { id: 12, notice: "Tender Notice: Disposal of old office equipment in NCBC", startDate: "08 Mar 2021", expiryDate: "05 Apr 2021" },
  { id: 13, notice: "Office Memorandum: No Visitors allowed during COVID", startDate: "15 Apr 2021", expiryDate: "04 May 2021" },
  { id: 14, notice: "Vacancy Notice: Six Consultants recruitment in NCBC", startDate: "05 May 2021", expiryDate: "07 Jun 2021" },
  { id: 15, notice: "Vacancy Notice: Extended up to 07-06-2021 in NCBC", startDate: "31 May 2021", expiryDate: "10 Jun 2021" },

  // Fourth Page Data
  { id: 16, notice: "ORDER: Appointment of CPIO and Nodal Officer for RTI applications", startDate: "07 Apr 2022", expiryDate: "30 Apr 2022" },
  { id: 17, notice: "Public Notice: Unauthorized persons claiming to represent NCBC", startDate: "15 Jun 2022", expiryDate: "30 Apr 2023" },
  { id: 18, notice: "Order:- Nominate of First Appellate Authority (FAA) of RTI Appeals cases-reg", startDate: "21 Jul 2022", expiryDate: "30 Sep 2022" },
  { id: 19, notice: "ORDER:- Nomination of Nodal Officer of CPGRAMS portal –reg", startDate: "17 Oct 2022", expiryDate: "30 Nov 2022" },
  { id: 20, notice: "ORDER:- Nomination of Nodal Officer of CSCMS portal –reg", startDate: "17 Oct 2022", expiryDate: "30 Nov 2022" },

  // Fifth Page Data
  { id: 21, notice: "CIRCULAR: Appointment to the Two posts of Research Officer in the NCBC on deputation basis", startDate: "09 Mar 2023", expiryDate: "30 Apr 2023" },
  { id: 22, notice: "CIRCULAR: Appointment to the One post of Accounts Officer in the NCBC on Deputation basis", startDate: "16 Mar 2023", expiryDate: "31 May 2023" },
  { id: 23, notice: "ORDER: Appointment of CPIO and Nodal Officer of RTI cases-reg", startDate: "06 Apr 2023", expiryDate: "30 Jun 2023" },
  { id: 24, notice: "Tender Notice: Quotation/rates for Commission’s Board (Name Patt)-reg", startDate: "20 Apr 2023", expiryDate: "10 May 2023" },
  { id: 25, notice: "CIRCULAR: Appointment to the Two posts of Research Officer in NCBC on Deputation basis", startDate: "11 May 2023", expiryDate: "30 Jun 2023" },

  // Sixth Page Data
  { id: 26, notice: "ORDER:- Appointment of CPIO and Nodal Officer of RTI cases-regarding", startDate: "17 Jul 2023", expiryDate: "30 Sep 2023" },
  { id: 27, notice: "Recruitment to the posts of one consultant as Advisor in NCBC on short-term contact basis", startDate: "20 Sep 2024", expiryDate: "29 Sep 2024" },
  { id: 28, notice: "Engagement of retired Government officials as Consultant for Staff Car Driver (01 post) in NCBC", startDate: "29 Sep 2024", expiryDate: "08 Oct 2024" },
  { id: 29, notice: "Recruitment to the post of three (03) Consultants as Advisors in NCBC", startDate: "25 Oct 2024", expiryDate: "20 Nov 2024" },
  { id: 30, notice: "Recruitment To The post of Young Professionals (08 posts) In NCBC", startDate: "08 Nov 2024", expiryDate: "22 Nov 2024" }

];

const rowsPerPage = 5;

const Notices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="container">
      <table className="notice-table">
        <thead>
          <tr>
            <th>Notices</th>
            <th>Start Date</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>{item.notice}</td>
              <td>{item.startDate}</td>
              <td>{item.expiryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-container">
        <div className="pagination">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num + 1}
              onClick={() => handlePageChange(num + 1)}
              className={currentPage === num + 1 ? "active" : ""}
            >
              {num + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;
