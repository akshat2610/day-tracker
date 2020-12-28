import "./InfoCard.css";
import Fade from "react-reveal";

export default function InfoCard({healthHrs, workHrs, playHrs, loveHrs}){
  const total = Number(healthHrs) + Number(workHrs) + Number(playHrs) + Number(loveHrs);

  function checkColor(){
    let totalPara = document.getElementById("totalWorkload");
    if (totalPara != null){
      if (total > 10) {totalPara.style.color="red";}
      else if (total <= 8) {totalPara.style.color="green";}
      else {totalPara.style.color="orange";}
    }
  }


  return(
    <Fade bottom duration={5000} distance="500px">
      <div className="InfoCard">
        <p> Health: {healthHrs} hrs</p>
        <p> Work: {workHrs} hrs</p>
        <p> Play: {playHrs} hrs</p>
        <p> Love: {loveHrs} hrs</p>
        <p id="totalWorkload"> Total: {total} hrs</p>
        {checkColor()}
      </div>
    </Fade>
  );
}
