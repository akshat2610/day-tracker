import {useState} from "react";
import "./Form.css";
import Fade from "react-reveal";

export default function Form({setHealthPomodoros, setWorkPomodoros, setPlayPomodoros, setLovePomodoros}){
  return (
    <Fade left duration={5000} distance="500px">
      <form  className="Form">
        <p> What's your focus today? </p>
        <div>
          <label for="health"> Health </label>
          <input id="health" type="range" min="1" max="4" onChange={e => {setHealthPomodoros(e.target.value)}} />
        </div>
        <div>
          <label for="work">  Work  </label>
          <input id="work" type="range" min="1" max="4" onChange={e => setWorkPomodoros(e.target.value)} />
        </div>
        <div>
          <label for="play">  Play  </label>
          <input id="play" type="range" min="1" max="4" onChange={e => setPlayPomodoros(e.target.value)} />
        </div>
        <div>
          <label for="love">  Love  </label>
          <input id="love" type="range"  min="1" max="4" onChange={e => setLovePomodoros(e.target.value)} />
        </div>
      </form>
    </Fade>
  );
}
