import React from "react";
import gif from "../../../Resources/loader.gif";
import "./loader.css";

const Loader = (props) => {
  return (
    <>
      {props.loading && (
        <div id="loader">
          <div className="circle-loader"></div>
          <img src={gif} alt="Loading..." />
        </div>
      )}
    </>
  );
};

export default Loader;
