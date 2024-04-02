import React, { useState,useEffect,useRef } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import { Button } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { NavLink,useNavigate } from "react-router-dom";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import logo from "../../images/logo.png"
import { getToken,removeToken } from "../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { unsetUserToken } from "../../features/authSlice";
import { useGetLoggedUserQuery } from "../../services/userAuthApi";
import { setUserInfo} from "../../features/userSlice";
import Dropdown from "./Dropdown";
import Searching from "./Searching";
const Navbar = () => {
  const {access_token}= getToken();
  const navigate = useNavigate();
  // console.log(access_token);

  const dispatch = useDispatch();
   const { data, isSuccess } = useGetLoggedUserQuery(access_token)
  //console.log(data)


    const [userData, setUserData] = useState({
      email: "",
      name: ""
    })
  

    // Store User Data in Local State  ajhai kam baki xa that is showing email later we do it ok
    useEffect(() => {
      if (data && isSuccess) {
        setUserData({
          email: data.email,
          name: data.name,
        })
      }else{
        dispatch(unsetUserToken({ access_token: null }));
       removeToken();
      }
    }, [data, isSuccess])
  
  const [open,setopen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Store User Data in Redux Store optional if you want to show in other component for that we store in redux so that we can use whereever we want (video : get logged userdata)

  useEffect(() => {

    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }else{
      dispatch(unsetUserToken({ access_token: null }));
     removeToken();
    }

    function handleClickOutside(event) {//closing a dropdown when user click outside 
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setopen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

   
  }, [data, isSuccess, dispatch,dropdownRef]);

  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent the default behavior of NavLink
    setopen(!open);
  };
  
   
  // const handleLogout = () => {
  //   dispatch(unsetUserToken({ access_token: null }));
  //   removeToken();
  //   // console.log('user logout');
  //   // navigate('/login');
  // }
  
 
  
  return (
    <>
      <div className="text-2xl flex justify-between items-center  font-bold px-4 border-b-2 fixed w-full top-0 bg-black z-50">
        <NavLink to={"/"}  >
          <span>
            <img src={logo} alt="" className="w-20 h-20 mx-7 p-2"/>
          </span>
        </NavLink>
        <Searching/>
        
        <div className="flex flex-row-end space-x-16 pr-4 dropdown " ref={dropdownRef}>
        <NavLink to={"/"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"} hover:text-orange-700 pt-2`
                                    }>
          <span >
            Home
          </span>
        </NavLink>
        <NavLink to={"/csit"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"}  hover:text-orange-700 pt-2`
                                    }>
          <span>
            Courses 
          </span>
        </NavLink>
             
           {access_token ? 

            <NavLink onClick={toggleDropdown} className= 'dropbtn text-red-700 flex flex-col float-none items-center  text-xl hover:text-orange-700' >
             <AccountBoxIcon/>Profile {open ? <Dropdown />:""}    </NavLink>    :


          <NavLink to="/register" className={({isActive}) =>
                               ` ${isActive ? "text-green-400" : "text-red-700"}  hover:text-orange-700 flex flex-col items-center text-xl p-1 `
                                    }
          ><AppRegistrationIcon/> Register/Login</NavLink>
           }
      </div>
      </div>
     
    </>
  );
};

export default Navbar;