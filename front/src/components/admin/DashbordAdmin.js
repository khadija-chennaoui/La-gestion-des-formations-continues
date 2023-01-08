import React,{useState} from "react";
import { AiOutlineAlignRight,AiOutlineCloseCircle } from "react-icons/ai";
import Sidbar from "./Sidbar";
import { Outlet } from "react-router-dom";

const DashbordAdmin = () => {
    const [sidbar , setSidbar] = useState()

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
