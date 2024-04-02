import React,{useState} from 'react'
// import Syllabus from './Syllabus'
import Iits from "./Iits_navbar";

const Chapter = () => {

  return (
    <>
    <Iits/>
    <div className="chapter_header text-gray-300 text-center mx-16 px-9 pb-5 pt-0 leading-loose font-serif">
        <p>Worst Tribhuvan University</p>
         <p>Worst  Institute of Science and Technology</p>
        <p>Worst Bachelor of Science in Computer Science and Information Technology</p>

        <div class="flex justify-between ">
            <div class="">
             <div class="marks_header text-left">
                <p>Course Title: Introduction to Information Technology</p>
                <p>Course no: CSC109</p>
                <p>Semester: I</p>
                <p>Nature of course: Theory + Lab</p>
              </div>
            </div>
            <div class="">
            <div class="text-left" >
             <p>Full Marks: 60 + 20 + 20</p>
            <p>Pass Marks: 24 + 8 + 8</p>
            <p>Credit Hours: 3</p>
           </div>
          </div> 
        </div>
        <div class="text-left pt-3 ">
            <p><strong>Course Description : </strong>
             This course covers the basic concepts of computer and information technology, including introduction, hardware, software, memory, input/output, database , data representation,  network and data communication, internet, multimedia and computer security.</p>
             <p><strong>Course Objective : </strong> The main objective of this course is to provide students knowledge of fundamental concepts of computers and information technology.</p>
            <h5 class="my-4 text-2xl text-red-700 ">Course Contents:</h5>
            <div class="mb-7">
               <h6 className='flex justify-between items-center'> Unit 1. Introduction to Computer<span className="justify-between mr-4">3 Hrs.</span> </h6>
                <p>Introduction; Digital and Analog Computers ; Characteristics of Computer ; History of Computer ; generations of Computer ; Classification of Computer ; The Computer System ; Application of computers</p>   
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between'> Unit 2. The Computer System Hardware<span className="justify-between mr-4">3 Hrs.</span> </h6>
                <p>Introduction; Central Processing Unit; Memory Unit; Instruction Format; Instruction Set; Instruction Cycle; Microprocessor; Interconnecting the Units of a Computer; Inside a Computer Cabinet</p>   
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between'> Unit 3. Computer Memory<span className="justify-between mr-4">4 Hrs.</span> </h6>
                <p>Introduction, Memory Representation, Memory Hierarchy, CPU Registers, Cache Memory, Primary Memory, Secondary Memory, Access Types of Storage Devices, Magnetic Tape, Magnetic Disk, Optical Disk, Magneto-Optical Disk, How the Computer uses its memory</p>
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between'> Unit 4. Input and Output Devices<span className="justify-between mr-4">4 Hrs.</span> </h6>
                <p>Introduction, Input-Output Unit, Input Devices, Human Data Entry Devices, Source Data Entry Devices, Output Devices, I/O Port, Working of I/O System</p>   
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between'>  Unit 5. Data Representation<span className="justify-between mr-4">6 Hrs.</span> </h6>
                <p>Introduction, Number System, Conversion from Decimal to Binary, Octal, Hexadecimal, Conversion of Binary, Octal, Hexadecimal to Decimal, Conversion of Binary to Octal, Hexadecimal, Conversion of Octal, Hexadecimal to Binary, Binary Arithmetic, Signed and Unsigned Numbers, Binary Data Representation, Binary Coding Schemes, Logic Gates</p>   
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between'> Unit 6. Computer Software <span className="justify-between mr-4">6 Hrs.</span> </h6>
                <p>Introduction, Types of Software, System Software, Application Software, Software Acquisition, Operating System (Introduction, Objectives of Operating System, Types of OS, Functions of OS, Process Management, Memory Management, File Management, Device Management, Protection and Security, User Interface, Examples of Operating Systems) </p>   
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between items-center'> Unit 7. Data Communication and Computer Network <span className="justify-between mr-4">5 Hrs.</span> </h6>
                <p>Introduction, Importance of Networking, Data Transmission Media, Data Transmission across Media, Data Transmission and Data Networking, Computer Network, Network Types, Network Topology, Communication Protocol, Network Devices, Wireless Networking</p>   
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between'> Unit 8. The Internet and Internet Services <span className="justify-between mr-4">4 Hrs.</span> </h6>
                <p>Introduction, History of Internet, Internetworking Protocol, The Internet Architecture, Managing the Internet, Connecting to Internet, Internet Connections, Internet Address, Internet Services, Uses of Internet, Introduction to Internet of Things (IoT), Wearable Computing, and Cloud Computing, Introduction to E-commerce, E-governance, and Smart City, and GIS</p>   
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between'> Unit 9. Fundamentals of Database <span className="justify-between mr-4">4 Hrs.</span> </h6>
                <p>Introduction, Database, Database System, Database Management System, Database System Architectures, Database Applications, Introduction to Data Warehousing, Data mining, and BigData</p>   
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between'>  Unit 10. Multimedia  <span className="justify-between mr-4">3 Hrs.</span> </h6>
                <p>Introduction, Multimedia - Definition, Characteristics of Multimedia, Elements of Multimedia, Multimedia Applications</p>   
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between'>  Unit 11. Computer Security<span className="justify-between mr-4">3 Hrs.</span> </h6>
                <p>Introduction, Security Threat and Security Attack, Malicious Software, Security Services, Security Mechanisms (Cryptography, Digital Signature, Firewall, Users Identification and Authentication, Intrusion Detection Systems), Security Awareness, Security Policy</p>   
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between'>  Laboratory Works:</h6>
                <p>After completing this course, students should have practical knowledge of various hardware components of computer, operating systems, Word Processors, Spreadsheets, Presentation Graphics, management Systems, and Internet and its services.</p>   
             </div>
             <div class="mb-7">
               <h6 className='flex justify-between'> Text Books: </h6>
                <p>Computer Fundamentals, Anita Goel, Pearson Education India</p>  

             </div>
          </div>
          

     </div>
    <hr className='border-8'/>
   
    </>
  )
}

export default Chapter