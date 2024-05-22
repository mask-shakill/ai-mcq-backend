import React from "react";
import BannerImage from "../../../public/images/banner.png";
import CountUp from "react-countup";
import { IoBarChartSharp } from "react-icons/io5";
import { VscVmRunning } from "react-icons/vsc";

const HeroBanner = () => {
  return (
    <div className="flex w-full h-[500px] bg-slate-100">
      <section className="w-1/2  ml-32 mt-28">
        <h1 className="uppercase">
          <span className="text-[#0d9488]">" --------</span> We are here for you
        </h1>
        <p className="text-4xl font-semibold leading-[50px] font-serif">
          Optimize <span className="text-[#0d9488]">Procurement</span> with
          intelligent efficient and <br />
          <span className="text-[#0d9488]">Smart</span> solutions
        </p>
        <div className="flex items-center gap-x-4 mt-10">
          <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">
            Learn more
          </button>
          <button className="px-4 py-2 border border-slate-700 rounded-lg">
            Get Started
          </button>
        </div>
      </section>

      <section className="relative w-1/2 ml-[210px] ">
        <div className="bg-[#0d9488] h-[360px] w-[360px]  rounded-full absolute top-[90px] right-[170px]"></div>
        <div className="absolute">
          <img className="w-[330px] h-[500px]" src={BannerImage} alt="" />
        </div>

        <div className="w-[200px] h-[90px] flex rounded-lg shadow-lg shadow-blue-400 bg-white absolute top-14 right-10">
          <div className="text-center  p-3">
            <CountUp start={0} end={6500} duration={20} separator="," prefix="">
              {({ countUpRef }) => (
                <div className="font-bold text-2xl text-blue-800">
                  <span ref={countUpRef} />
                  <span>+</span>
                </div>
              )}
            </CountUp>
            <p className="font-semibold flex items-center gap-x-2">
              Total Tenders{" "}
              <IoBarChartSharp className="text-xl text-green-500" />
            </p>
          </div>
        </div>

        <div className="w-[200px] h-[90px] flex rounded-lg shadow-lg shadow-teal-400 bg-white absolute top-[250px] -left-[150px]">
          <div className="text-center  p-3">
            <CountUp start={0} end={1500} duration={20} separator="," prefix="">
              {({ countUpRef }) => (
                <div className="font-bold text-2xl text-blue-800">
                  <span ref={countUpRef} />
                  <span>+</span>
                </div>
              )}
            </CountUp>
            <p className="font-semibold flex items-center gap-x-2">
              New Tenders Live
              <VscVmRunning className="text-xl text-blue-500" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
