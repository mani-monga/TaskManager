import React from "react";
import { motion } from "framer-motion";

const Input = ({ index, type, label, placeholder, Value, setValue, taskList }) => {
  return (
    <motion.div
      className="FormInputWrapper"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 360,
        damping: 50,
        delay: 0.1 * index,
      }}
    >
      <span>{label}</span>
      {type === "select" && (
        <select name={placeholder} id={index} value={Value} onChange={(e) => setValue(e.target.value)}>
            <option value="" defaultValue={true} disabled>Choose here</option>
            {taskList.map((item, index) => {
                return <option key={index} value={item.columnOrder} index={index}>{item.status}</option>
            })}
        </select>
      )}

      {type !== "select" && (
        <input
          type={type}
          className="FormInput"
          name={placeholder}
          placeholder={placeholder}
          min={type === 'number' ? 1 : undefined} // Conditionally set min attribute
          max={type === 'number' ? taskList.length + 1 : undefined} // Conditionally set max attribute
          value={Value}
          onChange={(e) => {
            if(type==='number' && e.target.value > taskList.length + 1) {
                setValue(taskList.length + 1)
            } else {
                setValue(e.target.value)
            }
          }}
        />
      )}
    </motion.div>
  );
};

export default Input;
