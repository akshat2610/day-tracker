import "./InfoCenter.css";
import Timer from "../timer/Timer";
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

  /*
  useEffect(()=>{
    console.log("Should be rendered again!!!");
    console.log("healthHrs: " + healthHrs);
    console.log("workHrs: " + workHrs);
    console.log("playHrs: " + playHrs);
    console.log("loveHrs: " + loveHrs);
  }, [healthHrs, workHrs, playHrs, loveHrs]);
  */

  let healthTimerContainer = document.getElementById("healthTimer");
  let workTimerContainer = document.getElementById("workTimer");
  let playTimerContainer = document.getElementById("playTimer");
  let loveTimerContainer = document.getElementById("loveTimer");

  if (isHealthActive){
    if (workTimerContainer != null) {workTimerContainer.style.display = "none";}
    if (playTimerContainer != null) {playTimerContainer.style.display = "none";}
    if (loveTimerContainer != null) {loveTimerContainer.style.display = "none";}
  }
  else{
    if (workTimerContainer != null) {workTimerContainer.style.display = "inline-block";}
    if (playTimerContainer != null) {playTimerContainer.style.display = "inline-block";}
    if (loveTimerContainer != null) {loveTimerContainer.style.display = "inline-block";}
  }

  if (isPlanLocked){
    return(
      <div className="InfoCenter">
        <div>
          <Timer id="healthTimer" size= {200} rotation="counterclockwise" duration={healthHrs} isPlaying={isHealthActive} label="Health" colors="#ff4d4d" />
          <Timer id="workTimer" size= {200} rotation="counterclockwise" duration={workHrs} isPlaying={isWorkActive} label="Work" colors="#ff6600" />
          <Timer id="playTimer" size= {200} rotation="counterclockwise" duration={playHrs} isPlaying={isPlayActive} label="Play" colors="#47d147" />
          <Timer id="loveTimer" size= {200} rotation="counterclockwise" duration={loveHrs} isPlaying={isLoveActive} label="Love" colors="#3399ff" />
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
