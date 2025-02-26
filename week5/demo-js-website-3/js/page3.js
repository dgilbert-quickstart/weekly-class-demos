function page_load(){

    const msgText = "# page3: page load"

    console.log(msgText.toUpperCase())
}


function lnkJsonApiDemo1()
{
    
    let msgText = "# page3: lnkJsonApiDemo1"

    console.log(msgText.toUpperCase())

    const divdisplayinfo = document.getElementById("divdisplayinfo");

    if (divdisplayinfo == null | divdisplayinfo == undefined){       
        msgText = "## Page3 - divdisplayinfo not found"
        console.log(msgText) 
        return false;
    }

    divdisplayinfo.innerText = msgText;

    //retrieve Api data 

    //verify root or starting element can be a [] or {}

    //verify invalid, valid document 

    //retieve nested json document fields

    //loop through json documents , nested loops 
    
    //verify element level or starting element can be a [] or {}

    //retiieve nested json document fields or array fields reference
    
    //verify element level or starting element can be a [] or {}

    //convert json string to json object 

}

