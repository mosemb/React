import { useState } from "react";
import {useHistory} from "react-router-dom"


function Create(){

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario")
    const [ispending, setIsPending] = useState(false);
    const history = useHistory(); // Helps us to use history 

    const handleSubmit = function (e){

        e.preventDefault(); // Prevents the automatic refresh of the page
        const blog = {title, body, author} // This object returns the data for the title body and author
        //console.log(blog)
        setIsPending(true); // When the data is not added yet. 
        fetch("http://localhost:8000/blogs", 
        {
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(
            function(){
                console.log("New Blog added")
                setIsPending(false); // When the data is added 
                history.push("/") // Redirect user to home page after adding blog. 
            }
        )
    }


    return (<div className="create"> 
        <h1> Add a new Blog </h1>
        <form onSubmit={handleSubmit}> 
            <label> Blog Title:</label>
            <input type = "text" 
            required value= {title}
            onChange={(e)=>setTitle(e.target.value)}
            />

            <label> Blog Body:</label>
            <textarea required
            value={body} 
            onChange={(e)=>setBody(e.target.value)} ></textarea>

            <label> Blog Author:</label>
            <select value = {author}
            onChange = {(e)=>setAuthor(e.target.value)}
            >
                <option value = "mario">Mario</option>
                <option value = "yoshi">Yoshi</option>
            </select>
            {!ispending&& <button>Add Blog</button>}
            {ispending&& <button disabled >Adding Blog ...</button>}

            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>

        </form>
    </div>);

}


export default Create; 