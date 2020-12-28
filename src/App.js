import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Header from './components/header/Header';
import Tutorial from './components/tutorial/Tutorial';
import Timer from "./components/timer/Timer";
import ControlCenter from './components/controlCenter/ControlCenter'
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';

function App() {
  const [healthHrs, setHealthHrs] = useState(4);
  const [workHrs, setWorkHrs] = useState(4);
  const [playHrs, setPlayHrs] = useState(4);
  const [loveHrs, setLoveHrs] = useState(4);
  const [isPlanLocked, setPlanLocked] = useState(false);

  const [activeTask, setActiveTask] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <Header />
      <Dashboard
          healthHrs={healthHrs}
          workHrs={workHrs}
          playHrs={playHrs}
          loveHrs={loveHrs}
          isPlanLocked={isPlanLocked}
          setHealthHrs={setHealthHrs}
          setWorkHrs={setWorkHrs}
          setPlayHrs={setPlayHrs}
          setLoveHrs={setLoveHrs}
          setPlanLocked={setPlanLocked}
          activeTask={activeTask}
          category={category}
          setActiveTask={setActiveTask}
          setCategory={setCategory}
        />
      <Footer />
    </div>

  );
}

export default App;
