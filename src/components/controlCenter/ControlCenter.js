import Form from "../form/Form";
import InfoCard from "../infocard/InfoCard";
import TaskForm from "../taskForm/TaskForm";
import Display from "../display/Display";
import "./ControlCenter.css"

export default function ControlCenter({setHealthPomodoros,
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
                                        setCategory}){
  return(
      <div className="ControlCenter">
        <Form
            setHealthPomodoros={setHealthPomodoros}
            setWorkPomodoros={setWorkPomodoros}
            setPlayPomodoros={setPlayPomodoros}
            setLovePomodoros={setLovePomodoros}
        />
        <Display
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
        <TaskForm />
      </div>
  );
}

//<InfoCard healthPomodoros={healthPomodoros} workPomodoros={workPomodoros} playPomodoros={playPomodoros} lovePomodoros={lovePomodoros}/>
