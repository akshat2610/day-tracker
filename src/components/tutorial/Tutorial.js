import "./Tutorial.css";

export default function Tutorial({visible}){
  if (visible){
    return (
      <div className="Tutorial">
        <h3> Welcome to day tracker!!! </h3>
        <h3> We follow process-oriented ideology rather than result-oriented </h3>
        <h3> We count your input in pomodoros (25-minute work sessions) </h3>
      </div>
    );
  }
  else{
    return (
      <h1> Track how you spend your day </h1>
    );
  }
}
