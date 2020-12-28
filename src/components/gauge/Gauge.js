import ApexCharts from "apexcharts";
import {useState, useEffect} from "react";
import "./Gauge.css";

export default function Gauge({healthProgress, workProgress, playProgress, loveProgress}){
  const [options, setOptions] = useState({
      chart: {
        height: 300,
        type: "radialBar",
      },
      series: [loveProgress, playProgress, workProgress, healthProgress],
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

  useEffect(()=> {
    options.series = [loveProgress, playProgress, workProgress, healthProgress];
    console.log(options.series);
    setOptions(options);
  }, [healthProgress, workProgress, playProgress, loveProgress]);

  const position = document.querySelector(".Gauge");
  const chart = new ApexCharts(position, options);

  if (position != null){
    console.log("render called...");
    chart.render();
    var chartList = document.querySelectorAll(".Gauge div");
    chartList[1].remove();
  }

  return(
    <div className="Gauge">
    </div>
  );
}
