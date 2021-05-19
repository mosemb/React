import Card from "../ui/Card"
import classes from "./NewMeetUpsForm.module.css"
import {useRef} from "react";

function NewMeetUpsForm(){
    const titleinputRef = useRef();
    function submitEventHandler(event){
        event.preventDefaults(); // Prevent form defaults 
        const enteredTitle = titleinputRef.current.value; // Gets the input values 
        const enteredImage = imageinputRef.current.value;
        const enteredaddress =addressinputRef.current.value;
        const enteredTextarea = textareainputRef.current.value

    }
    return <Card>
        <form className={classes.form} onSubmit={submitEventHandler}> 
        <div className={classes.control}> 
        <label htmlFor="title">Meet Title </label>
        <input type = "text" required id = "title" ref={titleinputRef}/>
        </div>

        <div className={classes.control}> 
        <label htmlFor="image">Meet Image </label>
        <input type = "url" required id = "image" ref={imageinputRef}/>
        </div>

        <div className={classes.control}> 
        <label htmlFor="address">Meet Image </label>
        <input type = "url" required id = "address" ref={addressinputRef}/>
        </div>

        <div className={classes.control}> 
        <label htmlFor="description">Description </label>
        <textarea id="description" required rows="5" ref={textareainputRef}></textarea>
        </div>

        <div className={classes.actions}>
            <button>
                Add Meetup
            </button>
        </div>

        </form>
        </Card> 
}


export default NewMeetUpsForm;