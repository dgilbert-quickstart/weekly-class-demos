import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Register()
{
    const txtusername = useRef("")
    const txtpassword = useRef("")
    const txtconfirmpassword = useRef("")
    const chkterm = useRef("")
    const [msgText, setMsg] = useState("")

    let navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log("# handle submit")


        let _msg = "";
        let _replit_url = "https://d4a4b615-8c0c-4341-adae-e90a82bcb576-00-2xx2fade5wfsh.worf.replit.dev";
    
        const _uid = txtusername.current.value
        const _pwd = txtpassword.current.value
        const _confirmpwd = txtconfirmpassword.current.value
        const _chkterm = chkterm.current.checked
        
        //const _url = `http://localhost:8080/register`;  
        const _url = `${_replit_url}/register`;  

        if(_uid === null || _uid.trim().length === 0)
        {
            _msg = "* invalid username";                
            setMsg(_msg)                
            return false;
        }
        
        if(_pwd === null || _pwd.trim().length === 0)
        {
            _msg = " * invalid password";                
            setMsg(_msg)                
            return false;
        }
            
        if(_pwd !== _confirmpwd)
        {
            _msg = " * confirm password does not match password";
            setMsg(_msg)                
            return false;
        }
           
        if(_chkterm === false)
        {
            _msg = " * please select terms/services";
            setMsg(_msg)                
            return false;
        }

        const _post_data = {username:_uid, password:_pwd};

        fetch(_url,{method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(_post_data)}
        )
        .then((res)=>res.json())
        .then((data)=> {
            
            if(data.register === true)
            {
                navigate("/dashboard",{replace:true})
            }

            setMsg(data.msg)
        })
        .catch((error)=>{
            setMsg("* request error");
            console.log("* request error *");
            console.log(error);
        });
    
        txtusername.current.value = "";
        txtpassword.current.value = "";
        txtconfirmpassword.current.value = ""
        chkterm.current.checked = false

    }

    return (
        <>
        <div className="app-center-page">
            <p>Register</p>
            <p></p>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>* UserName: </label><input ref={txtusername} type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>* Password: </label><input ref={txtpassword} type="password" placeholder="* password" maxLength={25}></input><br/>
                <label>* Confirm Password: </label><input ref={txtconfirmpassword} type="password" placeholder="* confirm password" maxLength={25}></input>
                <p></p>
                <input type="checkbox" ref={chkterm} />Terms and Services
                <p></p>
                <p>{msgText}</p>
                <p></p>
                <button>Submit</button>
            </form>
            <p></p>
            <Link to="/login">Login</Link>
            <p></p>
            <Link to="/">Home</Link>
        </div>
        </>
    )
}

export default Register;

