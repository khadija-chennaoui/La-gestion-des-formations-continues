import React from 'react'
import { NavLink } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
const Sidbar = () => {
    // border-lime-500
    // const Color = () => {
    //     {Color ? NavLink.className='flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-lime-500 dark:text-white': NavLink.className='flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4  dark:text-white'}
    // }
  return (
        <>
            <div className="h-full bg-white dark:bg-gray-700">
              <div className="flex items-center justify-start pt-6 ml-8">
                <p className="text-xl font-bold dark:text-white">Dashboard</p>
              </div>
              <nav className="mt-6">
                <div>
                  <NavLink
                    className="hover:border-lime-500 flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4  dark:text-white"
                    to="employer"
                  >
                    <span className="text-left">
                      <RiShoppingCart2Line />
                    </span>
                    <span className="mx-2 text-sm font-normal">Clients</span>
                  </NavLink>
                  <NavLink  to="statistic"
                    className="hover:border-lime-500 flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                  >
                    <span className="text-left">
                      <RiShoppingCart2Line />
                    </span>
                    <span className="mx-2 text-sm font-normal">Livreures</span>
                  </NavLink>
                  <NavLink
                    className="hover:border-lime-500 flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                    to="/"
                  >
                    <span className="text-left">
                      <RiShoppingCart2Line />
                    </span>
                    <span className="mx-4 text-sm font-normal">Catégories</span>
                  </NavLink>
                  <NavLink
                    className="hover:border-lime-500 flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                    to="/"
                  >
                    <span className="text-left">
                      <RiShoppingCart2Line />
                    </span>
                    <span className="mx-4 text-sm font-normal">Products</span>
                  </NavLink>
                </div>
              </nav>
            </div>
          </>
   
  )
}

export default Sidbar