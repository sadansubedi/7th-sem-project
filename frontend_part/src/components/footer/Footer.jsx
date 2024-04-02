import React from 'react'
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css"
const Footer = () => {
  return (
    <>
          <div className="section-p1">
        <div className="col text-white">
            <img src={logo} className="logo mb-4 pt-2 w-20 h-20" alt=""/>
            <h4 className="pb-4 text-sm">Contact</h4>
            <p><strong>Address : </strong>Bharatpur chitwan Nepal</p>
            <p><strong>Phone : </strong>9800000000</p>
            <p><strong>Hours : </strong>Open:-10:00-18:00,Sun-Sat</p>
            <div className="mt-5 text-white">
                <h4>Follow us</h4>
                <div className="icon">
                  <FacebookIcon className="text-white pr-0.5 mr-2 cursor-pointer"/>
                  <TwitterIcon className="text-white pr-0.5 mr-2 cursor-pointer"/>
                  <InstagramIcon className="text-white pr-0.5 mr-2 cursor-pointer"/>
                  <YouTubeIcon className="text-white pr-0.5 mr-2 cursor-pointer"/>
                </div>
            </div>
        </div>
        <div className="col">
            <h4 className="text-white m-2">About</h4>
            <Link to={'/'} className="text-sm mb-2.5 no-underline text-pink-500">About us</Link>
            <Link to={'/'} className="text-sm mb-2.5 no-underline text-pink-500">Privacy Policy</Link>
            <Link to={'/'} className="text-sm mb-2.5 no-underline text-pink-500">Terms & Conditions</Link>
            <Link to={'/'} className="text-sm mb-2.5 no-underline text-pink-500">Contact us</Link>
        </div>
        <div className="col">
            <h4 className="text-white m-2">My Account</h4>
            <Link to={'/'} className="text-sm mb-2.5 no-underline text-pink-500">Sign In</Link>
            <Link to={'/'} className="text-sm mb-2.5 no-underline text-pink-500">View courses</Link>
            <Link to={'/'} className="text-sm mb-2.5 no-underline text-pink-500">Help</Link>
        </div>

        <div className="copyright w-full justify-center text-white">
            <p className="text-center font-medium mb-3">© 2023 - Parpasa_group. All Rights Reserved | </p>
        </div>
    </div>

    </>
  )
}

export default Footer