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
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Footer />
    </div>

  );
}

export default App;
