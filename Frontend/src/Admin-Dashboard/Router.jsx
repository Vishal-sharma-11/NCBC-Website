import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import App from "./App";
import { Dashboard, Team, Invoices, Contacts, Form } from "./scenes";
import AboutUs from "./scenes/AboutUs/AboutUs";
import AdminRules from "./scenes/RulesOfProcedure/RulesOfProcedure";
import OrganizationalStructure from "./scenes/OrganizationalStructure";
import MandalCommission from "./scenes/MandalCommission";
import AnnualReport from "./scenes/AnnualReport";
import CommissionReport from "./scenes/CommissionReport";
import JudgementHearing from "./scenes/Judgement";
import Centralist from "./scenes/Centralist";
import Memorandum from "./scenes/Memorandum";
import MinistryOrder from "./scenes/ministry-order";
import Notice from "./scenes/notices";
import Meeting from "./scenes/Meetings";
import MenuManagement from "./scenes/MenuManagement";
import AdviceList from "./scenes/Advices";
import NcbcAct from "./scenes/ncbc-act";
import VideoGallery from "./scenes/Video-Gallery";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/rules-of-procedure" element={<AdminRules />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="form" element={<Form />} />
        <Route
          path="/organizational-structure"
          element={<OrganizationalStructure />}
        />
        <Route path="/mandal-commission" element={<MandalCommission />} />
        <Route path="/annual-report" element={<AnnualReport />} />
        <Route path="/commission-report" element={<CommissionReport />} />
        <Route path="/judgement-hearing" element={<JudgementHearing />} />
        <Route path="/centralist" element={<Centralist />} />
        <Route path="/memorandum" element={<Memorandum />} />
        <Route path="/ministry" element={<MinistryOrder />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/menu-management" element={<MenuManagement />} />
        <Route path="/advice" element={<AdviceList />} />
        <Route path="/ncbc-act" element={<NcbcAct />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
