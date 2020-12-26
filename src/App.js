import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Header from './components/header/Header';
import Tutorial from './components/tutorial/Tutorial';
import Timer from "./components/timer/Timer";
import ControlCenter from './components/controlCenter/ControlCenter'
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import InfoCard from './components/infocard/InfoCard';

function App() {
  const [healthPomodoros, setHealthPomodoros] = useState(4);
  const [workPomodoros, setWorkPomodoros] = useState(4);
  const [playPomodoros, setPlayPomodoros] = useState(4);
  const [lovePomodoros, setLovePomodoros] = useState(4);
  const [visible, setVisible] = useState(true);

  const [healthPomodorosCompelted, setHealthPomodorosCompleted] = useState(0);
  const [workPomodorosCompelted, setWorkPomodorosCompleted] = useState(0);
  const [playPomodorosCompelted, setPlayPomodorosCompleted] = useState(0);
  const [lovePomodorosCompelted, setLovePomodorosCompleted] = useState(0);

  const [start, setStart] = useState(false);
  const [activeTask, setActiveTask] = useState("");
  const [category, setCategory] = useState("");

  let healthProgress = healthPomodorosCompelted/healthPomodoros*100;
  let workProgress = workPomodorosCompelted/workPomodoros*100;
  let playProgress = playPomodorosCompelted/playPomodoros*100;
  let loveProgress = lovePomodorosCompelted/lovePomodoros*100;

  function incrementHealthPomodorosCompleted(){ setHealthPomodorosCompleted(healthPomodorosCompelted + 1); }
  function incrementWorkPomodorosCompleted(){ setWorkPomodorosCompleted(workPomodorosCompelted + 1); }
  function incrementPlayPomodorosCompleted(){ setPlayPomodorosCompleted(playPomodorosCompelted + 1); }
  function incrementLovePomodorosCompleted(){ setLovePomodorosCompleted(lovePomodorosCompelted + 1); }

  return (
    <div className="App">
      <Header visible={visible} setVisible={setVisible}/>
      <Tutorial visible={visible}/>
      <Dashboard
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
          loveProgress={loveProgress}
          playProgress={playProgress}
          workProgress={workProgress}
          healthProgress={healthProgress}
        />
      <InfoCard healthProgress={healthProgress} workProgress={workProgress} playProgress={playProgress} loveProgress={loveProgress} />
      <Footer />
    </div>

  );
}

export default App;
