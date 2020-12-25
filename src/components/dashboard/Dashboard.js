import "./Dashboard.css";
import Score from "../score/Score";
import ProgressPanel from "../progressPanel/ProgressPanel"
import Gauge from "../gauge/Gauge";

export default function Dashboard({healthStars, workStars, playStars, loveStars}){
  return(
    <div className="Dashboard">
      <Gauge />
    </div>
  );
}
