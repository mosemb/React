import {Link} from 'react-router-dom'
import classes from "./MainNavigation.module.css"

function MainNavigation(){

    return <header className={classes.header}>
        <div className={classes.logo}> React Meet Ups</div>
        <nav>
            <ul>
            <li> 
                <Link to="/"> All Meetups </Link>
            </li>
            <li>
                <Link to="/newmeetups">To Newmeetups Page </Link>
            </li>
            <li>
                <Link to="/favorites">To Favorites Page</Link>
            </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;