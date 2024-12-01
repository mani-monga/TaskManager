import { useEffect, useState } from "react";
import "./App.css";
import Tasklist from "./components/Tasklist/Tasklist";
import JSONdata from "./helpingFunc/data.json";
import getCard from "./helpingFunc/getCard";
import Nav from "./components/Nav/Nav";
import Overlay from "./components/Overlay/Overlay";
import FormModal from "./components/FormModal/FormModal";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import { AnimatePresence, motion } from "framer-motion";
import WelcomePopup from "./components/WelcomePopup/WelcomePopup";
import CreditFooter from "./components/WelcomePopup/CreditFooter";
import Loader from "./components/Loader/loader";


function App() {
  // State initialization
  const [loading, setloading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const [data, setData] = useState(JSONdata);
  const [isDraggingCardInside, setIsDraggingCardInside] = useState(false);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const [isColFormOpen, setIsColFormOpen] = useState(false);
  const [isWelcomeMessageShown, setisWelcomeMessageShown] = useState(null);
  const [overlayShow, setOverlayShow] = useState(false);
  const [TaskShow, setTaskShow] = useState(null);

  // Effect to clear console on component mount
  useEffect(() => {
    const show = TaskShow || isColFormOpen || isTaskFormOpen;
    if(isWelcomeMessageShown && isWelcomeMessageShown === 'Popup') {
      setOverlayShow(true);
    } else {
      setOverlayShow(show);
    }
  }, [TaskShow, isColFormOpen, isTaskFormOpen, isWelcomeMessageShown]);

  useEffect(() => {
    setTimeout(() => {
      setisWelcomeMessageShown('Popup');
      setloading(false);
    }, 1000);
  }, []);

  // Function to handle drop event
  const onDrop = (targetPosition, targetColumnIndex) => {
    if (!activeCard) {
      return;
    }

    // console.log({targetColumnIndex, targetPosition});

    const { sourceColumnIndex, sourceTaskIndex } = getCard(activeCard, data);
    const tempData = [...data];
    const taskToMove = tempData[sourceColumnIndex].taskList[sourceTaskIndex];

    // Remove task from source column
    tempData[sourceColumnIndex].taskList = tempData[
      sourceColumnIndex
    ].taskList.filter((_, index) => index !== sourceTaskIndex);

    // Insert task into target column at specified position
    tempData[targetColumnIndex - 1].taskList.splice(
      targetPosition,
      0,
      taskToMove
    );
    setData(tempData);

    // Scroll to the top of the target column
    const targetColumnRef = document.querySelectorAll(`div.TaskListColWrapper`)[
      targetColumnIndex - 1
    ];
    console.log(targetColumnRef);
    if (targetColumnRef) {
      targetColumnRef.scrollTop = 0;
    }
  };

  return (
    <>
      <Loader loading={loading}/>
      {/* Navigation component */}
      <Nav
        setisTaskFormOpen={setIsTaskFormOpen}
        setisColFormOpen={setIsColFormOpen}
        setoverlayShow={setOverlayShow}
      />

      {/* Task list components */}
      <div className="TaskListOuterWrapper">
        {data.map((item, index) => (
          <Tasklist
            key={index}
            columnIndex={item.columnOrder}
            accentColor={item.accentColor}
            name={item.status}
            taskList={item.taskList}
            setactiveCard={setActiveCard}
            onDrop={onDrop}
            setisDraggingCardInside={setIsDraggingCardInside}
            isDraggingCardInside={isDraggingCardInside}
            setTaskShow={setTaskShow}
          />
        ))}
      </div>

      {/* Overlay component */}
      <Overlay
        overlayShow={overlayShow}
        setisTaskFormOpen={setIsTaskFormOpen}
        setisColFormOpen={setIsColFormOpen}
        setoverlayShow={setOverlayShow}
        setTaskShow={setTaskShow}
        setisWelcomeMessageShown={setisWelcomeMessageShown}
      />

      {/* Details Modal Component */}
      <AnimatePresence>
        {TaskShow && (
          <motion.div
            className="TaskDetailSideBar"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <TaskDetails
              data={data}
              setData={data}
              TaskShow={TaskShow}
              setTaskShow={setTaskShow}
              setOverlayShow={setOverlayShow}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form modal component */}
      <FormModal
        data={data}
        setdata={setData}
        isTaskFormOpen={isTaskFormOpen}
        setisTaskFormOpen={setIsTaskFormOpen}
        isColFormOpen={isColFormOpen}
        setisColFormOpen={setIsColFormOpen}
        setoverlayShow={setOverlayShow}
      />

      {/* Intro Popup */}
      <WelcomePopup 
          isWelcomeMessageShown={isWelcomeMessageShown}
          setisWelcomeMessageShown={setisWelcomeMessageShown}
          setOverlayShow={setOverlayShow}
      />
      <CreditFooter 
          isWelcomeMessageShown={isWelcomeMessageShown}
          setisWelcomeMessageShown={setisWelcomeMessageShown}
          setOverlayShow={setOverlayShow}
      />
    </>
  );
}

export default App;
