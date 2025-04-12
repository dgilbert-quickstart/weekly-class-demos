import {Link} from "react-router-dom"

function Dashboard()
{
    return (
        <>
            <nav>
                <span>[logo]</span>
                {" "}
                <span>username</span>
                {" "}
                <Link to="/login">logout</Link>
            </nav>
            <div className="app-center-page">
                <p></p>
                <div style={{display:"flex", width:"90%"}}>
                    <div style={{width:"30%"}}>
                        <p>Category 1</p>
                        <p>Category 2</p>
                        <p>Category 3</p>
                        <p>Category 4</p>
                        <p>Category 5</p>
                        <p>Category 6</p>
                    </div>                 
                    <div style={{width:"50%"}}>
                        <p>Category 1</p>
                    </div>                    
                    <div style={{width:"20%"}}>
                        [about]
                    </div>                
                </div>
                <p></p>
                <span>Footer @ 2025</span>
            </div>
        </>
    )
}

export default Dashboard;
