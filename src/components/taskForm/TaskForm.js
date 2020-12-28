import "./TaskForm.css"
import Fade from "react-reveal";

export default function TaskForm(){
  return (
    <Fade right duration={2000} distance="500px">
      <form  className="TaskForm">
        <p> What's on your mind? </p>
        <div>
          <label for="health"> Health </label>
          <input id="health" type="text" size="auto"/>
        </div>
        <div>
          <label for="work">  Work  </label>
          <input id="work" type="text" />
        </div>
        <div>
          <label for="play">  Play  </label>
          <input id="play" type="text" />
        </div>
        <div>
          <label for="love">  Love  </label>
          <input id="love" type="text"/>
        </div>
      </form>
      </Fade>
  );
}
