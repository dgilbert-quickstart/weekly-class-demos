function Home() {

    function lnkdemo1(){
      const msgText = "#App::lnkdemo1"

      console.log(msgText)
    }
    
    const lnkdemo2 = () => {
      const msgText = "#App::lnkdemo2"

      console.log(msgText)
    }

    return (
      <>
          <p>Demo react app v3.1</p>
          <div>
            <a href="#" onClick={lnkdemo1}>useRef demo 1</a><p></p>
            <a href="#" onClick={lnkdemo2}>useState demo 1</a><p></p>              
          </div>
          <div>
            [displa info 1..]
          </div>
          <p>Footer @ 2025</p>
        </>
    );
  }
  
  export default Home;
  