import "./Display.css";
import Fade from "react-reveal";
import Countdown from "react-countdown"
import {useState} from "react";

export default function Display({isPlanLocked,
                                  setHealthActive,
                                  setWorkActive,
                                  setPlayActive,
                                  setLoveActive}){

  const [isStart, setStart] = useState(false);
  const [activeTask, setActiveTask] = useState("");
  const [category, setCategory] = useState("");

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

    //hide everything here
    //need ids for form and taskForm
    let formContainer = document.querySelector(".Form");
    let taskFormContainer = document.querySelector(".TaskForm");
    let inputFields = document.querySelectorAll("input");

    if (formContainer != null) {
      if (!isStart){
        formContainer.style.display = "none";
        taskFormContainer.style.display = "none";
      }
      else{
        formContainer.style.display = "inline-block";
        taskFormContainer.style.display = "inline-block";
      }
    }
    if (inputFields != null){
      for (let i = 0; i < inputFields.length; i++){
        if (!isStart) {
          inputFields[i].style.readonly = false;
        }
        else{
          inputFields[i].style.readonly = true;
        }
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
