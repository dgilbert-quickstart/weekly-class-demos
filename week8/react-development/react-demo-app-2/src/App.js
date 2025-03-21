
function App() {

  //functions 
  function lnkdemo1()
  {
    let msgText = "# App:: lnkdemo1"
    console.log(msgText)
  }

  //es5+ arrow functions - optimized functions 
  const lnkdemo2 = () =>
  {
    let msgText = "# App:: lnkdemo1"
    console.log(msgText)
  }

  const btndemo1 = () =>
  {
    let msgText = "# App:: btndemo1"
    console.log(msgText)
  }

  //components - jsx - function retun(<> ..jsx.. </>)
  function Header()
  {
    return(
      <>
        <h1>React Demo app v02.0.1</h1>
      </>
    )
  }

  return (
    <>
      <div>
          <Header/>
          <p></p>
          <a href="#" onClick={lnkdemo1}>link demo 1</a>
          <p></p>
          <a href="#" onClick={lnkdemo2}>link demo 1</a>
          <p></p>
          <button onClick={btndemo1}>button demo 1</button>
          <p></p>
          <p>
            Footer @ 2025
          </p>
      </div>
    </>
  );
}

export default App;
