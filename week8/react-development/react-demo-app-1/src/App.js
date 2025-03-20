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

  //arrow function - es5+ optimized function used in functional javascript programming
  const btnDisplayInfo1 = () =>
  {
    
    let msgText = "# App::btnDisplayInfo1"
    
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
   <>
    <div>
        <h2> React jsx intro </h2>
    </div>
     <div>
      <h2>Demo react app v1</h2>
    </div>
    <p></p>
    <a href="#" onClick={lnkDisplayInfo1}>display info demo 1</a>
    <p></p>
    <button onClick={btnDisplayInfo1}>display info demo 2</button>
    <p></p>
    <div id="divdisplay">
    </div>
    <div>
      <p>footer @ 2025</p>
    </div>
   </>
  );
}

export default App;
