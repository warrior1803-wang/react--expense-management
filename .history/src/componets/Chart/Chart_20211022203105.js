import "../../style/Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //max里是一个数字一个数字，但dataPointsValues 是一个list
    //the max of one month's expense and the heighest is the value of the bar
    const totalMax = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />
      ))}
    </div>
  );
};
export default Chart;
