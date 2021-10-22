import "../../style/Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar value={dataPoint.value} maxValue={null}  />
      ))}
    </div>
  );
};
export default Chart;
