import ApexCharts from "apexcharts";
import {useState, useEffect} from "react";
import "./Gauge.css";

export default function Gauge(){
  const [options, setOptions] = useState({
      chart: {
        height: 300,
        type: "radialBar",
      },
      series: [67, 84, 97, 61],
      plotOptions: {
        radialBar: {
          dataLabels: {
            total: {
              show: true,
              label: 'TOTAL'
            }
          }
        }
      },
      labels: ['Love', 'Play', 'Work', 'Health']
    });
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("in use effect");
  }, []);

  const position = document.querySelector(".Gauge");
  const chart = new ApexCharts(position, options);
  let rendered = false;

  if (position != null && count < 1 && !rendered){
    console.log(position);
    console.log("Should only render once");
    setCount(count + 1);
    rendered = true;
    chart.render();
    var chartList = document.querySelectorAll(".Gauge div");
    chartList[1].remove();
  }

  return(
    <div className="Gauge">
    </div>
  );
}
