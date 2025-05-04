import React from 'react';

const NewsSection = () => {
  return (
    <div className="whats-new">
      <div className="whats-new-header">
        <div className="whats-new-tag">What's New</div>
        <div className="whats-new-tag-2">News/Tenders/Recruitments</div>
      </div>
      <div className="news-container">
        <h3 className="main-content">National Commission for Backward Classes</h3>
        <div className="news">
          <ul className="rotate">
            <li>
              <strong>[Oct 2024] : </strong> Telangana Government: Approved ₹1,500 crore for scholarships benefiting Backward Classes (BC) and
              Economically Backward Classes (EBC) students.
            </li>
            <li>
              <strong>[Feb 2024] : </strong> Union Budget Cuts: The 2023-24 Union Budget reduced ₹2,000 crore across various scholarships for SCs, STs,
              OBCs, and minority students.
            </li>
            <li>
              <strong>[Since 2014] : </strong> SHREYAS Scheme: Over ₹2,300 crore has been allocated for SC and OBC education under initiatives
              like free coaching, national fellowships, and overseas scholarships.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
