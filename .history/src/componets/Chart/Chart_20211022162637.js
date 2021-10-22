import '../../style/Chart.css';
import CHartBar from './ChartBar'
const Chart = (props) =>{
return <div className="chart">
{props.dataPoints}
</div>
}
export default Chart;