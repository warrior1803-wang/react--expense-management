import "../style/Card.css"
//act as a shell
function Card(props) {
return(
    <div className="card">
        {props.ch}
    </div>
)
}
export default Card;