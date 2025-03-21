//components - jsx - function retun(<> ..jsx.. </>)
//- add props
//- external file - export/import 
const Footer = (props) =>
{
    return(
    <>
        <p>
            {props.title} @ {props.year}
        </p>
    </>
)}


export default Footer

