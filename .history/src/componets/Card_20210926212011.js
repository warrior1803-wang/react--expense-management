import "../style/Card.css"
//act as a shell
function Card(props) {
    //把其他
    const classes = 'card ' + props.className;
return(
    <div className={classes}>
        {props.children}
    </div>
)
}
export default Card;