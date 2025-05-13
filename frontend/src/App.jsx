import React from 'react'
import { Route,Routes} from 'react-router-dom'
import UserLogin from "../pages/Login"
import UserSignup from "../pages/Signup"
import Home from "../pages/Home";
import ClassNotes from "../pages/ClassNotes";
import PYQ from "../pages/PYQ";
import LabWork from "../pages/LabWork";
import ChatBot from '../pages/ChatBot';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/pyq' element={<PYQ/>}/>
        <Route path='/labwork' element={<LabWork/>}/>
        <Route path='/classnotes' element={<ClassNotes/>}/>
        <Route path='/chatbot' element={<ChatBot/>}/>

      </Routes>
    </>
  );
}

export default App;
