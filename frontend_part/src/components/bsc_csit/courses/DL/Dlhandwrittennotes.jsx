import React,{useState} from 'react'
// import Iits from "./Iits_navbar";
import {useCoursepdfidQuery } from '../../../../services/userAuthApi';
import DLPDFconverter from './Dl-PDFconverter';
import Dl_navbar from './Dlnavbar'

const Dlhandwrittennotes = () => {

   const coursespdf  =  useCoursepdfidQuery(4)
  //  console.log(coursespdf);
  if (coursespdf.isLoading) return <div>Loading....</div>
  const pf = coursespdf.data.pdf_file
  console.log(pf)
  const pdfUrl ="http://127.0.0.1:8000"+pf
  console.log(pdfUrl)
  return (
    <>
    <Dl_navbar/>
         <div className="syllabus_header text-gray-300 text-center mx-16 px-9 pt-0 pb-5 leading-loose font-serif z-0">
         <DLPDFconverter url={pdfUrl}/>
          </div>
    </>
  )
}

export default Dlhandwrittennotes