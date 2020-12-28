import {CountdownCircleTimer} from "react-countdown-circle-timer";
import "./Timer.css";
import Fade from "react-reveal";
import {useEffect} from "react";

export default function Timer({size, duration, divisor=1, initialRemainingTime, rotation, isPlaying, label="", colors="#000000", width=12}){
  useEffect(()=>{
    console.log("Duration changed: " + duration);
  }, [duration]);

  return(
    <Fade top duration={1000} distance="100px">
      <div className="Timer">
        <CountdownCircleTimer
          onComplete={() => {
            return [true, 1000000] // repeat animation in 1.5 seconds
          }}
          isPlaying={isPlaying}
          rotation={rotation}
          duration={duration}
          initialRemainingTime={initialRemainingTime}
          colors={colors}
          size = {size}
          strokeWidth = {width}
        >
          {({ remainingTime }) => label + (label=="" ? "" : ": ") + Math.ceil(remainingTime/divisor)}
        </CountdownCircleTimer>
      </div>
    </Fade>
  );
}
