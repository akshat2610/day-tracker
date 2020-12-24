import {useState} from "react";
import "./Form.css";

export default function Form({setHealthStars, setWorkStars, setPlayStars, setLoveStars}){
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="Form">
      <div>
        <label for="health"> How important is health to you? </label>
        <input id="health" type="range" min="1" max="3" onChange={e => setHealthStars(e.target.value)} />
      </div>
      <div>
        <label for="work"> How important is work to you? </label>
        <input id="work" type="range" min="1" max="3" onChange={e => setWorkStars(e.target.value)} />
      </div>
      <div>
        <label for="play"> How important is play to you? </label>
        <input id="play" type="range" min="1" max="3" onChange={e => setPlayStars(e.target.value)} />
      </div>
      <div>
        <label for="love"> How important is love to you? </label>
        <input id="love" type="range"  min="1" max="3" onChange={e => setLoveStars(e.target.value)} />
      </div>
    </form>

  );
}
