import "./Display.css";
import Fade from "react-reveal";
import Countdown from "react-countdown"
import {useState} from "react";

export default function Display({incrementHealthPomodorosCompleted,
                                  incrementWorkPomodorosCompleted,
                                  incrementPlayPomodorosCompleted,
                                  incrementLovePomodorosCompleted,
                                  start,
                                  activeTask,
                                  category,
                                  setStart,
                                  setActiveTask,
                                  setCategory}){


  function handleSubmit(event){
    event.preventDefault();
    setStart(true);
    setActiveTask(document.getElementById("task").value);
    setCategory(document.getElementById("category").value);
    console.log("User trying to change display");
  }
  
  function incrementByCategory(){
    switch(category){
      case "Health":
        incrementHealthPomodorosCompleted();
        break;
      case "Work":
        incrementWorkPomodorosCompleted();
        break;
      case "Play":
        incrementPlayPomodorosCompleted();
        break;
      case "Love":
        incrementLovePomodorosCompleted();
        break;
      default:
        console.log("Invalid category")
    }
    setStart(false);
  }

  if (!start){
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
            <input type="submit" value="Begin"/>
          </form>
        </div>
      </Fade>
    );
  }
  else{
    return (
      <div className="Display" id="focus">
        <h1> {activeTask} </h1>
        <h5> <Countdown date={Date.now() + 1000} onComplete={incrementByCategory}/> </h5>
      </div>
    );
  }


}
