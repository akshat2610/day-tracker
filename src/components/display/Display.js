import "./Display.css";
import Fade from "react-reveal";
import Countdown from "react-countdown"
import {useState} from "react";

export default function Display({activeTask,
                                  category,
                                  setActiveTask,
                                  setCategory,
                                  setHealthActive,
                                  setWorkActive,
                                  setPlayActive,
                                  setLoveActive}){

  const [isStart, setStart] = useState(false);

  function handleSubmit(event){
    event.preventDefault();
    setActiveTask(document.getElementById("task").value);
    setCategory(document.getElementById("category").value);

    switch (document.getElementById("category").value) {
      case "Health":
        setHealthActive(!isStart);
        break;

      case "Work":
        setWorkActive(!isStart);
        break;

      case "Play":
        setPlayActive(!isStart);
        break;

      case "Love":
        setLoveActive(!isStart);
        break;

      default:
        console.log("Some error in display.js");
        break;
    }

    setStart(!isStart);
    console.log("User trying to change display");
  }

  return (
      <Fade bottom duration={2000} distance="500px">
        <div className="Display">
          <form  onSubmit={handleSubmit}>
            <div>
              <label for="task"> Active Task </label>
              <input id="task" type="text"/>
            </div>
            <div>
              <label for="category"> Category </label>
              <select id="category">
                <option value="Health">Health</option>
                <option value="Work">Work</option>
                <option value="Play">Play</option>
                <option value="Love">Love</option>
              </select>
            </div>
            <input type="submit" value={isStart ? "Stop" : "Start"}/>
          </form>
        </div>
      </Fade>
    );


}
