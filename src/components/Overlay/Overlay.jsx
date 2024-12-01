import React from "react";
import "./Overlay.css";
import { AnimatePresence, motion } from "framer-motion";

const Overlay = ({
  overlayShow,
  setTaskShow,
  setisColFormOpen,
  setisTaskFormOpen,
  setoverlayShow,
  setisWelcomeMessageShown
}) => {
  return (
    <AnimatePresence>
      {overlayShow && (
        <motion.div
          className="overlayWrapper"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.3,
          }}
          onClick={() => {
            setisTaskFormOpen(false);
            setisColFormOpen(false);
            setoverlayShow(false);
            setTaskShow(false);
            setisWelcomeMessageShown('Footer');
          }}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
