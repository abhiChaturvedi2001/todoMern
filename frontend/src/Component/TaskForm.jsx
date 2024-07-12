import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleByFalse } from "../utils/todosSlice";
const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.todoReducer.toggle);
  const handleData = async () => {
    try {
      const response = await axios.post("http://localhost:3081/addTask", {
        title: title,
        message: message,
      });
    } catch (error) {
      console.log(error);
    }
    dispatch(handleToggleByFalse());
    setTitle("");
    setMessage("");
  };

  return (
    <>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          toggle ? "block" : "hidden"
        }`}
      >
        <form
          className="bg-gray-100 w-[30rem] h-[50vh] px-4 py-4 shadow-lg rounded-md"
          onSubmit={(e) => e.preventDefault()}
          action=""
        >
          <div>
            <label className="block font-bold">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              className="my-4 w-full px-1 py-2 outline-none rounded-md"
              type="text"
              placeholder="put your title..."
            />
          </div>
          <div>
            <label className="block font-bold">Your Message</label>
            <input
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              className="my-4 w-full px-1 py-2 outline-none rounded-md"
              type="text"
              placeholder="message"
            />
          </div>
          <input
            onClick={handleData}
            className="bg-purple-600 text-white px-4 py-2 cursor-pointer rounded-md font-semibold"
            type="submit"
          />
          <button>update Records</button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
