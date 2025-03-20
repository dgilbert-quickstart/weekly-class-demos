/*
jsx - page/component
ie: App = react component / page 
export function - jsx/ component/page 
- other components can re-use app component
*/
function App() {
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
    <a href="#">display info demo 1</a>
    <p></p>
    <button>display info demo 2</button>
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
