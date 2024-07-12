import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handleToggleByTrue } from "../utils/todosSlice";

const TaskArea = () => {
  const [todoData, settodoData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [todoData]);

  // fetching  the data
  const fetchData = () => {
    axios
      .get("http://localhost:3081/")
      .then((res) => settodoData(res?.data?.response));
  };

  // handling the delete operations
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3081/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-3 w-[80%] mx-auto items-center gap-y-5 mt-[50px] ">
        {todoData.length === 0 ? (
          <h1>Opps todos empty 👋🏻 </h1>
        ) : (
          todoData.map((items) => {
            return (
              <>
                <div
                  key={items.id}
                  className="w-[20rem] min-h-[25vh] shadow-lg rounded-lg px-4 py-4 "
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">{items.title}</h4>
                    <div className="flex items-center space-x-3">
                      <CiEdit
                        onClick={() => dispatch(handleToggleByTrue())}
                        className="text-lg cursor-pointer"
                      />
                      <MdDelete
                        onClick={() => handleDelete(items._id)}
                        className="text-lg cursor-pointer"
                      />
                    </div>
                  </div>
                  <p className="mt-5">{items.message}</p>
                </div>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default TaskArea;
