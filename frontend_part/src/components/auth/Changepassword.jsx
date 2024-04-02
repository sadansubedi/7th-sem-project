import React,{ useState,useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import { useChangeUserPasswordMutation } from '../../services/userAuthApi';
import { getToken } from '../../services/LocalStorageService';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setUserToken } from "../../features/authSlice";


const Changepassword = () => {
    
    const [server_error, setServerError] = useState({})
    const [server_msg, setServerMsg] = useState({})
    const [changeUserPassword] = useChangeUserPasswordMutation()
    const { access_token } = getToken()
  const dispatch = useDispatch();

    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData = {
          password: data.get('password'),
          password2: data.get('password2'),
        }
        const res = await changeUserPassword({ actualData, access_token })
        if (res.error) {
          setServerMsg({})
          setServerError(res.error.data.errors)
        }
        if (res.data) {
          console.log(res.data)
          setServerError({})
          setServerMsg(res.data)
          document.getElementById("password-change-form").reset();
        }
        
      };
      // const myData = useSelector(state => state.user)
      // console.log(myData);
      useEffect(()=>{
        dispatch(setUserToken({access_token :access_token}))// it is set in reducer (authSlice.js)
      },[access_token,dispatch])
    
  return (
    <>
            <div className="flex flex-col flex-wrap max-w-96 mx-16 mt-32 p-4">
  <h1 className="mb-4 text-white text-center text-xl">Change Password</h1>
  <form onSubmit={handleSubmit} className="mt-4 space-y-4" id="password-change-form" noValidate>
    <input 
      className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-500" 
      required 
      name="password" 
      placeholder="New Password" 
      type="password" 
      id="password" 
    />
     {server_error.password ?  <div className= 'text-red-700'>
              { server_error.password[0]}</div> : ''
      }
    <input 
      className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-500" 
      required 
      name="password2" 
      placeholder="Confirm New Password" 
      type="password" 
      id="password2" 
    />
     {server_error.password2 ?  <div className= 'text-red-700'>
              { server_error.password2[0]}</div> : ''
      }
      {server_msg.msg ?  <div className= 'text-green-700'>
              {server_msg.msg}</div> : ''
      }
    <div className="text-center">
      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
      >
        Update
      </button>
    </div>
    {server_error.non_field_errors ?  <div className= 'text-red-700'>
              { server_error.non_field_errors[0]}</div> : ''
    }
  </form>
</div>

    </>
  )
}

export default Changepassword