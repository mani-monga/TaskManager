import React, { useState } from "react";
import "./DropArea.css";

const DropArea = ({ onDrop, position, columnIndex, setisDraggingCardInside }) => {
  const [showDrop, setshowDrop] = useState(false);
  return (
    <div
      onDragEnter={() => {
        setshowDrop(true);
        setisDraggingCardInside(true);
      }}
      onDragLeave={() => {
        setshowDrop(false);
        setisDraggingCardInside(false);
      }}
      onDrop={() => {
        onDrop(position, columnIndex);
        setshowDrop(false);
        setisDraggingCardInside(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      className={showDrop ? "TaskDropArea" : "HideDrop"}
    >
      DropArea
    </div>
  );
};

export default DropArea;
