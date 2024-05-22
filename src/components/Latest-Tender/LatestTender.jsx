import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import TenderInformation from "./TenderInformations";

const LatestTender = () => {
  return (
    <div className="mt-36 bg-slate-100 py-10">
      <div className="mx-16 ">
        <h1 className="flex items-center gap-x-4 text-2xl font-bold text-[#0d3c94]">
          <MdDoubleArrow /> Latest Tenders
        </h1>
        <div>
          <TenderInformation />
        </div>
      </div>
    </div>
  );
};

export default LatestTender;
