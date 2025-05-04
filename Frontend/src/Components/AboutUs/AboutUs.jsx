import React from "react";
import assets from "../../assets/assets";
const AboutUs = () => {
  return (
    <>
    <div className="about-us">
      <div className="about-us-header">
      <h1>About Us</h1>
      <p>National Commission for Backward Classes (NCBC) was initially constituted by the Central Govt by the
        National Commission for Backward Classes Act, 1993 (27 of 1993) dated 2.4.1993 and so far the Commission
        had been reconstituted 7 times up to 2016. The National Commission for Backward Classes Act, 1993 (27 of
        1993) has been repealed through the National Commission for Backward Classes (Repeal) Act, 2018 dated
        14.08.2018.</p>
    </div>
    <div className="about-us-images">
      <div className="image-box ahir">
        <img src={assets.ahir} alt="Ahir"/>
        <h3 className="name">Hansraj Gangaram Ahir</h3>
        <p>Hon'ble Chairperson</p>
      </div>
      <div className="image-box">
        <img src={assets.bhushan} alt="Kamal"/>
        <h3 className="name">Bhuvan Bhushan Kamal</h3>
        <p>Hon'ble Member</p>
      </div>
      <div className="image-box Neeraja">
        <img src={assets.neeraja} alt="Neeraja"/>
        <h3 className="name">A. Neeraja, I.F.S.</h3>
        <p>Secretary</p>
      </div>
    </div>
    </div>
    </>
  );
};

export default AboutUs;
