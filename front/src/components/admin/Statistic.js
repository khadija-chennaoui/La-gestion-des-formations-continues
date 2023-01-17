import React ,{useEffect, useState}from "react";
import axios from 'axios'
import { AiFillBank, AiFillCalendar ,AiFillRead} from "react-icons/ai";
const Statistic = () => {
const [totalOrganisme, setTotalOrganisme] = useState([])
const [totalEmployer, setTotalEmployer] = useState([])
const [totalFormation, setTotalFormation] = useState([])

useEffect(()=> {
axios.get('http://localhost:4000/statistic/totalorganisme')
.then((res)=>{
  setTotalOrganisme(res.data)
})
.catch((err)=>{
  console.log(err)
})
axios.get('http://localhost:4000/statistic/totalemployer')
.then((res)=>{
  setTotalEmployer(res.data)
})
.catch((err)=>{
  console.log(err)
})
axios.get('http://localhost:4000/statistic/totalformation')
.then((res)=>{
  setTotalFormation(res.data)
})
.catch((err)=>{
  console.log(err)
})

},[])

  return (
    <>
      <div className="grid gap-4  grid-cols-3 mt-5">
        <div className="">
          <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
            <p className="text-2xl font-bold text-black dark:text-white">{ totalOrganisme }</p>
            <p className="text-sm text-gray-400">All organisme</p>
            <span className="absolute p-4 bg-lime-500 rounded-full top-2 right-4">
              <AiFillBank />
            </span>
          </div>
        </div>
        <div className="">
          <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
            <p className="text-2xl font-bold text-black dark:text-white">{totalEmployer}</p>
            <p className="text-sm text-gray-400">All employer</p>
            <span className="absolute p-4 bg-lime-500 rounded-full top-2 right-4">
              <AiFillCalendar />
            </span>
          </div>
        </div>
        <div className="">
          <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
            <p className="text-2xl font-bold text-black dark:text-white">{totalFormation}</p>
            <p className="text-sm text-gray-400">All formation</p>
            <span className="absolute p-4 bg-lime-500 rounded-full top-2 right-4">
              <AiFillRead />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistic;
