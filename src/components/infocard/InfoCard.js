import "./InfoCard.css";

export default function InfoCard({healthStars, workStars, playStars, loveStars}){
  const total = Number(healthStars) + Number(workStars) + Number(playStars) + Number(loveStars);

  return(
    <div className="InfoCard">
      <p> Health stars: {healthStars} </p>
      <p> Work stars: {workStars} </p>
      <p> Play stars: {playStars} </p>
      <p> Love stars: {loveStars} </p>
      <p> Total: {total} </p>
    </div>
  );
}
