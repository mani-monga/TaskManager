import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./WelcomePopup.css";
import { ImCross } from "react-icons/im";

const CreditFooter = (props) => {
 const Welcome = props.isWelcomeMessageShown;
  return (
    <AnimatePresence>
      {Welcome === 'Footer' && (
        <motion.div
          initial={{ y: 100 }}
          exit={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            type: "tween",
            duration: 0.1,
          }}
        >
          <div className="footer-content">
            <span
              className="close-btn"
              onClick={() => props.setisWelcomeMessageShown(null)}
            >
              <ImCross />
            </span>
            <div>
            <h2>🎉 Hey There! 🎉</h2>
            <p>
              Welcome to my corner of the internet! Whether you're a recruiter,
              an interviewer, or just someone who took a wrong turn on the web,
              I'm glad you're here. If you like my work, let's make magic
              happen! 🧙‍♂️
            </p>
            </div>
            <a
              href="mailto:manimonga2802@gmail.com"
              className="cta-btn"
              onClick={() => props.setisWelcomeMessageShown(false)}
            >
              Hire Me, Maybe? 😉
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreditFooter;
