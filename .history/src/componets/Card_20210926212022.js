import "../style/Card.css"
//act as a shell
function Card(props) {
    //card as a default class, add 
    const classes = 'card ' + props.className;
return(
    <div className={classes}>
        {props.children}
    </div>
)
}
export default Card;