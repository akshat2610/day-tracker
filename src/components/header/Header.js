import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function Header({visible=true, setVisible}){
  return(
    <div className="Header">
      <h1> Focus. Plan. Track </h1>
    </div>
  );
}
//<ToggleSwitch visible={visible} setVisible={setVisible} />
