//import {BrowserRouter, Routes, Route} from "react-router-dom"
//-- hashrouter - used with GitHub pages
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import NavBar from "./components/NavBar";
import "./App.css"

function App() {
  return (
    <>
      <HashRouter>    
        <NavBar/>        
        <Routes>      
          <Route path="/" element={<Home/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
     </HashRouter>    
    </>
  );
}

export default App;
