import Form from "../form/Form";
import InfoCard from "../infocard/InfoCard";
import "./ControlCenter.css"

export default function ControlCenter({healthStars, workStars, playStars, loveStars, setHealthStars, setWorkStars, setPlayStars, setLoveStars}){
  return(
    <div className="ControlCenter">
      <Form setHealthStars={setHealthStars} setWorkStars={setWorkStars} setPlayStars={setPlayStars} setLoveStars={setLoveStars}/>
      <InfoCard healthStars={healthStars} workStars={workStars} playStars={playStars} loveStars={loveStars}/>
    </div>
  );
}
