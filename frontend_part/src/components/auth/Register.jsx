
import React,{useState} from "react";
import { NavLink,  useNavigate  } from "react-router-dom";
import  {useRegisterUserMutation}  from "../../services/userAuthApi";
import "./register.css";
//import { storeToken } from "../../services/LocalStorageService";

const Register = () => {
   const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  
  const [registerUser,{isLoading}]= useRegisterUserMutation();
  // const data= useRegisterUserMutation();
  // console.log(data);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password2: data.get('password2'),
      // tc: data.get('tc'),//for checkbox
    }
     const res = await registerUser(actualData);
    // console.log(res);
    if(res.error){
      // console.log(res.error.data.errors);
      // console.log(typeof(res.error.data.errors));
      setServerError(res.error.data.errors);
    }
    if(res.data){
    //  console.log(res.data);
      // storeToken(res.data.token);
      navigate('/login');
    }
  
  }
  return (
    <>
    {/* {server_error.name ? console.log(server_error.name[0]) : ''}
    {server_error.email ? console.log(server_error.email[0]) : ''}
    {server_error.password ? console.log(server_error.password[0]) : ''}
    {server_error.password2 ? console.log(server_error.password2[0]) : ''} */}
    {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ''}

    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register here</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            iste atque aut, corrupti magni fugit velit blanditiis nihil tempore
            eveniet culpa exercitationem!
          </p>
          <span>Do you have an account Already?</span>

          <NavLink to="/login"  >
            <button className="button2">Login </button>
          </NavLink>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form id='registration-form' onSubmit={handleSubmit}>
            <input type="text" id='name' name='name' placeholder="Username" />
             {server_error.name ?  <div className= 'text-red-700'>
              { server_error.name[0]}</div> : ''
              }
            <input type="email" id='email' name='email' placeholder="Email" />
            {server_error.email ?  <div className= 'text-red-700'>
              { server_error.email[0]}</div> : ''
              }
            <input type="password" id='password' name='password' placeholder="Password" />
            {server_error.password ?  <div className= 'text-red-700'>
              { server_error.password[0]}</div> : ''
              }
            <input type="password" id='password2' name='password2' placeholder="confirm password" />
            {server_error.password2 ?  <div className= 'text-red-700'>
              { server_error.password2[0]}</div> : ''
              }
            <button type='submit'>Register</button>
          </form>
          {server_error.non_field_errors ?  <div className= 'text-red-700'>
              { server_error.non_field_errors[0]}</div> : ''
              }
        </div>
        
      </div>
    </div>
    </>
  );
};
export default Register;




// // <!--
// //   This example requires some changes to your config:
  
// //   ```
// //   // tailwind.config.js
// //   module.exports = {
// //     // ...
// //     plugins: [
// //       // ...
// //       require('@tailwindcss/forms'),
// //     ],
// //   }
// //   ```
// // -->
// // <!--
// //   This example requires updating your template:

// //   ```
// //   <html className="h-full bg-white">
// //   <body className="h-full">
// //   ```
// // -->
// import React from 'react'

// const Register = () => {
//   return (
//     <>
//         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//     <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
//     <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
//   </div>

//   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//     <form className="space-y-6" action="#" method="POST">
//       <div>
//         <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
//         <div className="mt-2">
//           <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
//         </div>
//       </div>

//       <div>
//         <div className="flex items-center justify-between">
//           <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
//           <div className="text-sm">
//             <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
//           </div>
//         </div>
//         <div className="mt-2">
//           <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
//         </div>
//       </div>

//       <div>
//         <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
//       </div>
//     </form>

//     <p className="mt-10 text-center text-sm text-gray-500">
//       Not a member?
//       <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
//     </p>
//   </div>
// </div>
//     </>
//   )
// }

// export default Register

