import "./InfoCenter.css";
import ProgressTimer from '../progressTimer/ProgressTimer';
import {useEffect} from "react";
import InfoCard from "../infocard/InfoCard";

export default function InfoCenter({healthHrs,
                                    workHrs,
                                    playHrs,
                                    loveHrs,
                                    isPlanLocked,
                                    isHealthActive,
                                    isWorkActive,
                                    isPlayActive,
                                    isLoveActive}){

  if (isPlanLocked){
    return(
      <div className="InfoCenter">
        <div>
          <span id="healthTimer"> <ProgressTimer  size= {200} rotation="counterclockwise" duration={healthHrs} isPlaying={isHealthActive} label="Health" colors="#ff4d4d" divisor={3600}/> </span>
          <span id="workTimer"> <ProgressTimer size= {200} rotation="counterclockwise" duration={workHrs} isPlaying={isWorkActive} label="Work" colors="#ff6600" divisor={3600}/> </span>
          <span id="playTimer"> <ProgressTimer size= {200} rotation="counterclockwise" duration={playHrs} isPlaying={isPlayActive} label="Play" colors="#47d147" divisor={3600}/> </span>
          <span id="loveTimer"> <ProgressTimer size= {200} rotation="counterclockwise" duration={loveHrs} isPlaying={isLoveActive} label="Love" colors="#3399ff" divisor={3600}/> </span>
        </div>
      </div>
    );
  }
  else{
    return(
      <div className="InfoCenter">
        <InfoCard healthHrs={healthHrs} workHrs={workHrs} playHrs={playHrs} loveHrs={loveHrs} />
      </div>
    );
  }
}
