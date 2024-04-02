import React, { useState,useEffect,useRef } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useCoursesQuery } from "../../services/userAuthApi";
import { NavLink } from "react-router-dom";

const Searching = () => {
  const { data, isSuccess } = useCoursesQuery();
  // console.log(data);
  const [courseData, setcourseData] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const dropdownsRef = useRef(null);
  // console.log(courseData);
 
  useEffect(() => {
    
    function handleClickOutside(event) {
      if (dropdownsRef.current && !dropdownsRef.current.contains(event.target)) {
        setisOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownsRef]);

  const handleInputChange = (e) => {
    // Open dropdown when input field is not empty
     setcourseData(e.target.value);
    setisOpen(e.target.value.trim() !== '');
  };

  return (
    <div className=" flex space-x-2 items-center">
      <div className="navbarsearch  items-center flex flex-col space-y-9" ref={dropdownsRef}>
        <input
          type="text"
          placeholder="search course..."
          className="px-9 outline-none align-middle text-white bg-black font-medium border border-gray-400 border-solid rounded-md"
          onChange={handleInputChange}
          // onClick={() => setisOpen(!isOpen)}
          
        />
        {isSuccess && isOpen && (
        <div className="bg-black text-white absolute  px-16 max-h-min rounded-xl  ">
          {/* Dropdown content goes here */}
          {/* <p className="">{courseData}</p> */}
          {data
  .filter((item) => {
    return courseData.toLowerCase() === ''
      ? item
      : item.course_name.toLowerCase().includes(courseData);
  })
  .map((item, index) => (
    <div key={index}>
      <NavLink to={`/csit/${item.stform}/syllabus`}>{item.course_name}</NavLink><hr/>
    </div>
  ))}

        </div>
      )}
      
      </div>
      {/* <SearchOutlinedIcon className="rounded-lg text-white items-center cursor-pointer hover:bg-slate-900" /> */}

    </div>
  );
};

export default Searching;
