import {CountdownCircleTimer} from "react-countdown-circle-timer";
import "./Timer.css";
import Fade from "react-reveal";

export default function Timer({size=125,
                                duration,
                                divisor=1,
                                initialRemainingTime,
                                rotation,
                                label="",
                                colors="#000000",
                                width=12,
                                isPlaying=true}){

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
        {({ remainingTime }) => label + (label=="" ? "" : ": ") + Math.ceil(remainingTime/divisor)}
        </CountdownCircleTimer>
      </div>
    </Fade>
  );
}
