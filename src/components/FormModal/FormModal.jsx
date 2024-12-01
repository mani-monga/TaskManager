import React, { useState } from "react";
import "./FormModal.css";
import { AnimatePresence, motion } from "framer-motion";
import Input from "../Input/Input";
import generateRandomId from "../../helpingFunc/generateRandomId";

const FormModal = ({
  data,
  setdata,
  isTaskFormOpen,
  setisTaskFormOpen,
  isColFormOpen,
  setisColFormOpen,
  setoverlayShow,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [columnName, setColumnName] = useState("");
  const [columnIndex, setColumnIndex] = useState(data.length + 1); // Default to next available index

  function handleTaskSubmit(e) {
    e.preventDefault();
    const taskToBeAdded = {
      id: generateRandomId(),
      title: title,
      description: description,
      tags: [],
    };
    const updatedData = [...data];
    updatedData[selectedStatus - 1].taskList.push(taskToBeAdded);
    console.log(updatedData);
    setdata(updatedData);
    setisTaskFormOpen(false);
  }

  function handleColumnSubmit(e) {
    e.preventDefault();
    const colToBeAdded = {
      columnOrder: +columnIndex,
      status: columnName,
      taskList: [],
    };
    const updatedData = [...data]; // Create a shallow copy of data
    updatedData.splice(columnIndex - 1, 0, colToBeAdded);
    updatedData.forEach((item, index) => {
      item.columnOrder = index + 1; // Update columnOrder based on index
    });
    console.log(updatedData);
    setdata(updatedData);
    setisColFormOpen(false);
    // setoverlayShow(false);
  }

  // Render the form modal based on state
  return (
    <>
      <AnimatePresence>
        {isTaskFormOpen && (
          <motion.div
            className="FormModalWrapper"
            initial={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.3
            }}
          >
            <form className="FormWrap TaskAddForm" onSubmit={handleTaskSubmit}>
              <Input
                index={1}
                type={"text"}
                label={"Enter Task Name"}
                placeholder={"Title"}
                Value={title}
                setValue={setTitle}
                taskList={data}
              />
              <Input
                index={2}
                type={"text"}
                label={"Enter Task Description"}
                placeholder={"Description"}
                Value={description}
                setValue={setDescription}
                taskList={data}
              />
              <Input
                index={3}
                type={"select"}
                label={"Select Task Status"}
                placeholder={"Status"}
                Value={selectedStatus}
                setValue={setSelectedStatus}
                taskList={data}
              />
              <input type="Submit" />
            </form>
          </motion.div>
        )}

        {isColFormOpen && (
          <motion.div
            className="FormModalWrapper"
            initial={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.3
            }}
          >
            <form className="FormWrap ColAddForm" onSubmit={handleColumnSubmit}>
              <Input
                index={1}
                type={"text"}
                label={"Enter Column Name"}
                placeholder={"Name"}
                Value={columnName}
                setValue={setColumnName}
                taskList={data}
              />
              <Input
                index={2}
                type={"number"}
                label={
                  "Enter Column Index (Enter 1 to place at start & Placed last by default)"
                }
                placeholder={"Index"}
                Value={columnIndex}
                setValue={setColumnIndex}
                taskList={data}
              />
              <input type="Submit" />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FormModal;
