import React,{useState} from 'react'
import { useSendPasswordResetEmailMutation } from "../../services/userAuthApi";
const SendPasswordResetEmail = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [sendPasswordResetEmail, { isLoading }] =useSendPasswordResetEmailMutation()

      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          email: data.get('email'),
        }
        const res = await sendPasswordResetEmail(actualData)
      // console.log(res.data)

    if (res.error) {
     // console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-email-form').reset()
    }
      }
  return (
    <>
    <div className="flex justify-center mt-32  p-3">
  <div className="sm:w-1/2 w-full">
    <h1 className="text-2xl font-bold mb-4 text-center text-white">Reset Password</h1>
    <form className="mt-4" id="password-reset-email-form" onSubmit={handleSubmit} noValidate>
      <div className="mb-4">
        <label htmlFor="email" className="block text-xl pb-2 font-medium text-gray-300">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="text-center">
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-6"
        >
          Send
        </button>
      </div>
      {server_error.email ?  <div className= 'text-red-700'>
              { server_error.email[0]}</div> : ''
      }
      {server_msg.msg ?  <div className= 'text-green-700'>
              {server_msg.msg}</div> : ''
      }
      {server_error.non_field_errors ?  <div className= 'text-red-700'>
              { server_error.non_field_errors[0]}</div> : ''
    }
    </form>
  </div>
</div>


    </>
  )
}

export default SendPasswordResetEmail