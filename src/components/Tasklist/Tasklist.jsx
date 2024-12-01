import React from "react";
import Card from "../Card/Card";
import "./Tasklist.css";
import DropArea from "../DropArea/DropArea";

const Tasklist = ({ setTaskShow, accentColor, columnIndex, name, taskList, setactiveCard, onDrop, isDraggingCardInside, setisDraggingCardInside }) => {
  return (
    <div
      className="TaskListColWrapper"
      onDrop={() => {
        if (!isDraggingCardInside) {
          onDrop(0, columnIndex);
        }
      }}
      onDragOver={(e) => {
        if (!isDraggingCardInside) {
          e.preventDefault();
        }
      }}
    >
      <h2 className="TaskListColHeader"
      style={{
        borderBottom: `5px solid ${accentColor}`
      }
      }
      >{name}</h2>
      <div className="TaskListWrap">
        <DropArea
          onDrop={onDrop}
          position={0}
          columnIndex={columnIndex}
          setisDraggingCardInside={setisDraggingCardInside}
        />
        {taskList.map((task, index) => {
          return (
            <Card
              columnIndex={columnIndex}
              key={task.id}
              task={task}
              setactiveCard={setactiveCard}
              onDrop={onDrop}
              status={name}
              position={index + 1}
              setisDraggingCardInside={setisDraggingCardInside}
              setTaskShow={setTaskShow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tasklist;
