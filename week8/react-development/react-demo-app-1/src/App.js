import Header from "./components/Header"
import Footer from "./components/Footer"

/*
jsx - page/component
ie: App = react component / page 
export function - jsx/ component/page 
- other components can re-use app component
*/
function App() {

  //-- function inside a function 
  function lnkDisplayInfo1()
  {
    let msgText = "# App::lnkDisplayInfo1"
    
    //alert(msgText)
    console.log(msgText)

  }

  const lnkDisplayInfo2 = () => {

    let msgText = "# App::lnkDisplayInfo2"
    
    //alert(msgText)
    console.log(msgText)

  }

  //arrow function - es5+ optimized function used in functional javascript programming
  //function is defined as a variable 
  const btnDisplayInfo2 = () =>
  {
    
    let msgText = "# App::btnDisplayInfo2"
    
    //alert(msgText)
    console.log(msgText)

  }

  //--- function defined before retrun (
  //react eslint - javascrcipt compiler hints, errors, warnings
  //Line 10:12:  'lnkDisplayInfo1' is defined but never used

  return (
    /*
      1 top level container elemen
      can have multiple container element 
      top level - div 
      top <></>
    */

    /*
    props = properties - pass data to a component
    property name = any-name=any-js-data-type
    can pass in 1 or more properties/attributes 
    */
   <>
    <div>
        <Header title="React jsx intro 1.3"/>
    </div>
     <div>
      <h2>Demo react app v1</h2>
    </div>
    <p></p>
    <a href="#" onClick={lnkDisplayInfo1}>display info demo 1</a>
    <p></p>
    <a href="#" onClick={lnkDisplayInfo2}>display info demo 2</a>
    <p></p>
    <button onClick={btnDisplayInfo2}>display info demo 2</button>
    <p></p>
    <div id="divdisplay">
    </div>
    <div>
       <Footer></Footer>
    </div>
   </>
  );
}

export default App;
