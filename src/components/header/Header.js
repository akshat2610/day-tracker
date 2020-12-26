import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function Header({visible, setVisible}){
  return(
    <div className="Header">
      <ToggleSwitch visible={visible} setVisible={setVisible} />
    </div>
  );
}
