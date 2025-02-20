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

function lnk_dom_demo_3()
{
    let msgText = "# page2 : link_dom_demo_3"

    console.log(msgText)

    //# select search text element
    //# select div element
    
    //const txtSearch = document.getElementById("txtSearch"); //HTMLElement object or null
    const txtSearch = document.getElementById("txtsearch"); //HTMLElement object or null

    const eleDivInfo = document.getElementById("div-display-info"); //HTMLElement object or null

    //# check if text and div element is null
    if (txtSearch == null) {

        console.log("# txtsearch field not found")
        return false //cancel mouse click and exit function 
    }

    if (eleDivInfo == null) {

        console.log("# div-display-info not found")
        return false //cancel mouse click and exit function 
    }

    //# check if txtsearch field is empty
    //if (txtSearch.value == ""){
    if (txtSearch.value.trim().length == 0){

        msgText = "# please enter a text to search";

        console.log(msgText)
        
        eleDivInfo.innerText = msgText;

        return false //cancel mouse click and exit function 
    }

    //continue code if no error
    
    //# display seach text info in div
    
    //txtSearch.value = retrieve text entered in text field    
    msgText = "txtsearch: " + txtSearch.value;

    //eleDivInfo.innerHTML = msgText;
    eleDivInfo.innerText = msgText;

    //clear text field
    txtSearch.value = "";
}

function btnSearch(){

    let msgText = "# page2: btnSearch"
    console.log(msgText.toUpperCase());

    //select text field and display div using document.getElementById
    //validate if text field and display div is not null, if so and exit function
    //validate if text field is empty, if so exit function
    //display search text in display div

}

function lnkClear(){
    
    let msgText = "# page2: lnkClear"
    console.log(msgText.toUpperCase());

    //select text field and display div using document.getElementById
    //validate if text field and display div is not null, if so and exit function
    //clear text field
    //set keyboard focus to the text field
}

