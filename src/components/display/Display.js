import "./Display.css";
import Fade from "react-reveal";
import Countdown from "react-countdown"
import {useState} from "react";

export default function Display({isPlanLocked,
                                  setHealthActive,
                                  setWorkActive,
                                  setPlayActive,
                                  setLoveActive}){

  const [activeTask, setActiveTask] = useState("");
  const [category, setCategory] = useState("");
  const [isStart, setStart] = useState(false);

  function handleSubmit(event){
    event.preventDefault();

    if (!isPlanLocked){
      alert("Lock the hours first!");
      return;
    }

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

    let formContainer = document.querySelector(".Form");
    let taskFormContainer = document.querySelector(".TaskForm");

    if (formContainer != null) {
      if (!isStart){
        formContainer.style.display = "none";
        taskFormContainer.style.display = "none";
        document.getElementById("task").disabled = true;
        document.getElementById("category").disabled = true;
      }
      else{
        formContainer.style.display = "inline-block";
        taskFormContainer.style.display = "inline-block";
        document.getElementById("task").disabled = false;
        document.getElementById("category").disabled = false;
      }
    }

    setStart(!isStart);
  }

  return (
      <Fade bottom duration={2000} distance="500px">
        <div className="Display">
          <form  onSubmit={handleSubmit}>
            <div>
              <label for="task"> Active Task </label>
              <input id="task" type="text" required/>
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
            <input id="startBtn" type="submit" value={isStart ? "Stop" : "Start"}/>
          </form>
        </div>
      </Fade>
    );
}
