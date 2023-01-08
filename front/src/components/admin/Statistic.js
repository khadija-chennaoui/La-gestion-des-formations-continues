import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
const Statistic = () => {
  return (
    <>
      <div class="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 flex md:flex-cols  md:flex-row">
                <div class="flex items-center w-full space-x-4 md:w-1/2">
                  <div class="w-1/2">
                    <div class="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p class="text-2xl font-bold text-black dark:text-white">
                        12
                      </p>
                      <p class="text-sm text-gray-400">Active projects</p>
                      <span class="absolute p-4 bg-lime-500 rounded-full top-2 right-4">
                        <RiShoppingCart2Line />
                      </span>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p class="text-2xl font-bold text-black dark:text-white">
                        93.76
                      </p>
                      <p class="text-sm text-gray-400">
                        Commission in approval
                      </p>
                      <span class="absolute p-4 bg-lime-500 rounded-full top-2 right-4">
                        <RiShoppingCart2Line />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center w-full space-x-4 md:w-1/2">
                  <div class="w-1/2">
                    <div class="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p class="text-2xl font-bold text-black dark:text-white">
                        12
                      </p>
                      <p class="text-sm text-gray-400">Active projects</p>
                      <span class="absolute p-4 bg-lime-500 rounded-full top-2 right-4">
                        <RiShoppingCart2Line />
                      </span>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p class="text-2xl font-bold text-black dark:text-white">
                        93.76
                      </p>
                      <p class="text-sm text-gray-400">
                        Commission in approval
                      </p>
                      <span class="absolute p-4 bg-lime-500 rounded-full top-2 right-4">
                        <RiShoppingCart2Line />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Statistic