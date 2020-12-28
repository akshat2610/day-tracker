import "./ProgressTimer.css";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import Fade from "react-reveal";

export default function ProgressTimer({size,
                                duration,
                                divisor=1,
                                initialRemainingTime,
                                rotation,
                                label="",
                                colors="#000000",
                                width=12,
                                isPlaying=true}){
  function removeSelf(){
    let healthTimerContainer = document.getElementById("healthTimer");
    let workTimerContainer = document.getElementById("workTimer");
    let playTimerContainer = document.getElementById("playTimer");
    let loveTimerContainer = document.getElementById("loveTimer");

    if (label === "Health") {
      if (healthTimerContainer != null){
        healthTimerContainer.style.display = "none";
      }
    }
    if (label === "Work") {
      if (workTimerContainer != null){
        workTimerContainer.style.display = "none";
      }
    }
    if (label === "Play"){
      if (playTimerContainer != null){
        playTimerContainer.style.display = "none";
      }
    }
    if (label === "Love") {
      if (loveTimerContainer != null){
        loveTimerContainer.style.display = "none";
      }
    }
  }

  return(
    <Fade top duration={1000} distance="100px">
      <div className="Timer">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          rotation={rotation}
          duration={duration*3600}
          initialRemainingTime={initialRemainingTime}
          colors={colors}
          size = {size}
          strokeWidth = {width}
        >
        {({ remainingTime }) => remainingTime <= 0 ? remainingTime = removeSelf() : label + ":  " + Math.ceil(remainingTime/divisor)}
        </CountdownCircleTimer>
      </div>
    </Fade>
  );
}
