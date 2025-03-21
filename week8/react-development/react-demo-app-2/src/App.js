import { useRef } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  const divdisplay = useRef("") //refence, select manipluate jsx element ie: DOM
  
  //functions 
  function lnkdemo1()
  {
    let msgText = "# App:: lnkdemo1"
    console.log(msgText)
      
    //const divdisplay = document.getElementById("divdisplay")
    //validate if divdisplay is found
    //divdisplay.innerText = ...
    //react will create/generate the DOM document element code 

    divdisplay.current.innerText = msgText

  }

  //es5+ arrow functions - optimized functions 
  const lnkdemo2 = () =>
  {
    let msgText = "# App:: lnkdemo2"
    console.log(msgText)
    divdisplay.current.innerText = msgText

  }

  const btndemo1 = () =>
  {
    let msgText = "# App:: btndemo1"
    console.log(msgText)
    divdisplay.current.innerText = msgText

  }

  return (
    <>
      <div>
          <Header title="React Demo app v02.0.2"/>
          <p></p>
          <a href="#" onClick={lnkdemo1}>link demo 1</a>
          <p></p>
          <a href="#" onClick={lnkdemo2}>link demo 1</a>
          <p></p>
          <button onClick={btndemo1}>button demo 1</button>
          <p></p>
          <Footer title="footer" year={2025}></Footer>
      </div>
      <div id="divdisplay" ref={divdisplay}>

      </div>
    </>
  );
}

export default App;
