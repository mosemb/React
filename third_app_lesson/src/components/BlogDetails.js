//import {useParams} from 'react-router-dom'// Helps us get route parameters for a particular route

import { useHistory, useParams } from "react-router";
import useFetch from "./usefetch";

function BlogDetails(){

const {id} = useParams();
const {data_fe:blog, error, isPending} = useFetch("http://localhost:8000/blogs/"+id)
const history = useHistory()

function handleClickDelete(){
    fetch("http://localhost:8000/blogs/"+id, {method:'DELETE'})
    .then(
        function(){
            history.push("/")
        })
}


    return (
        <div className="blog-details">
            {isPending && <div>Loading ... </div>}
            {error && <div>{error}</div>}
            {blog && <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClickDelete}>Delete</button>
                </article>}
        </div>

    );
}

export default BlogDetails;