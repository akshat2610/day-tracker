import "./ProgressBar.css"

export default function ProgressBar({name, percentage}){
  const style = {
    width: "200px"
  }

  const Filler = () => {
    return (
      <div className="filler" style={style}>
        {name}
      </div>
   );
  }

  return(
    <div className="ProgressBar">
      <Filler />
    </div>
  );
}
