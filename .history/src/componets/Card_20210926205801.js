import "../style/Card.css"
//act as a shell
function Card(props) {
    const classes = 'card' + <props className="class"></props>
return(
    <div className="card">
        {props.children}
    </div>
)
}
export default Card;