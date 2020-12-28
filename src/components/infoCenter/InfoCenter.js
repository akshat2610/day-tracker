import "./InfoCenter.css";
import Timer from "../timer/Timer";

export default function InfoCenter({healthHrs, workHrs, playHrs, loveHrs}){
  return(
    <div className="InfoCenter">
      <div >
        <Timer size= {200} rotation="counterclockwise" duration={healthHrs} isPlaying={false} label="Health" colors="#ff4d4d"/>
        <Timer size= {200} rotation="counterclockwise" duration={workHrs} isPlaying={true} label="Work" colors="#ff6600"/>
        <Timer size= {200} rotation="counterclockwise" duration={playHrs} isPlaying={false} label="Play" colors="#47d147"/>
        <Timer size= {200} rotation="counterclockwise" duration={loveHrs} isPlaying={false} label="Love" colors="#3399ff"/>
      </div>
    </div>
  );
}
