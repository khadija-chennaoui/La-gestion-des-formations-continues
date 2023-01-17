import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddFormation from './AddFormation';
import { BsFillTrashFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
const style_th ="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200";
const style_td ="px-5 py-5 text-sm bg-white border-b border-gray-200";

const TableFormation = () => {
const [formation ,setFormation] = useState([])

useEffect(() => {
    axios.get('http://localhost:4000/formation/all')
    .then((res)=>{
      setFormation(res.data)
    })
    .catch((error)=>{
        console.log(error)
    })
},[])
const Deleted = (e,id) =>{
    e.preventDefault();
    axios.delete(`http://localhost:4000/formation/delet/${id}`)
    .then((res)=>{
        toast.success('Organisme deleted',{position: toast.POSITION.TOP_RIGHT})       
         console.log(res.data)
    })
    .catch((error) => {
        console.log(error)
    })
}

    return (
    <>
      <AddFormation />  {/* modal */}
      <div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-1">
        <div className="container max-w-full px-4 mx-auto sm:px-8">
          <div className="py-8">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th scope="col" className={style_th}>
                        Name
                      </th>
                      <th scope="col" className={style_th}>
                      Date debut
                      </th>
                      <th scope="col" className={style_th}>
                      Date fin
                      </th>
                      <th scope="col" className={style_th}>
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formation.map((item, i) => (
                      <tr >
                        <td className={style_td}>
                          <div className="flex items-center">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                               {item.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className={style_td}>
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item.date_debut}
                          </p>
                        </td>

                        <td className={style_td}>
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item.date_fin}
                          </p>
                        </td>
                        <td className={style_td}>
                          <div className="flex items-center">
                            <div className="ml-3">
                              <button
                                onClick={(e) => {
                                  Deleted(e, item._id);
                                }}
                                className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                              >
                                <BsFillTrashFill />
                                <ToastContainer autoClose={200} />
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))} 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TableFormation