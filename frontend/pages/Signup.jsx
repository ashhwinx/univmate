import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../src/context/UserContext";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [section, setSection] = useState("");
  const [semester, setSemester] = useState("");


  const navigate = useNavigate()

  const {user,setUser} =useContext(UserDataContext)


  const submitHandler= async (e)=>{
    e.preventDefault()
    const newUser = {
      fullname:fullname,
      email:email,
      password:password,
      section:section,
      semester:semester
    }
    console.log(section)
    console.log(semester)


    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

    if(response.status===200){
      const data =response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)

      navigate('/home')
    }

    setFullname("")
    setEmail("")
    setPassword("")
    setSection("")
    setSemester("")
  }

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="h-screen w-screen bg-[#111]">
            <div className="h-screen w-screen flex justify-center items-center">
              <div className="h-auto w-96 bg-[#84ACD8] rounded-xl">
                <div className="flex flex-col items-center">
                  <div className="font-welcome font-semibold  text-2xl pt-3 pb-1 text-[#0a51ad]">
                    Create Account
                  </div>
                  <div className="font-normal font-medium text-sm pt-1 pb-5 text-white">
                    Join UnivMate in just a few steps!
                  </div>

                  <div className="felx felx-col justify-items-start  w-full px-6">
                    <input
                      type="text"
                      required
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                      className="w-full h-8 bg-white rounded-sm outline-none p-2 mb-4"
                      placeholder="FullName"
                    />

                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="w-full h-8 bg-white rounded-sm outline-none p-2 mb-4"
                      placeholder="email"
                    />

                    <input
                      type="text"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="w-full h-8 bg-white rounded-sm outline-none p-2 mb-4 "
                      placeholder="password"
                    />

                    <select
                    required 
                    value={semester}
                    onChange={ (e)=> {
                      setSemester(e.target.value)               
                    }}
                     className="w-full h-8 bg-white text-[15px] rounded-sm outline-none p-1 mb-4">
                      <option value="" disabled selected hidden>Select Semester</option>
                      <option value="A">First Semester</option>
                      <option value="B">Second Semester</option>
                    </select>

                    <select
                    required 
                    value={section}
                    onChange={(e)=>{
                      setSection(e.target.value)
                    }}
                    className="w-full h-8 bg-white text-[15px] rounded-sm outline-none p-1 mb-4">
                      <option value="" disabled selected hidden>Select </option>
                      <option value="A">A Section</option>
                      <option value="B">B Section</option>
                    </select>

                    <br />

                    <button className="w-[315px] h-8  rounded tex-4 font-bold pl-4 ml-2 text-white mb-1 bg-[#0a51ad]">
                      Sign Up
                    </button>
                  </div>

                  <div className="text-white text-sm mb-7">
                    Already have an account?
                    <Link to="/login" className="text-blue-800" href="#">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
