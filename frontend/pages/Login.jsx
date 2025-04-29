import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../src/context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    console.log(userData);

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );
    console.log(response.status);
    console.log("first");

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

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
              <div className="h-94 w-96 bg-[#84ACD8] rounded-xl">
                <div className="flex flex-col items-center">
                  <div className="font-welcome font-semibold  text-2xl pt-5 pb-2 text-[#0a51ad]">
                    WELCOME
                  </div>
                  <div className="font-normal font-medium text-sm pt-1 pb-7 text-white">
                    Login to continue!
                  </div>

                  <div className="felx felx-col justify-items-start  w-full px-6">
                    <input
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      className="w-full h-8 bg-white rounded-sm outline-none p-2 mb-4 "
                      placeholder="email"
                    />

                    <input
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="text"
                      className="w-full h-8 bg-white rounded-sm outline-none p-2 mb-4 "
                      placeholder="password"
                    />

                    <br />

                    <button className="w-[315px] h-8  rounded tex-4 font-bold pl-4 ml-2 text-white mb-1 bg-[#0a51ad]">
                      log in
                    </button>
                  </div>

                  <div className="text-white text-sm ">
                    Don't have an account?
                    <Link to="/signup" className="text-blue-800" href="#">
                      Create new Account
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

export default Login;
