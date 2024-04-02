import React, { useEffect } from "react";
import {useCoursevideoidQuery } from '../../../../services/userAuthApi';
import Iits from "./Iits_navbar";
const Lectures = () => {
  const coursesvideo  = useCoursevideoidQuery(6)
    // console.log( coursesvideo);
  if ( coursesvideo.isLoading) return <div>Loading....</div>
  const pf = coursesvideo.data.video_file
  // console.log(pf);
  return (
    <>
      <Iits />
      <div className="syllabus_header text-gray-300 text-center mx-16 px-9 pt-0 pb-5 leading-loose font-serif">  
      
      <iframe width="100%" height="600"
      src={pf}
         title="YouTube Video"
          frameBorder="0"
          allowFullScreen
      ></iframe>
      
      </div>
    </>
  );
};

export default Lectures;