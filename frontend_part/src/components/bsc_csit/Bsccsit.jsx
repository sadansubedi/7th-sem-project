import React from "react";
import { Link } from "react-router-dom";
// import { useCourseMutation } from "../../services/userAuthApi";
// import Iit from "../courses/IIT/Iit";

const Bsccsit = () => {
  // const [course] =  useCourseMutation()
// console.log(course);
// axios.get("")
  return (
    <>
      <div className="flex justify-center flex-col  mt-16 mb-6 m-12 px-9 py-2 bg-black">
        <div className=" text-center">
          <p className="text-6xl text-gray-200 my-4">CSIT courses</p>
          <p className="text-red-300 mb-3">
            These are all the courses in CSIT course offered by TU. CSIT have 65
            courses, among which 36 are compulsory & 29 are elective.
          </p>
        </div>

        <div className="flex flex-wrap ">
          {/* <!-- First Semester --> */}
          <div className="lg:w-1/4 md:w-1/2 sm:w-full mt-4">
            <ul>
              <h3 className="text-lg font-bold ml-5 text-red-600">
                First Semester
              </h3>
              <li>
                <Link
                  to={"/csit/iit/syllabus"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Introduction to Information Technology
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - C Programming
                </Link>
              </li>
              <li>
                <Link
                  to={"/csit/dl/syllabus"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Digital Logic
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Mathematics I (Calculus)
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  -Physics
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Second Semester --> */}
          <div className="lg:w-1/4 md:w-1/2 sm:w-full mt-4">
            <ul>
              <h3 className="text-lg font-bold ml-5 text-red-600">
                Second Semester
              </h3>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Discrete Structures
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3  hover:underline  hover:text-green-500"
                >
                  - Object Oriented Programming
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Microprocessor
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Mathematics II
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Statistics I
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Third Semester --> */}

          <div className="lg:w-1/4 md:w-1/2 sm:w-full mt-4">
            <ul>
              <h3 className="text-lg font-bold ml-5 text-red-600">
                Third Semester
              </h3>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Data Structures and Algorithms
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Numerical Method
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Computer Architecture
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Computer Graphics
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Statistics II
                </Link>
              </li>
              {/* <!-- ... (Repeat the structure for the sixth semester courses) -->/ */}
            </ul>
          </div>
          {/* <!-- ... (Repeat the structure for other semesters) --> */}

          {/* <!-- Fourth Semester --> */}
          <div className="lg:w-1/4 md:w-1/2 sm:w-full mt-4">
            <ul>
              <h3 className="text-lg font-bold ml-5 text-red-600">
                Fourth Semester
              </h3>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Theory of Computation
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Computer Networks
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Operating Systems
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Database Management System
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 p-3 hover:underline  hover:text-green-500"
                >
                  - Artificial Intelligence
                </Link>
              </li>
              {/* <!-- ... (Repeat the structure for the fourth semester courses) --> */}
            </ul>
          </div>

          {/* <!-- Fifth Semester --> */}

          <div className="lg:w-1/4 md:w-1/2 sm:w-full mt-4">
            <ul>
              <h3 className="text-lg font-bold m-2 text-red-600">
                fifth Semester
              </h3>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-3 hover:underline  hover:text-green-500"
                >
                  - Design and Analysis of Algorithms
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-3 hover:underline  hover:text-green-500"
                >
                  - System Analysis and Design
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Cryptography
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Simulation and Modelling
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Web Technology
                </Link>
              </li>
              <h5 className="text-gray-400 text-lg mx-3">Electives :-</h5>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Multimedia Computing
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Wireless Networking
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Image Processing
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Knowledge Management
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-1 w-full hover:underline  hover:text-green-500 "
                >
                  - Society & Ethics in Information Technology
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Microprocessor Based Design
                </Link>
              </li>
              {/* <!-- ... (Repeat the structure for the sixth semester courses) -->/ */}
            </ul>
          </div>
          {/* <!-- ... (Repeat the structure for other semesters) --> */}

          {/* <!-- Sixth Semester --> */}
          <div className="lg:w-1/4 md:w-1/2 sm:w-full mt-4">
            <ul>
              <h3 className="text-lg font-bold m-2 text-red-600">
                Sixth Semester
              </h3>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Software Engineering
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Compiler Design and Construction
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - E-Governance
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - NET Centric Computing
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Technical Writing
                </Link>
              </li>
              <li>
                <h5 className="text-gray-400 text-lg mx-3">Electives :-</h5>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Applied Logic
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - E-commerce
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Automation and Robotics
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Neural Networks
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Computer Hardware Design
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Cognitive Science
                </Link>
              </li>
              {/* <!-- ... (Repeat the structure for the sixth semester courses) -->/ */}
            </ul>
          </div>

          {/* <!-- Seventh Semester --> */}

          <div className="lg:w-1/4 md:w-1/2 sm:w-full mt-4">
            <ul>
              <h3 className="text-lg font-bold m-2 text-red-600">
                Seventh Semester
              </h3>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Advanced Java Programming
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Data Warehousing and Data Mining
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Principles of Management
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Project Work
                </Link>
              </li>
              <li>
                <h5 className="text-gray-400 text-lg mx-3">Electives :-</h5>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Information Retrieval
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Database Administration
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Software Project Management
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Network Security
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Digital System Design
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Network and System Administration
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - International Marketing
                </Link>
              </li>
              {/* <!-- ... (Repeat the structure for the sixth semester courses) -->/ */}
            </ul>
          </div>
          {/* <!-- ... (Repeat the structure for other semesters) --> */}

          {/* <!-- Eighth Semester --> */}
          <div className="lg:w-1/4 md:w-1/2 sm:w-full mt-4">
            <ul>
              <h3 className="text-lg font-bold m-2 text-red-600">
                Eighth Semester
              </h3>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Advanced Database
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Internship
                </Link>
              </li>
              <li>
                <h5 className="text-gray-400 text-lg mx-3">Electives :-</h5>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Advanced Networking with IPv6
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Distributed Networking
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Game Technology
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Distributed and Object Oriented Database
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Introduction to Cloud Computing
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Geographical Information System
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Decision Support System & Expert System
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Mobile Application Development
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - Embedded Systems Programming
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-blue-500 m-2 hover:underline  hover:text-green-500"
                >
                  - International Business Management
                </Link>
              </li>
              {/* <!-- ... (Repeat the structure for the eighth semester courses) --> */}
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-8" />
    </>
  );
};

export default Bsccsit;
