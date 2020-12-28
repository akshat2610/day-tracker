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

  const [activeTask, setActiveTask] = useState("");
  const [category, setCategory] = useState("");

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
          size={125}
          isPlaying={true}
          duration={86400}
          divisor={3600}
          initialRemainingTime={86400 - numSecondsGone}
      />
      <ControlCenter
          setHealthHrs={setHealthHrs}
          setWorkHrs={setWorkHrs}
          setPlayHrs={setPlayHrs}
          setLoveHrs={setLoveHrs}
          setPlanLocked={setPlanLocked}
          activeTask={activeTask}
          category={category}
          setActiveTask={setActiveTask}
          setCategory={setCategory}
          setHealthActive={setHealthActive}
          setWorkActive={setWorkActive}
          setPlayActive={setPlayActive}
          setLoveActive={setLoveActive}
      />
     <h2> Remaining work </h2>
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
