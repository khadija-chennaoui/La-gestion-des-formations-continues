import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";

 const DeleteOrganisme = () => {
  const Deleted = (id) => {
    axios
      .delete(`http://localhost:4000/organisme/delet/${id}`)
      .then(() => {
        alert("Post deleted!");
        // setOrganisme(null)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div class="flex items-center">
        <div class="ml-3">
          <button
            onClick={Deleted(this.props)}
            class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    </>
  );
};
export default DeleteOrganisme