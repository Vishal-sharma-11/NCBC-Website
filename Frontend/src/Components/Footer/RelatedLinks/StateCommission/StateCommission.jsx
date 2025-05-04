import React from "react";
const data = [
  { state: "Andaman and Nicobar", address: "Andhra Pradesh State Commission for Backward Classes", link: "#" },
  { state: "Andhra Pradesh", address: "Andhra Pradesh State Commission for Backward Classes", link: "#" },
  { state: "Assam", address: "DEPARTMENT OF WELFARE OF PLAIN TRIBES & BACKWARD CLASSES, D block, 3rd Floor, Janata Bhawan, Dispur, Guwahati-781006, Assam", link: "#" },
  { state: "Bihar", address: "Bihar State Commission for Backward Classes, 12/A, Jawaharlal Nehru Marg, Patna - 800 001", link: "#" },
  { state: "Chandigarh", address: "च. न. पा. पिछड़ा वर्ग आयोग, 21, सेक्टर, चंडीगढ़ (UT), पिन कोड : 160021", link: "#" },
  { state: "Chhattisgarh", address: "छ.ग. पिछड़ा वर्ग आयोग, रायपुर, छत्तीसगढ़, टेलीफोन: 0771-2420352, 2429697", link: "#" },
  { state: "Daman and Diu", address: "—", link: "#" },
  { state: "Dadra and Nagar Haveli", address: "—", link: "#" },
  { state: "Delhi", address: "GOVERNMENT OF NATIONAL CAPITAL TERRITORY OF DELHI VIKAS MINAR, 5TH FLOOR, I.P. ESTATE, NEW DELHI-110002", link: "#" },
  { state: "Goa", address: "Goa State Backward Classes Commission, Old IPHB Complex, Altinho, Panaji-Goa", link: "#" },
  { state: "Gujarat", address: "—", link: "#" },
  { state: "Haryana", address: "Haryana Backward Classes Commission", link: "#" },
  { state: "Himachal Pradesh", address: "Himachal Pradesh State Commission For Backward Classes, SDA Complex, Block No. 38, Kasumpti, Shimla-171009", link: "#" },
  { state: "Jammu and Kashmir", address: "Jammu and Kashmir State Commission For Backward Classes", link: "#" },
  { state: "Jharkhand", address: "Jharkhand State Commission for Backward Classes, E-10, Sector II, HEC Dhurwa, Ranchi-834004", link: "#" },
  { state: "Karnataka", address: "Karnataka State Commission for Backward Classes, No-16 D. Devaraj Urs Bhavan, Miller Tank Bed Area, Vasanthnagar, Bengaluru-560052", link: "#" },
  { state: "Kerala", address: "KERALA STATE COMMISSION FOR BACKWARD CLASSES, IInd Floor, Aryanbhai Bhavan, Kavalan Nagar, Vellayambalam, Thiruvananthapuram – 695 003", link: "#" },
  { state: "Madhya Pradesh", address: "म.प्र. राज्य पिछड़ा वर्ग आयोग", link: "#" },
  { state: "Maharashtra", address: "Social Justice & Special Assistance Department 1st Floor, Annex Building, Mantralay, Madam Cama Road, Hutatma Rajguru Chowk, Nariman Point, Mumbai - 400032", link: "#" },
  { state: "Manipur", address: "Manipur State Commission for Other Backward Classes, Manipur", link: "#" },
  { state: "Odisha", address: "Odisha State Commission for Backward Classes, Toshali Bhawan, A-2 Block, 6th Floor, Bhubaneswar, Odisha 751007", link: "#" },
  { state: "Puducherry", address: "—", link: "#" },
  { state: "Punjab", address: "Punjab State Backward Classes Commission Tower No-5, 2nd Floor, Sector-68, SAS Nagar(Mohali)", link: "#" },
  { state: "Rajasthan", address: "Rajasthan State Backward Classes Commission, Pashudhan Bhavan, 3rd Floor, Lal Kothi, Tonk Road , Jaipur-302015", link: "#" },
  { state: "Sikkim", address: "—", link: "#" },
  { state: "Tamil Nadu", address: "Tamil Nadu Backward Classes Commission, 212, Ramakrishna Mutt Road, Mylapore, Chennai-600 004", link: "#" },
  { state: "Tripura", address: "Tripura State Backward Classes Commission", link: "#" },
  { state: "Uttar Pradesh", address: "Uttar Pradesh State Commission for Backward Classes, Indra Bhawan, Ashok Marg, Lucknow", link: "#" },
  { state: "Uttarakhand", address: "Uttarakhand State Commission for Backward Classes", link: "#" },
  { state: "West Bengal", address: "West Bengal Commission for Backward Classes, Bhawan (7th floor), DD-184, Salt Lake, Kolkata - 700 064", link: "#" },
  { state: "Telangana", address: "Telangana Commission for Backward Classes", link: "#" }
];

const CommissionList = () => {
  return (
    <div className="StateCommission">
      <h1 className="text-2xl font-bold mb-4">State Commission for Backward Classes</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">State</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Web Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border p-2">{item.state}</td>
              <td className="border p-2">{item.address}</td>
              <td className="border p-2">
                <a href={item.link} className="text-blue-500 hover:underline">Click Here</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommissionList;
