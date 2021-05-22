import {Link} from "react-router-dom"


function NotFound(){

    return <div className="not-found">
        <h2>Sorry </h2>
        <p>That Page Cannot be Found </p>
        <Link to="/"> Back to the Home Page</Link> {/*When link is not found then route back to home page*/}
    </div>

}

export default NotFound;
