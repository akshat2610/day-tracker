import {useState} from "react";
import "./Form.css";
import Fade from "react-reveal";

export default function Form({setHealthHrs, setWorkHrs, setPlayHrs, setLoveHrs, setPlanLocked}){
  const [lock, setLock] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLock(!lock);
    setPlanLocked(!lock);


    let rangeInputFields = document.querySelectorAll(".Form input");
    if (rangeInputFields != null){
      for (let i = 0; i < rangeInputFields.length - 1; i++){
        if (!lock){ rangeInputFields[i].disabled = true; }
        else { rangeInputFields[i].disabled = false; }
      }
    }
  }

  return (
    <Fade left duration={5000} distance="500px">
      <form  className="Form" onSubmit={handleSubmit}>
        <p> What's your focus today? </p>
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
        <input type="submit" value={lock ? "Unlock" : "Lock"} />
      </form>
    </Fade>
  );
}
