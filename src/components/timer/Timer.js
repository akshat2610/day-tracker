import {CountdownCircleTimer} from "react-countdown-circle-timer";
import "./Timer.css";
import Fade from "react-reveal";
import {useEffect} from "react";

export default function Timer({size=125,
                                duration,
                                divisor=1,
                                initialRemainingTime,
                                rotation,
                                label="",
                                colors="#000000",
                                width=12,
                                isPlaying=true}){
  useEffect(()=>{
    console.log("Duration changed: " + duration);
  }, [duration]);

  return(
    <Fade top duration={1000} distance="100px">
      <div className="Timer">
        <CountdownCircleTimer
          onComplete={() => {
            return [true, 0];
          }}
          isPlaying={isPlaying}
          rotation={rotation}
          duration={duration}
          initialRemainingTime={initialRemainingTime}
          colors={colors}
          size = {size}
          strokeWidth = {width}
        >
        {({remainingTime}) => "this is a test"}
        </CountdownCircleTimer>
      </div>
    </Fade>
  );
}

//{({ remainingTime }) => label + (label=="" ? "" : ": ") + Math.ceil(remainingTime/divisor)}
