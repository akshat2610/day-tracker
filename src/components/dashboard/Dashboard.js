import "./Dashboard.css";
import Timer from "../timer/Timer";
import ControlCenter from "../controlCenter/ControlCenter";
import InfoCenter from "../infoCenter/InfoCenter";
import Gauge from "../gauge/Gauge";

export default function Dashboard({setHealthPomodoros,
                                    setWorkPomodoros,
                                    setPlayPomodoros,
                                    setLovePomodoros,
                                    incrementHealthPomodorosCompleted,
                                    incrementWorkPomodorosCompleted,
                                    incrementPlayPomodorosCompleted,
                                    incrementLovePomodorosCompleted,
                                    start,
                                    activeTask,
                                    category,
                                    setStart,
                                    setActiveTask,
                                    setCategory,
                                    loveProgress,
                                    playProgress,
                                    workProgress,
                                    healthProgress}){

  const today = new Date();
  const numSecondsGone = today.getHours()*3600 + today.getMinutes()*60 + today.getSeconds();

  return(
    <div className="Dashboard">
      <Timer
          size={125}
          duration={86400}
          divisor={3600}
          initialRemainingTime={86400 - numSecondsGone}
      />
      <ControlCenter
          setHealthPomodoros={setHealthPomodoros}
          setWorkPomodoros={setWorkPomodoros}
          setPlayPomodoros={setPlayPomodoros}
          setLovePomodoros={setLovePomodoros}
          incrementHealthPomodorosCompleted={incrementHealthPomodorosCompleted}
          incrementWorkPomodorosCompleted={incrementWorkPomodorosCompleted}
          incrementPlayPomodorosCompleted={incrementPlayPomodorosCompleted}
          incrementLovePomodorosCompleted={incrementLovePomodorosCompleted}
          start={start}
          activeTask={activeTask}
          category={category}
          setStart={setStart}
          setActiveTask={setActiveTask}
          setCategory={setCategory}
      />
      <Gauge
          loveProgress={loveProgress}
          playProgress={playProgress}
          workProgress={workProgress}
          healthProgress={healthProgress}
      />
    </div>
  );
}
