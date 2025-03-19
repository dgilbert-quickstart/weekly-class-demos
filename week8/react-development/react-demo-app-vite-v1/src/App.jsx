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
        jsx 
    </div>
     <div>
      <h2>Demo react app v1</h2>
    </div>
    <p></p>
    <a href="#">display info demo 1</a>
    <p></p>
    <div id="divdisplay">

    </div>
   </>
  );
}

export default App;
