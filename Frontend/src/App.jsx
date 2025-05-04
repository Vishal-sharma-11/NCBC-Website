import React, { useState } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import ActRules from "./Pages/ActRules/ActRules";
import Organizational from "./Pages/Organizational-Structure/Organizational";
import MandalCommission from "./Pages/MandalCommission/MandalCommission";
import AnnualReport from "./Pages/AnnualReport/AnnualReport";
import ContactUs from "./Pages/ContactUs/ContactUs";
import JudgmentList from "./Pages/JudgmentList/JudgmentList";
import MainContent from "./Pages/Meeting/MainContent";
import Centralist from "./Pages/Centralist/Centralist";
import RulesOfProcedures from "./Pages/RulesOfProcedures/RulesOfProcedures";
import CommissionReport from "./Pages/CommissionReport/CommissionReport";
import Notices from "./Pages/Notices/Notices";
import Memorandum from "./Pages/CreamyLayer/DoptMemorandum/Memorandum";
import MinistryOrders from "./Pages/CreamyLayer/MinistryOrders/MinistryOrders";
import Login from "./Components/Login/Login";
import LatestEvents from "./Components/LatestEvents/LatestEvents";
import News from "./Components/LatestEvents/News/News";
import Gallery from "./Components/LatestEvents/Gallery/Gallery";
import Table from "./Pages/RTIAct/Table";
import InfoHandbook from "./Pages/RTIAct/InfoHandbook/InfoHandbook";
import AppellateAuthority from "./Pages/RTIAct/ApellateAuthority/ApellateAuthority";
import AdvicesTable from "./Pages/Advices/AdvicesTable";
import Advices from "./Pages/Advices/Advices";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import EventView from "./Pages/PhotoGallery/EventView";
import PhotoGallery from "./Pages/PhotoGallery/PhotoGallery";
import VideoGallery from "./Pages/VideoGallery/VideoGallery";
import MainFunc from "./Admin-Dashboard";
import SoDashboard from "./SO-Dashboard/src/index";
import AsoDashboard from "./ASO-Dashboard/src";
/*Footer*/
import RelatedLinks from "./Components/Footer/RelatedLinks/RelatedLinks";
import StateCommission from "./Components/Footer/RelatedLinks/StateCommission/StateCommission";
import AccessibilityStatement from "./Components/Footer/AccessibilityStatement/AccessibilityStatement";
import AccessibilityOptions from "./Components/Footer/AccessibilityOptions/AccessibilityOptions";
import PrivacyPolicy from "./Components/Footer/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./Components/Footer/TermsConditions/TermsConditions";
import Disclaimer from "./Components/Footer/Disclaimer/Disclaimer";
import CopyrightPolicy from "./Components/Footer/CopyrightPolicy/CopyrightPolicy";
import HyperlinkingPolicy from "./Components/Footer/HyperlinkingPolicy/HyperlinkingPolicy";
import Help from "./Components/Footer/Help/Help";
import { useLocation } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import "./GlobalStyles.css";
import "./PagesStyle.css";
import "./Footer.css";
import LoginForm from "./Components/Login/Login";
export const App = () => {
  const location = useLocation();
  const isDashboardRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/so") ||
    location.pathname.startsWith("/aso") ||
    location.pathname.startsWith("/aso");

  return (
    <div className="app-container">
      {!isDashboardRoute && <Header />}
      {!isDashboardRoute && <Navbar />}

      {/* Main Content Area - pushes footer down when content is short */}
      <div className="main-area">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/latestevents" element={<LatestEvents />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="act-rules" element={<ActRules />} />
          <Route path="/annual-report" element={<AnnualReport />} />
          <Route path="/Organizational" element={<Organizational />} />
          <Route path="/judgement" element={<JudgmentList />} />
          <Route path="/mandal-commission" element={<MandalCommission />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/meeting" element={<MainContent />} />
          <Route path="/centralist" element={<Centralist />} />
          <Route path="/rules-of-procedures" element={<RulesOfProcedures />} />
          <Route path="/commission-report" element={<CommissionReport />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/dopt-memorandum" element={<Memorandum />} />
          <Route path="/ministry's-orders" element={<MinistryOrders />} />
          <Route path="/rti-act" element={<Table />} />
          <Route path="/advices" element={<Advices />} />
          <Route path="rti-act/info-handbook" element={<InfoHandbook />} />
          <Route
            path="rti-act/appellate-authority"
            element={<AppellateAuthority />}
          />
          <Route path="/advices/:stateName" element={<AdvicesTable />} />
          <Route path="/personal-profiles" element={<ComingSoon />} />
          <Route path="/notification-issued-by-ncbc" element={<ComingSoon />} />
          <Route
            path="/orders-circulars-on-matter-related-to-obcs"
            element={<ComingSoon />}
          />
          <Route
            path="/estabilishment-related-orders-circulars"
            element={<ComingSoon />}
          />
          <Route
            path="/proceedings-of-public-hearing"
            element={<ComingSoon />}
          />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/press-releases" element={<ComingSoon />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/event/:eventId" element={<EventView />} />{" "}
          {/* Event Details Route */}
          {/* Footer Pages */}
          <Route path="/related-links" element={<RelatedLinks />} />
          <Route path="/state-commission" element={<StateCommission />} />
          <Route
            path="/accessibility-statement"
            element={<AccessibilityStatement />}
          />
          <Route
            path="/accessibility-options"
            element={<AccessibilityOptions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/Disclaimer" element={<Disclaimer />} />
          <Route path="/copyright-policy" element={<CopyrightPolicy />} />
          <Route path="/hyperlinking-policy" element={<HyperlinkingPolicy />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/admin/dashboard/*" element={<MainFunc />} />
          <Route path="/so/dashboard/*" element={<SoDashboard />} />
          <Route path="/aso/dashboard/*" element={<AsoDashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </div>

      {!isDashboardRoute && <Footer />}
    </div>
  );
};

export default App;
