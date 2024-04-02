import React,{useState} from 'react'
// import Iits from "./Iits_navbar";
import { NavLink } from "react-router-dom";

import {useChapterpdfidQuery } from '../../../../services/userAuthApi';
import DLPDFconverter from './Dl-PDFconverter';
import Dl_navbar from './Dlnavbar'
import Downloading from './Downloading';

const Dlunitnotes = (props) => {
  const{data}=props
   const chapterpdf  =  useChapterpdfidQuery(data)
  //  console.log(chapterpdf);
  if (chapterpdf.isLoading) return <div>Loading....</div>
  const pf = chapterpdf.data.chapter_pdf_file
  console.log(pf)
  const pdfUrl ="http://127.0.0.1:8000"+pf
  console.log(pdfUrl)
  return (
    <>
    <Dl_navbar/>
         <div className="syllabus_header flex flex-row text-gray-300 text-center mx-4 px-9 pt-0 pb-5 leading-loose font-serif z-0">
            <div className='flex flex-col m-2 w-36 border-l-2'>
            <NavLink
                to={"/csit/dl/unitnotes1"}
                className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold p-2 hover:text-orange-800 hover:underline` }
              >
                unit-1
              </NavLink><hr/>
              <NavLink
                to={"/csit/dl/unitnotes2"}
                className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold p-2  hover:text-orange-800 hover:underline` }
              >
                unit-2
              </NavLink><hr/>
              <NavLink
                to={"/csit/dl/unitnotes3"}
                className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold p-2  hover:text-orange-800 hover:underline` }
              >
                unit-3
              </NavLink><hr/>
              <NavLink
                to={"/csit/dl/unitnotes4"}
                className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold p-2  hover:text-orange-800 hover:underline` }
              >
                unit-4
              </NavLink><hr/>
              <NavLink
                to={"/csit/dl/unitnotes5"}
                className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold p-2  hover:text-orange-800 hover:underline` }
              >
                unit-5
              </NavLink><hr/>
              <NavLink
                to={"/csit/dl/unitnotes6"}
                className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold p-2  hover:text-orange-800 hover:underline` }
              >
                unit-6
              </NavLink><hr/>
              <NavLink
                to={"/csit/dl/unitnotes7"}
                className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold p-2 hover:text-orange-800 hover:underline` }
              >
                unit-7
              </NavLink><hr/>
              <Downloading pdfUrl={pdfUrl}/>
            </div>
         <DLPDFconverter url={pdfUrl}/>
          </div>
    </>
  )
}

export default Dlunitnotes