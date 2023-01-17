import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const MaFormation = () => {
  const [maFormation, setMaFormation] = useState([]);
  const token = localStorage.getItem("token")

  useEffect(() => {
    axios.get("http://localhost:4000/assigniement/maformation/"+token)
    .then((res)=>{
      if(!res.data.error) setMaFormation(res.data)
      else console.log(res.data.error)
    })
  });

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
    <div className="">
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div><h1 className="text-center text-2xl font-semibold mb-4">Ma formation </h1></div>
        <div className="bg-white shadow-xl w-[450px] p-8 rounded-lg">
          {maFormation.map((formation, i) => (
            <div className="relative w-full px-8 py-8 bg-white shadow-lg dark:bg-gray-700" key={i}>
              <p className="text-2xl font-bold text-black dark:text-white">
                {formation.formation_id[0].name}
              </p>
              <p className="text-sm text-gray-400">{formation.formation_id[0].date_debut}</p>
              <p className="text-sm text-gray-400">{formation.formation_id[0].date_fin}</p>
            </div>
          ))}
        </div>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
            <button  onClick={Logout} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mt-7 ">Logout</button> 
            </div>
          </div>
      </div>
    </div>
  );
};

export default MaFormation;
