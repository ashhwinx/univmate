import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <div className="h-screen w-screen bg-[#111]">
          <div className="h-screen w-screen flex justify-center items-center">

            <div className="h-94 w-96 bg-[#84ACD8] rounded-xl" >
              <div className="flex flex-col items-center">
                <div className="font-welcome font-semibold  text-2xl pt-5 pb-2 text-[#0a51ad]">
                  WELCOME
                </div>
                <div className="font-normal font-medium text-sm pt-1 pb-7 text-white">
                  Login to continue!
                </div>


                <div className="felx felx-col justify-items-start  w-full px-6" >
                    
                    <input type="text"  className="w-full h-8 bg-white rounded-sm outline-none p-2 mb-7" placeholder="email" />
                  
                    <input type="text" className="w-full h-8 bg-white rounded-sm outline-none p-2 mb-4 " placeholder="password" />
                  
                    <br />

                    <button className="w-[315px] h-8  rounded tex-4 font-bold pl-4 ml-2 text-white mb-1 bg-[#0a51ad]">log in</button> 
                </div>

                <div className="text-white text-sm ">Don't have an account?<a className="text-blue-800" href="#">Sign up</a></div>


                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
