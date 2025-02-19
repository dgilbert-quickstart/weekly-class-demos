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

    //document = global javascript object ie: DOM
    //getElementById = select html element by  id 
    //innerText = update text
    //innerHTML = update html ie: formatting
    //document.getElementById("div-display-info").innerText = msgText;
    document.getElementById("div-display-info").innerHTML = msgText;

}


