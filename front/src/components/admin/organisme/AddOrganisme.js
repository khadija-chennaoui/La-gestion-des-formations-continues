import React, { useState } from "react";
import axios from "axios";

const AddOrganisme = () => {
  const [showModal, setShowModal] = useState(false);
  const [organisme, setOrganisme] = useState({});
  function handleChange(e) {
    const val = e.target.value;
    setOrganisme({
      ...organisme,
      [e.target.name]: val,
    });
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/organisme/add", organisme)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    setShowModal(false);
  }

  return (
    <>
      <button
        className="bg-lime-500 text-white active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mt-5 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Organisme
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6  flex-auto">
                  <form className="px-3" onSubmit={handleSubmit}>
                    <p
                      id="err"
                      className="bg-red-400 animate-pulse shadow appearance-none border rounded w-full py-2 px-4 mt-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                      hidden={true}
                    ></p>
                    <div className="flex flex-col ">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-lg font-semibold mb-2 "
                          htmlFor="Name"
                        >
                          Name
                        </label>
                        <input
                          onChange={handleChange}
                          name="name"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-lg font-semibold mb-2 "
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <input
                          onChange={handleChange}
                          name="phone"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="phone"
                          type="phone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-lg font-semibold mb-2 "
                          htmlFor="ville"
                        >
                          Ville
                        </label>
                        <input
                          onChange={handleChange}
                          name="ville"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="ville"
                          type="text"
                          placeholder="Ville"
                        />
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="Cancel"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddOrganisme;
