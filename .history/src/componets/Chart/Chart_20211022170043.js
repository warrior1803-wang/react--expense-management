import "../../style/Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //max里是一个数字一个数字，但dataPointsValues 是一个list
    const totalMax = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={null} label={dataPoint.label} />
      ))}
    </div>
  );
};
export default Chart;
