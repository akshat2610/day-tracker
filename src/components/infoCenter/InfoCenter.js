import "./InfoCenter.css";
import Timer from "../timer/Timer";
import {useEffect} from "react";

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

  if (isPlanLocked){
    return(
      <div className="InfoCenter">
        <div>
          <Timer size= {200} rotation="counterclockwise" duration={healthHrs} isPlaying={isHealthActive} label="Health" colors="#ff4d4d" />
          <Timer size= {200} rotation="counterclockwise" duration={workHrs} isPlaying={isWorkActive} label="Work" colors="#ff6600" />
          <Timer size= {200} rotation="counterclockwise" duration={playHrs} isPlaying={isPlayActive} label="Play" colors="#47d147" />
          <Timer size= {200} rotation="counterclockwise" duration={loveHrs} isPlaying={isLoveActive} label="Love" colors="#3399ff" />
        </div>
      </div>
    );
  }
  else{
    return(
      <div className="InfoCenter">
        <h1> Progress will be shown here once you lock the plan </h1>
      </div>
    );
  }
}
