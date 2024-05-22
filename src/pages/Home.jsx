import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import LeadingCompany from "../components/LeadingCompany/LeadingCompany";
import LatestTender from "../components/Latest-Tender/LatestTender";
import Events from "../components/Home/Events";
import TopClients from "../components/Home/TopClients";
import PlayVideo from "../components/Home/PlayVideo";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <LeadingCompany />
      <LatestTender />
      <Events />
      <TopClients />
      <PlayVideo />
    </div>
  );
};

export default Home;
