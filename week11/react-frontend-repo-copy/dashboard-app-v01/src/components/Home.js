import {Link} from "react-router-dom"

function Home()
{
    return (
        <>
            <p>React Dashboard App v1.3</p>
            <p></p>
            <p>
                <Link to="/login">Login</Link>
            </p>
            <p>
                <Link to="/register">Register</Link>
            </p>
            <p>
                <Link to="/dashboard">Dashboard</Link>
            </p>
        </>
    )
}

export default Home;
