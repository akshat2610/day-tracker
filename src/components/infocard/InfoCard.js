import "./InfoCard.css";
import Fade from "react-reveal";

export default function InfoCard({healthHrs, workHrs, playHrs, loveHrs}){
  return(
    <Fade right duration={5000} distance="500px">
      <div className="InfoCard">
        <p> Health progress: {healthHrs} </p>
        <p> Work progress: {workHrs} </p>
        <p> Play progress: {playHrs} </p>
        <p> Love progress: {loveHrs} </p>
      </div>
    </Fade>
  );
}
