import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const LeadingCompany = () => {
  return (
    <div className="mx-16 mt-24">
      <h1 className="text-center text-xl text-slate-500">
        "Trust by Thousand's of leading Companies"
      </h1>
      <div className="flex items-center justify-end">
        <button className="flex items-center gap-x-2">
          Show more
          <FaLongArrowAltRight />
        </button>
      </div>
      <div className="flex items-center gap-x-8 mt-5">
        <img
          className="w-[120px] "
          src="https://www.batabd.com/cdn/shop/files/logo-2_d42c63ce-1f56-4af2-a68f-a4cc3a91bd07.png?v=1614332440"
          alt=""
        />
        <img
          className="w-[120px]"
          src="https://waltonbd.com/image/catalog/new_website/icon/logo/walton%20logo-update.svg"
          alt=""
        />
        <img
          className="w-[120px]"
          src="https://www.ryans.com/assets/images/ryans-logo.svg"
          alt=""
        />
        <img
          className="w-[120px]"
          src="https://vision.com.bd/images/logos/16/V.-logo-200x80.png"
          alt=""
        />
        <img
          className="w-[120px]"
          src="https://www.startech.com.bd/image/catalog/logo.png"
          alt=""
        />
        <img
          className="w-[120px]"
          src="https://www.othoba.com/Themes/Othoba/Content/images/logoOthoba.png"
          alt=""
        />
        <img
          className="w-[120px]"
          src="https://fabrilife.com/img/fabrilife.svg"
          alt=""
        />
        <img
          className="w-[120px]"
          src="https://easyfashion.com.bd/wp-content/uploads/2019/05/Asset-6-2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LeadingCompany;
