import '../../style/Chart.css';
import CHartBar from './ChartBar'
const Chart = (props) =>{
return <div className="chart">
{props.dataPoints.map(dataPoint => <ChartBar />)}
</div>
}
export default Chart;