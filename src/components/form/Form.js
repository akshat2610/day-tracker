import {useState} from "react";
import "./Form.css";

export default function Form({setHealthStars, setWorkStars, setPlayStars, setLoveStars}){


  return (
    <form  className="Form">
      <p> What's your focus today? </p>
      <div>
        <label for="health"> Health </label>
        <input id="health" type="range" min="1" max="4" onChange={e => {setHealthStars(e.target.value)}} />
      </div>
      <div>
        <label for="work">  Work  </label>
        <input id="work" type="range" min="1" max="4" onChange={e => setWorkStars(e.target.value)} />
      </div>
      <div>
        <label for="play">  Play  </label>
        <input id="play" type="range" min="1" max="4" onChange={e => setPlayStars(e.target.value)} />
      </div>
      <div>
        <label for="love">  Love  </label>
        <input id="love" type="range"  min="1" max="4" onChange={e => setLoveStars(e.target.value)} />
      </div>

    </form>

  );
}
