import React from "react";
import { NavLink } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
const Sidbar = () => {
  return (
    <>
      <div className="h-full bg-white dark:bg-gray-700">
        <div className="flex items-center justify-start pt-6 ml-8">
          <p className="text-xl font-bold dark:text-white">Dashboard</p>
        </div>
        <nav className="mt-6">
          <div>
          <NavLink
              className="hover:border-lime-500 flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
              to="statistic"
            >
              <span className="text-left">
                <RiShoppingCart2Line />
              </span>
              <span className="mx-4 text-sm font-normal">Statistic</span>
            </NavLink>
            <NavLink
              className="hover:border-lime-500 flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4  dark:text-white"
              to="organisme"
            >
              <span className="text-left">
                <RiShoppingCart2Line />
              </span>
              <span className="mx-4 text-sm font-normal">Organisme</span>
            </NavLink>
            <NavLink
              to="employer"
              className="hover:border-lime-500 flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
            >
              <span className="text-left">
                <RiShoppingCart2Line />
              </span>
              <span className="mx-4 text-sm font-normal">Employer</span>
            </NavLink>
            <NavLink
              className="hover:border-lime-500 flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
              to="formation"
            >
              <span className="text-left">
                <RiShoppingCart2Line />
              </span>
              <span className="mx-4 text-sm font-normal">Formation</span>
            </NavLink>
            <NavLink
              className="hover:border-lime-500 flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
              to="assigniement"
            >
              <span className="text-left">
                <RiShoppingCart2Line />
              </span>
              <span className="mx-4 text-sm font-normal">Assigniement</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidbar;
