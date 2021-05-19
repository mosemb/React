import classes from "./MeetupItem.module.css";
import MeetupItems from "./MeetupItems"

function MeetUpList(props){

    return <ul className={classes.list}>  {/* This jsx code helps us get the dummy array data
                                            In the Allmeetups.js file */}
        {props.meetups.map((meetup)=>
        <MeetupItems 
        key= {meetup.id} 
        id={meetup.id}
        image = {meetup.image}
        title = {meetup.title}
        address = {meetup.address}
        description= {meetup.description}
        />)}

    </ul>

    
}

export default MeetUpList;