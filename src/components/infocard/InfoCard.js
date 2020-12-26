import "./InfoCard.css";
import Fade from "react-reveal";

export default function InfoCard({healthProgress, workProgress, playProgress, loveProgress}){
  return(
    <Fade right duration={5000} distance="500px">
      <div className="InfoCard">
        <p> Health progress: {healthProgress} </p>
        <p> Work progress: {workProgress} </p>
        <p> Play progress: {playProgress} </p>
        <p> Love progress: {loveProgress} </p>
      </div>
    </Fade>
  );
}
