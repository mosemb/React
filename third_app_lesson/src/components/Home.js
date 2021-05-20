import {useState, useEffect} from 'react';
import BlogList from "./Lists"

function Home(){

    function HandleClick(){
        console.log("I have been clicked");
    }

    function Click(myname){
        
        console.log("My name is "+myname)
    
    }

    //useState
    const [name, setName]= useState("Mario");
    const [age, setAge] = useState(25);

    function NameandAge(){
        setName("Luigi")
        setAge(30);
    }

    const [blogs, setBlogs] = useState(null)


    const handleDelete = (id) => {
       const NewBlogs = blogs.filter( blog => (blog.id!==id))
       setBlogs(NewBlogs)
    }

    useEffect(()=>fetch(" http://localhost:8000/blogs")
    .then(
        res=>{ return res.json();})
    .then(
        data=>setBlogs(data)), []) // This will run only once 

    // To make sure that the function runs only once then we should use a dependency 
    useEffect(()=>{
        console.log("Run useEffect ", [name]) // This will run only once and react with only name change
    }) // This tracks the name change in useState

    
    return <div className="home">
        {/*Uncomment components as you need them */}
        <h1>Home</h1>
        <button onClick={HandleClick}>Click Me</button>
        <button onClick ={function (){Click("James")}}> Click Me func</button>
        <button onClick={NameandAge}>ClickToChangeAge</button>
        <p>My name is {name} and i am {age}</p>
       {/* <BlogList blogs={blogs} title = "All Blogs "/> {/*The component is taking in more than one prop */}
       {/* <BlogList blogs={blogs.filter((blog)=>(blog.author==="John Mike"))}title="John Mike's Blogs"/>*/}
       {blogs&& <BlogList blogs={blogs} title = "All Blogs " handleDelete ={handleDelete}/>}

    </div>
}

export default Home;