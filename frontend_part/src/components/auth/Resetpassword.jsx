import React,{ useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { useResetPasswordMutation } from '../../services/userAuthApi';
const Resetpassword = () => {
    const navigate = useNavigate()
    const [server_error, setServerError] = useState({})
    const [server_msg, setServerMsg] = useState({})
    const [resetPassword] = useResetPasswordMutation()
    const { id, token } = useParams()
    console.log(id)
    console.log(token)
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const actualData = {
        password: data.get('password'),
        password2: data.get('password2'),
      }
      const res = await resetPassword({ actualData, id, token })
      if (res.error) {
        console.log(res.error.data.errors);
        setServerMsg({})
        setServerError(res.error.data.errors)
      }
      if (res.data) {
    console.log(res.data)
        setServerError({})
        setServerMsg(res.data)
        document.getElementById('password-reset-form').reset()
        setTimeout(() => {
          navigate("/login")
        }, 3000)
      }
    }
  return (
    <>
        <div className="flex justify-center mt-32 p-5">
  <div className="sm:w-1/2 w-full">
    <h1 className="text-2xl mb-4 text-white text-center">Reset Password</h1>
    <form className="mt-4" id="password-reset-form" onSubmit={handleSubmit} noValidate>
      <div className="mb-4">
        <label for="password" className="block text-xl font-medium text-gray-300">New Password</label>
        <input id="password" name="password" type="password" required className="mt-1 p-2 w-full border rounded-md"/>
        {server_error.password ?  <div className= 'text-red-700'>
              { server_error.password[0]}</div> : ''
              }
      </div>
      <div className="mb-4">
        <label for="password2" className="block text-xl font-medium text-gray-300">Confirm New Password</label>
        <input id="password2" name="password2" type="password" required className="mt-1 p-2 w-full border rounded-md"/>
        {server_error.password2 ?  <div className= 'text-red-700'>
              { server_error.password2[0]}</div> : ''
              }
      </div>
      <div className="text-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
          Save
        </button>
      </div>
     
    </form>
    {server_msg.msg ?  <div className= 'text-green-700'>
              {server_msg.msg}</div> : ''
      }
       {server_error.non_field_errors ?  <div className= 'text-red-700'>
              { server_error.non_field_errors[0]}</div> : ''
    }
      
  </div>
</div>

    </>
  )
}

export default Resetpassword


//email : sadan@gmail.com
//password : sadan1