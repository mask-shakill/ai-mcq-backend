import React from "react";
import videoUrl from "../../../public/images/v2.mp4";
import "../Home/Home.css";
import {
  MdDoubleArrow,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
const PlayVideo = () => {
  return (
    <div className="video-container mx-16 p-4  mt-10 ">
      <h1 className="flex items-center gap-x-4 text-2xl mb-3 font-bold text-[#0d3c94]">
        <MdDoubleArrow /> Procurement Software Demo
      </h1>
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        className="video-element"
      ></video>
    </div>
  );
};

export default PlayVideo;
