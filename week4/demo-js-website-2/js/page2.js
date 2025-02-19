//js single line comment 

/*
js multi line 
comment 
*/

function page_load(){

    console.log("# page2: page_load");
}

function lnk_dom_demo_1()
{
    //Js DOM- select an html element in the page the manipluate elementie: update element text 

    let msgText = "<b># Introduction to js DOM</b>"

    console.log(msgText);

    //document = global javascript object ie: DOM
    //getElementById = select html element by  id 
    //innerText = update text
    //innerHTML = update html ie: formatting
    document.getElementById("div-display-info").innerText = msgText;
    //document.getElementById("div-display-info").innerHTML = msgText;

}


function lnk_dom_demo_2()
{
    let msgText = "<b># Introduction to js DOM #2</b>" //datatype - string 

    console.log(msgText);

    //# variable data tyle object HTMLElement object - has different structure then string, boolean, number
    //# learn more about different object types ie: w3schools or online references 
    //# ie: HTMLElement object - differnet structires 
    //# Json object  -- different structures 
    
    //const eleDivInfo = document.getElementById("Div-display-info"); //data type = HTMLElement  or null
    const eleDivInfo = document.getElementById("div-display-info"); //data type = HTMLElement  or null
    
    //# if statement - make a decison in code - true/false
    //# if evaluates two values, if true call true code else if false call false code 
    //# if (locical expression) = if a == b or if a != b or if a > b etc..
    if(eleDivInfo == null){
        //true code 
        //# div-display-info not found ie: null
        console.log("# div-display-info not found")
    }
    else
    {
        //false code 
        //# div-display-info not found ie: null
        eleDivInfo.innerText = msgText;
    }

}


