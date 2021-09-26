import "../style/Card.css"
//act as a shell
function Card(props) {
    const classes = 
return(
    <div className="card">
        {props.children}
    </div>
)
}
export default Card;