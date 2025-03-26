import { Link } from "react-router-dom"

function NavBar()
{
    return(
        <>
            <nav>
                <Link to="/">Home</Link> {" | "}
                <Link to="/about">About</Link> {" | "}
                <Link to="/page1">Page1</Link> 
            </nav>
        </>
    )
}

export default NavBar

