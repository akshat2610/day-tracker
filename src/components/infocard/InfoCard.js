import "./InfoCard.css";

export default function InfoCard({healthStars, workStars, playStars, loveStars}){
  return(
    <div className="InfoCard">
      <p> Health stars: {healthStars} </p>
      <p> Work stars: {workStars} </p>
      <p> Play stars: {playStars} </p>
      <p> Love stars: {loveStars} </p>
    </div>
  );
}
