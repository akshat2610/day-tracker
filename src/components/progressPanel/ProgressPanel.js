import ProgressBar from "../progressBar/ProgressBar";
import Gauge from "../gauge/Gauge";
import "./ProgressPanel.css"

export default function ProgressPanel(){
  return (
    <div className="ProgressPanel">
        <Gauge />
    </div>
  );
}
