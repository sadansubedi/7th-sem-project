import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Body from './components/body/Body'
import Bsccsit from './components/bsc_csit/Bsccsit.JSX';
import Footer from './components/footer/Footer';
import Syllabus from './components/bsc_csit/courses/IIT/Syllabus';
import DlSyllabus from './components/bsc_csit/courses/DL/Dlsyllabus'
import Dlectures from './components/bsc_csit/courses/DL/Dllectures'
import Dlhandwrittennotes from './components/bsc_csit/courses/DL/Dlhandwrittennotes';
import Dlunitnotes from './components/bsc_csit/courses/DL/Dlunitnotes';
import Chapter from './components/bsc_csit/courses/IIT/Chapter';
import Lectures from './components/bsc_csit/courses/IIT/Lectures';
import { Route, Routes,BrowserRouter, Navigate } from "react-router-dom";
import Handwrittennotes from './components/bsc_csit/courses/IIT/Handwrittennotes';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import SendPasswordResetEmail from './components/auth/SendPasswordResetEmail';
import Resetpassword from './components/auth/Resetpassword';
import Changepassword from './components/auth/Changepassword';
import { useSelector } from 'react-redux';

function App() {
  const [count, setCount] = useState(0)
  const {access_token} = useSelector(state => state.auth);

  return (
    <>
     <BrowserRouter>
    <Navbar/>
    <Routes>
            <Route exact path="/" element={<Body />}/>
                {/* <Route exact path="/csit" element={<Bsccsit/>}/> */}
                <Route  exact path="/csit" element={access_token ? <Bsccsit/> : <Navigate to="/login" />} />
                
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="login" element={!access_token ? <Login /> : <Navigate to="/csit" />} />
                <Route exact path="/sendpasswordresetemail" element={<SendPasswordResetEmail/>}/>{/*forget password  */}
                <Route exact path="api/user/reset-password/:id/:token" element={<Resetpassword/>}/>{/*changing password through gmail link  */}
                <Route exact path="/changepassword" element={<Changepassword/>}/>{/*after login if user want to change password  */}
               
                <Route exact path="csit/iit/syllabus" element={access_token ? <Syllabus/> : <Navigate to="/login" />}/>
                <Route exact path="/csit/iit/chapter" element={access_token ? <Chapter/> : <Navigate to="/login" />}/>
                <Route exact path="/csit/iit/lecture/" element={access_token ? <Lectures/> : <Navigate to="/login" />}/>
                <Route exact path='/csit/iit/notes' element={access_token ? <Handwrittennotes/> : <Navigate to="/login" />}/>
            
                <Route exact path="/csit/dl/syllabus" element={<DlSyllabus/>}/>
                <Route exact path="/csit/dl/dllecture" element={<Dlectures/>}/>
                <Route exact path="/csit/dl/dlnotes" element={<Dlhandwrittennotes/>}/>
                <Route exact path="/csit/dl/unitnotes1" element={<Dlunitnotes data={1}/>}/>
                <Route exact path="/csit/dl/unitnotes2" element={<Dlunitnotes data={2}/>}/>
                <Route exact path="/csit/dl/unitnotes3" element={<Dlunitnotes data={3}/>}/>
                <Route exact path="/csit/dl/unitnotes4" element={<Dlunitnotes data={4}/>}/>
                <Route exact path="/csit/dl/unitnotes5" element={<Dlunitnotes data={5}/>}/>
                <Route exact path="/csit/dl/unitnotes6" element={<Dlunitnotes data={6}/>}/>
                <Route exact path="/csit/dl/unitnotes7" element={<Dlunitnotes data={7}/>}/>
                {/* <Route exact path="/csit" element={<Bsccsit/>}/> */}
            

            <Route/>
            
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}

export default App
