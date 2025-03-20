//custom react element/components/pages 
//move into seperate file 
export default function Header(props){
    //element/component/page - return jsx

    //props = properties/ attributes / data passed into the component 
    //props - can be called any name - ie: info
    //retirve an expected property named title
    //can pass in more than 1 property

    return (
      <>
        <h2>{props.title}</h2>
      </>
    )
}

/*

ERROR in [eslint]
src\App.js
  Line 64:10:  'Header' is not defined  react/jsx-no-undef

*/
