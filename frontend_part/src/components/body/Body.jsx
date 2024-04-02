import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import handwrittennote from "../../images/handwrittennote.jpg";
import practicalfile from "../../images/practicalfile.jpg";
import importantquestion from "../../images/importantquestion.jpg";
import PreviousPapers from "../../images/PreviousPapers.png";
import questionanswer from "../../images/questionanswer.jpg";
import video from "../../images/video.png";
import syllabus from "../../images/syllabus.png";
import textbook from "../../images/textbook.png";
import sadan from "../../images/sadan.jpg";
import pravin from "../../images/pravin.jpg";
import pranaya from "../../images/pranaya3.jpg";


import "./body.css";
import Footer from "../footer/Footer";
const Body = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="text-white font-serif  text-center m-20 p-20 font-bold text-2xl items-center">
          We are here to educate you for free
        </div>
        <div>
          <img src={logo} alt="" className="h-50 w-50 p-4 m-3.5 mt-20" />
        </div>
      </div>
      <hr className="border-8 bg-gray-500" />
      
        <h1 className="text-center text-white p-5 text-2xl m-2">
          What we provide
        </h1>
        <div className="features flex justify-between items-center flex-wrap ml-5 mr-5 mb-3">
          <div className="fe_box cursor-pointer ">
            <img
              src={handwrittennote}
              alt=""
              className="p-2 h-40 w-40 hover:-translate-y-3 transition-all duration-500 rounded-3xl"
            />
            <h6>Handwritten Notes</h6>
          </div>
          <div className="fe_box cursor-pointer">
            <img
              src={questionanswer}
              alt=""
              className="p-2 h-40 w-40 hover:-translate-y-3 transition-all duration-500 rounded-3xl"
            />
            <h6>Question Answer</h6>
          </div>
          <div className="fe_box cursor-pointer">
            <img
              src={PreviousPapers}
              alt=""
              className="p-2 h-40 w-40 hover:-translate-y-3 transition-all duration-500 rounded-3xl"
            />
            <h6>Previous Papers</h6>
          </div>
          <div className="fe_box cursor-pointer">
            <img
              src={importantquestion}
              alt=""
              className="p-2 h-40 w-40 hover:-translate-y-3 transition-all duration-500 rounded-3xl"
            />
            <h6>Important Question</h6>
          </div>
          <div className="fe_box cursor-pointer">
            <img
              src={textbook}
              alt=""
              className="p-2 h-40 w-40 hover:-translate-y-3 transition-all duration-500 rounded-3xl"
            />
            <h6>Text Book</h6>
          </div>
          <div className="fe_box cursor-pointer">
            <img
              src={video}
              alt=""
              className="p-2 h-40 w-40 hover:-translate-y-3 transition-all duration-500 rounded-3xl"
            />
            <h6>Video Tutorials</h6>
          </div>
          <div className="fe_box cursor-pointer">
            <img
              src={syllabus}
              alt=""
              className="p-2 h-40 w-40 hover:-translate-y-3 transition-all duration-500 rounded-3xl"
            />
            <h6>Syllabus</h6>
          </div>
          <div className="fe_box cursor-pointer">
            <img
              src={practicalfile}
              alt=""
              className="p-2 h-40 w-40 hover:-translate-y-3 transition-all duration-500 rounded-3xl"
            />
            <h6>Practical Files</h6>
          </div>
        </div>
        <hr className="border-8" />
        <h1 className="text-center text-white p-2 text-2xl m-2">OUR TEAM</h1>
        <div className="features2 flex  items-center  mb-3 px-96 ">
          <div className="fe_box2 cursor-pointer mx-14">
            <img
              src={pranaya}
              alt=""
              className="p-2 h-40 w-40 hover:-translate-y-3 transition-all duration-500 object-cover rounded-full"
            />
            <h6 className="mb-5 rounded-3xl">Pranaya Ghimire</h6>
          </div>
          <div className="fe_box2 cursor-pointer  mx-4">
            <img
              src={pravin}
              alt=""
              className="p-2 h-40 w-40 hover:-translate-y-3 transition-all duration-500 object-cover rounded-full"
            />
            <h6 className="mb-5 rounded-3xl">Pravin Gupta</h6>
          </div>

          <div className="fe_box2 cursor-pointer mx-14">
            <img
              src={sadan}
              alt=""
              className="p-2 h-40 w-40 hover:-translate-y-3 transition-all duration-500 object-center object-cover rounded-full"
            />
            <h6 className="mb-5 rounded-3xl">Sadan Subedi</h6>
          </div>
        </div>
      <hr className="border-8"/>
      <Footer/> 
    </>
  );
};

export default Body;
