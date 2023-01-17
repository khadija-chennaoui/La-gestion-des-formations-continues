import React, { useState, useEffect } from "react";
import axios from "axios";
import AddOrganisme from "./AddOrganisme";
import { BsFillTrashFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
const style_th= "px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200";
const style_td= "px-5 py-5 text-sm bg-white border-b border-gray-200";
const style_p= "text-gray-900 whitespace-no-wrap"

const TableOrganisme = () => {
  let [organisme, setOrganisme] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/organisme/all")
      .then((res) => {
        setOrganisme(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  const Deleted = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:4000/organisme/delet/${id}`)
    .then((res)=> {
        if(res.data){
            toast.success('Organisme deleted',{position: toast.POSITION.TOP_RIGHT})
        }
    })

  }

  return (
    <>
      <AddOrganisme /> {/* modal */}
      <div class="grid grid-cols-1 gap-4 my-4 lg:grid-cols-1">
        <div class="container max-w-full px-4 mx-auto sm:px-8">
          <div class="py-8">
            <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th scope="col" class={style_th}>
                        Name
                      </th>

                      <th scope="col" class={style_th}>
                        Phone
                      </th>
                      <th scope="col" class={style_th}>
                        ville
                      </th>
                      <th scope="col" class={style_th}>
                        Deleted
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {organisme.map((item) => (
                      <tr>
                        <td class={style_td}>
                          <div class="flex items-center">
                            <div class="ml-3">
                              <p class={style_p}>
                                {item.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class={style_td}>
                          <div class="flex items-center">
                            <div class="ml-3">
                              <p class={style_p}>
                                {item.ville}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class={style_td}>
                          <div class="flex items-center">
                            <div class="ml-3">
                              <p class={style_p}>
                                {item.phone}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class={style_td}>
                          <div class="flex items-center">
                            <div class="ml-3">
                              <button
                                onClick={(e) => { Deleted(e, item._id) }}
                                class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                                <BsFillTrashFill />
                                <ToastContainer autoClose={200}/>
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
  );
};

export default TableOrganisme;
