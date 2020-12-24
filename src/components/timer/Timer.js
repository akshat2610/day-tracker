import {CountdownCircleTimer} from "react-countdown-circle-timer";

export default function Timer({size, duration, divisor, initialRemainingTime}){
  return(
    <span className="Timer">
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        initialRemainingTime={initialRemainingTime}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}
        size = {size}
        onComplete={() => {
          return [true, 0] // repeat animation in 1.5 seconds
        }}
      >
        {({ remainingTime }) => Math.ceil(remainingTime/divisor)}
      </CountdownCircleTimer>
    </span>
  );
}
