import React from "react";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { handleToggleByTrue } from "../utils/todosSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="flex items-center justify-between w-[80%] mx-auto min-h-[10vh]">
        <div className="logo font-bold tracking-wider">
          Task <span className="text-purple-600 font-bold">Manager.</span>{" "}
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <IoMdAdd
              onClick={() => dispatch(handleToggleByTrue())}
              className="text-2xl font-bold cursor-pointer transition-all hover:bg-gray-200 rounded-full  "
            />
          </li>
          <button className=" bg-purple-600 font-bold text-white px-3 py-1 rounded-md cursor-pointer ">
            Login
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
