import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Header from './components/header/Header';
import Timer from "./components/timer/Timer";
import ControlCenter from './components/controlCenter/ControlCenter'
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';

function App() {
  const [healthStars, setHealthStars] = useState(4);
  const [workStars, setWorkStars] = useState(4);
  const [playStars, setPlayStars] = useState(4);
  const [loveStars, setLoveStars] = useState(4);

  const today = new Date();
  const numSecondsGone = today.getHours()*3600 + today.getMinutes()*60 + today.getSeconds();

  return (
    <div className="App">
      <Timer size={125} duration={86400} divisor={3600} initialRemainingTime={86400 - numSecondsGone}/>
      <ControlCenter healthStars={healthStars} workStars={workStars} playStars={playStars} loveStars={loveStars} setHealthStars={setHealthStars} setWorkStars={setWorkStars} setPlayStars={setPlayStars} setLoveStars={setLoveStars}/>
      <Dashboard  />
    </div>

  );
}

export default App;
