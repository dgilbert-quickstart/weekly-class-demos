import Header from "./components/Header"
import Footer from "./components/Footer"

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
          <Footer></Footer>
      </div>
    </>
  );
}

export default App;
