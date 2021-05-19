import classes from "./MeetupItem.module.css"
import Card from "../ui/Card.js"

function MeetUpItems(props){

    return <li className={classes.item}>
        <Card>
        <div className={classes.image}> 
            <img src ={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
            <div className = {classes.actions}>
                <button>To Favorites </button>
            </div>
        </div>
        </Card>
    </li>
}

export default MeetUpItems;