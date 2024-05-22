import React from "react";
import { Link } from "react-router-dom";
import { RiCustomerService2Line, RiMenu5Fill } from "react-icons/ri";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaLock,
} from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Header = () => {
  return (
    <nav className="bg-[#0d8ee3]">
      <section className=" py-2 flex items-center justify-between">
        <div className="flex items-center text-white text-md gap-x-1 ms-16">
          <RiCustomerService2Line /> <h1>Support: +13331</h1>
        </div>
        <div className="flex items-center mr-[540px] ">
          <h1 className="text-white">Share:</h1>
          <div className="flex text-white items-center gap-x-4 ml-3">
            <FaFacebookF />
            <FaXTwitter />
            <FaGooglePlusG className="text-xl" />
            <CgMail className="text-xl" />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="mr-14">
          <div className="flex items-center gap-x-2 ">
            <label className="text-white ">Language</label>
            <div className="">
              <select
                id="language"
                name="language"
                className="border border-black rounded text-sm focus:outline-none "
              >
                <option value="english">English</option>
                <option value="bangla">বাংলা</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  flex items-center justify-between">
        <div className="flex items-center">
          {/* <RiMenu5Fill className="text-3xl font-semibold text-blue-800" /> */}
          <div className="text-sm  py-3 pl-3 pr-6 bg-gray-50  font-serif text-black ">
            <h1 className="font-serif text-lg">3:15 PM</h1>
            <h1 className="">Tuesday, May 21, 2024 (GMT+6) </h1>
          </div>
          <div className="flex items-center ml-10 gap-x-1">
            <FcSmartphoneTablet className="text-4xl" />
            <h1 className="font-semibold text-2xl text-blue-900 ">
              Smart Procurement
            </h1>
          </div>
        </div>

        <div className="">
          <form className="border border-slate-300 rounded ">
            <input
              className="focus:outline-none w-[300px] px-2"
              placeholder="Search your Procurement.."
              type="text"
            />
            <button className="bg-blue-500 px-3 py-1 text-white">Search</button>
          </form>
        </div>

        <div className="mr-5">
          {/* <button className="bg-teal-600 px-5 py-2 rounded-full text-white font-semibold">
            Account
          </button> */}
          <h1 className="flex items-center gap-x-1 text-teal-800">
            Login / Register <FaLock />
          </h1>
        </div>
      </section>

      <section className="  flex items-center">
        <div className="bg-teal-600 pr-[46px] py-2 pl-2 font-bold">
          <h1 className="flex items-center gap-x-1 text-white">
            <RiMenu5Fill className="text-xl " />{" "}
            <span className="ml-3">All Categories</span>
            <MdArrowDropDown className="text-2xl" />
          </h1>
        </div>

        <ul className="flex items-center gap-x-8 ml-20 text-white font-semibold">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Live Tenders</Link>
          <Link to={"/"}>Latest Tenders</Link>
          <Link to={"/"}>Our Clients</Link>
          <Link to={"/"}>News</Link>
          <Link to={"/"}>Software demo</Link>
          <Link to={"/"}>Events</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Contact</Link>
        </ul>
      </section>
    </nav>
  );
};

export default Header;
