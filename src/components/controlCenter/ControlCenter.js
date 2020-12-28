import Form from "../form/Form";
import InfoCard from "../infocard/InfoCard";
import TaskForm from "../taskForm/TaskForm";
import Display from "../display/Display";
import "./ControlCenter.css"

export default function ControlCenter({setHealthHrs,
                                        setWorkHrs,
                                        setPlayHrs,
                                        setLoveHrs,
                                        setPlanLocked,
                                        activeTask,
                                        category,
                                        setActiveTask,
                                        setCategory,
                                        setHealthActive,
                                        setWorkActive,
                                        setPlayActive,
                                        setLoveActive}){
  return(
      <div className="ControlCenter">
        <TaskForm />
        <Display
            activeTask={activeTask}
            category={category}
            setActiveTask={setActiveTask}
            setCategory={setCategory}
            setHealthActive={setHealthActive}
            setWorkActive={setWorkActive}
            setPlayActive={setPlayActive}
            setLoveActive={setLoveActive}
        />
        <Form
            setHealthHrs={setHealthHrs}
            setWorkHrs={setWorkHrs}
            setPlayHrs={setPlayHrs}
            setLoveHrs={setLoveHrs}
            setPlanLocked={setPlanLocked}
        />
      </div>
  );
}

//<InfoCard healthHrs={healthHrs} workHrs={workHrs} playHrs={playHrs} loveHrs={loveHrs}/>
