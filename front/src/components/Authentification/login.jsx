import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import School from "../../assiet/images/schole.jpg";
import { AiOutlineUnlock } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
const Login = () => {
  const Navigate = useNavigate({})
  const [login, setLogin] = useState({});
  const handelChange = (e) => {
    const val = e.target.value;
    setLogin({
      ...login,
      [e.target.name]: val,
    });
  };

  function handelSubmit(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/emplyer/login`, login)

      .then((res) => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('role', res.data.role_id)
        if (!res.data.token) console.log("im not her");
        if (res.data.token && res.data.role_id === "Emplyer") {
          Navigate('/maFormation')
        }
        if (res.data.token && res.data.role_id === "Admin") {
          Navigate('/dashboard')
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div class="flex flex-wrap w-full">
        <div class="flex flex-col w-full md:w-1/2">
          <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24"></div>
          <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p class="text-3xl text-center font-bold text-orange-500">
              Your Organisme
            </p>
            <form class="flex flex-col pt-3 md:pt-8" onSubmit={handelSubmit}>
              <div class="flex flex-col pt-4">
                <div class="flex relative ">
                  <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <AiOutlineGoogle />
                  </span>
                  <input
                    type="text"
                    name="email"
                    class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                    placeholder="Email"
                    onChange={handelChange}
                  />
                </div>
              </div>
              <div class="flex flex-col pt-4 mb-12">
                <div class="flex relative ">
                  <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <AiOutlineUnlock />
                  </span>
                  <input
                    type="password"
                    name="password"
                    class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                    placeholder="Password"
                    onChange={handelChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-lime-500 hover:text-with hover:bg-orange-500 focus:outline-none focus:ring-2"
              >
                <span class="w-full">Login</span>
              </button>
            </form>
          </div>
        </div>
        <div class="w-1/2 shadow-2xl">
          <img
            class="hidden object-cover w-full h-screen md:block opacity-80"
            src={School}
            alt="..."
          />
        </div>
      </div>
    </>
  );
};

export default Login;
