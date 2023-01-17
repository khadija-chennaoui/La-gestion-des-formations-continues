import React, { useState, useEffect } from "react";
import axios from "axios";
import AddAssigniement from "./AddAssigniement";
const style_th ="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200";
const style_td ="px-5 py-5 text-sm bg-white border-b border-gray-200";

const TableEmployer = () => {
  const [assigniement, setAssigniement] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [formation, setFormation] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/assigniement/all")
      .then((res) => {
       
        setAssigniement(res.data.afficherAllAssigniement)
        setEmployee(res.data.employee)
        setFormation(res.data.formation)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);


  return (
    <>
      <AddAssigniement employee={employee} formation={formation}/>  {/* modal */}
      <div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-1">
        <div className="container max-w-full px-4 mx-auto sm:px-8">
          <div className="py-8">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th scope="col" className={style_th}>
                        Formation
                      </th>
                      <th scope="col" className={style_th}>
                        Emloyer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {assigniement.map((item, i) => (
                      <tr key={i}>
                        <td className={style_td}>
                          <div className="flex items-center">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {(item.formation_id.length!==0)?(item.formation_id[0].name):'****'}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className={style_td}>
                          <p className="text-gray-900 whitespace-no-wrap">
                            {(item.employer_id.length!==0)?(item.employer_id[0].name):'****'}
                          </p>
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

export default TableEmployer;
