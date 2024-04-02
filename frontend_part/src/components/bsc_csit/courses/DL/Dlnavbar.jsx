import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useCourseidQuery } from '../../../../services/userAuthApi';

// import Syllabus from "./Syllabus";
const Dl_navbar = () => {
  
  const courses =  useCourseidQuery(4)
  // console.log(courses);
  if (courses.isLoading) return <div>Loading....</div>
  return (
    <div>
        <div className="flex justify-center flex-col  text-red-900 z-0 mt-16 mb-2 m-12 px-1 pt-4  ">
        <div className=" text-left px-3 bg-black">
          <p className="text-3xl text-red-600 mb-1">
            
          {courses.data.course_name}
          </p>
          <p className="text-red-300 mb-1">
          {courses.data.description}
            This course introduces fundamental concepts of Information
            Technology and computer science.
          </p>
        </div>

        <div className="text-center bg-slate-500">
          <nav className="bg-light pt-2 pb-2">
            <div className="flex items-center">
              <NavLink
                to={"/csit/dl/syllabus"}
                className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold mx-12 hover:text-orange-800 hover:underline` }
              >
                Syllabus
              </NavLink>
              <div className="flex space-x-12">
                {/* <NavLink
                  to={"/csit/iit/chapter"}
                  className=" font-bold hover:text-green-800 hover:underline" 
                >
                  {" "}
                  Chapter
                </NavLink> */}
                <NavLink
                  to="/csit/dl/dllecture/"
                  className={  ({isActive}) =>
                  `${isActive ? "text-green-800" : "text-red-800"} font-bold mx-3 hover:text-orange-800 hover:underline` }
                >
                  Lectures
                </NavLink>
                <NavLink
                  to="/csit/dl/dlnotes"
                  className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold mx-12 hover:text-orange-800 hover:underline` }
              >
                  Handwritten Notes
                </NavLink>
                <NavLink
                  to="/csit/dl/unitnotes1"
                  className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold mx-12 hover:text-orange-800 hover:underline` }
              >
                  Chapter-wise Notes 
                </NavLink>{" "}
              </div>
            </div>
          </nav>
        </div>
      </div>

    </div>
  )
}

export default Dl_navbar