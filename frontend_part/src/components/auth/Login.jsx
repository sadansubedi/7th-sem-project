import React,{useEffect, useState} from "react";
import { NavLink,  useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/userAuthApi";
import "./login.css";
import { getToken,removeToken, storeToken } from "../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { setUserToken, unsetUserToken } from "../../features/authSlice";
const Login = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [loginUser,{isLoading}]= useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    const res = await loginUser(actualData);
    // console.log(res);
    if(res.error){
    console.log(res.error.data.errors);
      setServerError(res.error.data.errors);
    }  else if(res.data){
      storeToken(res.data.token);
      let {access_token}= getToken();
       dispatch(setUserToken({access_token :access_token}))// it is set in reducer (authSlice.js)
      navigate('/csit');

     } //else if(isAccessTokenExpired(res.data.token)) {
  //     removeToken();
  //     dispatch(unsetUserToken({ access_token: null }))
  //     navigate('/login');

  //     console.log('Access token is expired, please log in again.');
  //     // Optionally, you can prompt the user to log in again or refresh the tokens automatically
  // }
   
  }
  
  let {access_token}= getToken();

  useEffect(()=>{
    dispatch(setUserToken({access_token :access_token}))// it is set in reducer (authSlice.js)
  },[access_token,dispatch])

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            iste atque aut, corrupti magni fugit velit blanditiis nihil tempore
            eveniet culpa exercitationem!
          </p>
          <span>Don't you have an account?</span>

          <NavLink to="/register">
            <button className="button1">Register </button>
          </NavLink>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form id='login-form' onSubmit={handleSubmit}>
            <input type="email" id='email' name='email' placeholder="Email" />
            {server_error.email ?  <div className= 'text-red-700'>
              { server_error.email[0]}</div> : ''
              }
            <input type="password" id='password' name='password' placeholder="Password" />
            {server_error.password ?  <div className= 'text-red-700'>
              { server_error.password[0]}</div> : ''
              }
            <button type="submit">Login</button>
        
          </form>
          {server_error.non_field_errors ?  <div className= 'text-red-700'>
              { server_error.non_field_errors[0]}</div> : ''
              }
          <NavLink to='/sendpasswordresetemail' className='underline'>Forgot Password ?</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Login;