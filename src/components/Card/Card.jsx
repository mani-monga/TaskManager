import React from "react";
import "./Card.css";
import DropArea from "../DropArea/DropArea";

const Card = ({setTaskShow, columnIndex, status, task, setactiveCard, onDrop, position, setisDraggingCardInside }) => {

  return (
    <>
    <div
      className="TaskWrapper"
      data-id={task.id}
      data-status={status}
      draggable
      onDragStart={() => setactiveCard(task.id)}
      onDragEnd={() => setactiveCard(null)}
      onClick={() => setTaskShow({columnIndex, position})}
    >
      <h3 className="TaskTitle">{task.title}</h3>
      <p className="TaskDesc">{task.description}</p>
    </div>
    <DropArea onDrop={onDrop} position={position} columnIndex={columnIndex} setisDraggingCardInside ={setisDraggingCardInside}/>
    </>
  );
};

export default Card;
