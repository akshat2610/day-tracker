import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Header from './components/header/Header';
import Form from './components/form/Form';
import InfoCard from './components/infocard/InfoCard';
import Footer from './components/footer/Footer';
import Timer from "./components/timer/Timer";

function App() {
  const [healthStars, setHealthStars] = useState(3);
  const [workStars, setWorkStars] = useState(3);
  const [playStars, setPlayStars] = useState(3);
  const [loveStars, setLoveStars] = useState(3);

  const today = new Date();
  console.log(today);
  const numSecondsGone = today.getHours()*3600 + today.getMinutes()*60 + today.getSeconds();

  return (
    <div className="App">
      <Header />
      <Timer size={100} duration={86400} divisor={3600} initialRemainingTime={86400 - numSecondsGone}/>
      <Form setHealthStars={setHealthStars} setWorkStars={setWorkStars} setPlayStars={setPlayStars} setLoveStars={setLoveStars}/>
      <InfoCard healthStars={healthStars} workStars={workStars} playStars={playStars} loveStars={loveStars}/>
      <Footer />
    </div>
  );
}

export default App;
