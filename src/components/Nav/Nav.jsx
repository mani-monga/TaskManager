import React from "react";
import "./Nav.css";

const Nav = ({setisTaskFormOpen, setisColFormOpen, setoverlayShow}) => {
  return (
    <nav className="navbar">
      <div className="navTitle">
        Task Master
        <sup>+</sup>
      </div>
      <div className="navCTAWrapper">
        <button
          className="navTaskForm"
          onClick={() => {
            setisColFormOpen(false);
            setisTaskFormOpen(true);
            setoverlayShow(true);
          }}
        >
          Add Task +
        </button>
        <button
          className="navColumnForm"
          onClick={() => {
            setisTaskFormOpen(false)
            setisColFormOpen(true);
            setoverlayShow(true);
          }}
        >
          Add Column +
        </button>
      </div>
    </nav>
  );
};

export default Nav;
