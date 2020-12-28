import {useState} from "react";
import "./Form.css";
import Fade from "react-reveal";

export default function Form({setHealthHrs, setWorkHrs, setPlayHrs, setLoveHrs}){
  return (
    <Fade left duration={5000} distance="500px">
      <form  className="Form">
        <p> Enter number of hours (min=1, max=4) for each </p>
        <div>
          <label for="health"> Health </label>
          <input id="health" type="range" min="1" max="4" onChange={e => {setHealthHrs(e.target.value)}} />
        </div>
        <div>
          <label for="work">  Work  </label>
          <input id="work" type="range" min="1" max="4" onChange={e => setWorkHrs(e.target.value)} />
        </div>
        <div>
          <label for="play">  Play  </label>
          <input id="play" type="range" min="1" max="4" onChange={e => setPlayHrs(e.target.value)} />
        </div>
        <div>
          <label for="love">  Love  </label>
          <input id="love" type="range"  min="1" max="4" onChange={e => setLoveHrs(e.target.value)} />
        </div>
      </form>
    </Fade>
  );
}
