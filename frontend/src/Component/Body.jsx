import React from "react";
import Navbar from "./Navbar";
import TaskArea from "./TaskArea";
import TaskForm from "./TaskForm";

const Body = () => {
  return (
    <>
      <div className="body">
        <Navbar />
        <TaskArea />
        <TaskForm />
      </div>
    </>
  );
};

export default Body;
