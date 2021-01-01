import "./Dashboard.css";
import Timer from "../timer/Timer";
import ControlCenter from "../controlCenter/ControlCenter";
import InfoCenter from "../infoCenter/InfoCenter";
import InfoCard from "../infocard/InfoCard";
import {useState} from "react";

export default function Dashboard(){
  const today = new Date();
  const numSecondsGone = today.getHours()*3600 + today.getMinutes()*60 + today.getSeconds();

  const [healthHrs, setHealthHrs] = useState(4);
  const [workHrs, setWorkHrs] = useState(4);
  const [playHrs, setPlayHrs] = useState(4);
  const [loveHrs, setLoveHrs] = useState(4);
  const [isPlanLocked, setPlanLocked] = useState(false);

  const [isHealthActive, setHealthActive] = useState(false);
  const [isWorkActive, setWorkActive] = useState(false);
  const [isPlayActive, setPlayActive] = useState(false);
  const [isLoveActive, setLoveActive] = useState(false);

  return(
    <div className="Dashboard">
      <Timer
          width={8}
          colors={[
                  ['#004777', 0.33],
                  ['#F7B801', 0.33],
                  ['#A30000', 0.33],
                ]}
          duration={86400}
          divisor={3600}
          initialRemainingTime={86400 - numSecondsGone}
          label="Hrs left"
      />
      <ControlCenter
          setHealthHrs={setHealthHrs}
          setWorkHrs={setWorkHrs}
          setPlayHrs={setPlayHrs}
          setLoveHrs={setLoveHrs}
          isPlanLocked={isPlanLocked}
          setPlanLocked={setPlanLocked}
          setHealthActive={setHealthActive}
          setWorkActive={setWorkActive}
          setPlayActive={setPlayActive}
          setLoveActive={setLoveActive}
      />
     <h2> {isPlanLocked ? "Remaining work" : "Total work"} </h2>
     <InfoCenter
          healthHrs={healthHrs}
          workHrs={workHrs}
          playHrs={playHrs}
          loveHrs={loveHrs}
          isPlanLocked={isPlanLocked}
          isHealthActive={isHealthActive}
          isWorkActive={isWorkActive}
          isPlayActive={isPlayActive}
          isLoveActive={isLoveActive}
      />
    </div>
  );
}


/*
<Gauge
    loveProgress={loveProgress}
    playProgress={playProgress}
    workProgress={workProgress}
    healthProgress={healthProgress}
/>
*/
