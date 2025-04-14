import React from "react";

const Signup = () => {
  return (
    <>
      <div>
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
                    className="w-full h-8 bg-white rounded-sm outline-none p-2 mb-4"
                    placeholder="Full Name"
                  />

                  <input
                    type="text"
                    className="w-full h-8 bg-white rounded-sm outline-none p-2 mb-4"
                    placeholder="email"
                  />

                  <input
                    type="text"
                    className="w-full h-8 bg-white rounded-sm outline-none p-2 mb-4 "
                    placeholder="password"
                  />

                 

                  <select className="w-full h-8 bg-white text-[15px] rounded-sm outline-none p-1 mb-4"> 
                    <option value="1st">First Semester</option>
                    <option value="2nd">Second Semester</option>
                  </select>

                  <select className="w-full h-8 bg-white text-[15px] rounded-sm outline-none p-1 mb-4"> 
                    <option value="1st">A Section</option>
                    <option value="2nd">B Section</option>
                  </select>

                  <br />

                  <button className="w-[315px] h-8  rounded tex-4 font-bold pl-4 ml-2 text-white mb-1 bg-[#0a51ad]">
                    Sign Up 
                  </button>
                </div>

                <div className="text-white text-sm mb-7">
                  Already have an account?
                  <a className="text-blue-800" href="#">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
