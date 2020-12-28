import "./Dashboard.css";
import Timer from "../timer/Timer";
import ControlCenter from "../controlCenter/ControlCenter";
import InfoCenter from "../infoCenter/InfoCenter";
import InfoCard from "../infocard/InfoCard";

export default function Dashboard({healthHrs,
                                    workHrs,
                                    playHrs,
                                    loveHrs,
                                    isPlanLocked,
                                    setHealthHrs,
                                    setWorkHrs,
                                    setPlayHrs,
                                    setLoveHrs,
                                    setPlanLocked,
                                    activeTask,
                                    category,
                                    setStart,
                                    setActiveTask,
                                    setCategory,
                                    isHealthActive,
                                    isWorkActive,
                                    isPlayActive,
                                    isLoveActive,
                                    setHealthActive,
                                    setWorkActive,
                                    setPlayActive,
                                    setLoveActive}){

  const today = new Date();
  const numSecondsGone = today.getHours()*3600 + today.getMinutes()*60 + today.getSeconds();

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
          setStart={setStart}
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
