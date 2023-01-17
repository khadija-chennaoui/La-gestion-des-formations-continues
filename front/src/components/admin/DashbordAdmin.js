import React,{useState} from "react";
import axios from 'axios'
import { AiOutlineAlignRight,AiOutlineCloseCircle } from "react-icons/ai";
import Sidbar from "./Sidbar";
import { Outlet } from "react-router-dom";

const DashbordAdmin = () => {
    const [sidbar , setSidbar] = useState()
    function Logout(){
      axios.get("http://localhost:4000/emplyer/logout")
      .then((res)=>{
          if(res.data){
              localStorage.clear()
              window.location.replace("/login")
          }
      })
      .catch(error=>console.log(error))
   }
  return (
    <>
      <main class="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div class="flex items-start justify-between">
          <div class={sidbar ? "relative bg-white  h-screen shadow-lg lg:block w-80" : "relative hidden h-screen shadow-lg bg-white lg:block w-80"}>
            <Sidbar/>
          </div>
          <div class="flex flex-col w-full md:space-y-4" >
            <header class="z-40 flex items-center justify-between w-full h-16">
              <div class="block ml-6 lg:hidden">
                <button class="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md" onClick={()=>{setSidbar(!sidbar)}}>
                    {sidbar ? <AiOutlineCloseCircle /> :  <AiOutlineAlignRight  />}
                </button>
              </div>
              <div class="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                <div class="relative flex items-center justify-end w-full p-1 space-x-4">
                <button className="bg-emerald-300 text-white active:bg-emerald-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={Logout} type="submit">Logout</button>

                </div>
              </div>
            </header>
            <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
              <h1 class="text-4xl font-semibold text-gray-800 dark:text-white mb-3">
                Good afternoom, Admin
              </h1>
              <h2 class="text-gray-400 text-md ">
                Here&#x27;s what&#x27;s happening with your ambassador account
                today.
              </h2>
               <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashbordAdmin;
