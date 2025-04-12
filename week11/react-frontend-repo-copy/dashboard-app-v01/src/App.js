//import {BrowserRouter, Routes, Route} from "react-router-dom"
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {
  return (
    <>
      <HashRouter>       
        <Routes>      
           <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </HashRouter>    
    </>
  );
}

export default App;
