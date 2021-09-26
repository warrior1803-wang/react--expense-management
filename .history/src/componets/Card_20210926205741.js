import "../style/Card.css"
//act as a shell
function Card(props) {
    
return(
    <div className="card">
        {props.children}
    </div>
)
}
export default Card;