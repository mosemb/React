import { Link } from "react-router-dom";

function BlogList({blogs,title,handleDelete}){
   // const blogs = props.blogs
   // const title = props.title
   // const handleDelete = props.handleDelete()

   // console.log(blogs)
    

    return <div className = "blog-list">
        <h2>{title}</h2>
    {
        blogs.map(
            function(blog){
               return <div className="blog-preview" key= {blog.id}>
                   <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    {/*<p>{blog.body}</p>*/}
                    <p>Written by {blog.author}</p>
                    {/*{<button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>}*/}
                    </Link>
                </div>

            } )
    }
        

    </div>

}


export default BlogList;