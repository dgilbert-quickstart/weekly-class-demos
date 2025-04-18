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

    let msgText = "# page2: btnSearch" //string 
    console.log(msgText.toUpperCase());  

    //select text field and display div using document.getElementById
    const txtsearch = document.getElementById("txtsearch"); //HTMLElement or null
    const divdisplayinfo = document.getElementById("div-display-info"); //HTMLElement or null

    //validate if text field and display div is not null, if so and exit function
    if(txtsearch == null){
        msgText = "# txtsearch field not found"
        console.log(msgText)
        return false //stop onclick and exit function 
    }

    if(divdisplayinfo == null){
        msgText = "# divdisplayinfo field not found"
        console.log(msgText)
        return false //stop onclick and exit function 
    }

    //######## other if condition examples ####
    //if(txtsearch != null) -> not null 
    //if(txtsearch == null ! divdisplayinfo == null)  -> or 
    //if(txtsearch == null & divdisplayinfo == null) -> or

    //validate if text field is empty, if so exit function
    if(txtsearch.value.trim().length == 0) {
        msgText = "# please enter a valid search text"
        console.log(msgText)
        divdisplayinfo.innerText = msgText
        return false //stop onclick and exit function 
    }

    //display search text in display div
    msgText = "# searching for: " + txtsearch.value

    //divdisplayinfo.innerHTML = "<br>" + msgText + "</b>"
    divdisplayinfo.innerText = msgText;

    txtsearch.value = ""; //clear text field
    txtsearch.focus(); //move keyboard cursor to text field

}

function lnkClear(){
    
    let msgText = "# page2: lnkClear"
    console.log(msgText.toUpperCase());

    //select text field and display div using document.getElementById
    
    //const txtsearch = document.getElementById("txtSearch"); //HTMLElement or null
    const txtsearch = document.getElementById("txtsearch");  //HTMLElement or null
    const divdisplayinfo = document.getElementById("div-display-info");  //HTMLElement or null
    
    //validate if text field and display div is null, if so and exit function
    //-- undefined = field was not definded or created
    //-- null - field was defined and does not have a value 
    //-- undefined variable is a variable that was not ceeated
    
    //const var1; //null variable - defined but does not have any value 
    
    //if(txtsearch == null | txtsearch1 == undefined) {
    if(txtsearch == null | txtsearch == undefined) {
        msgText = "# txtsearch is null"
        return false;
    }

    txtsearch.value = ""; //clear text field
    txtsearch.focus(); //set keyboard focus to the text field

    //divdisplayinfo.innerText = ""; //clear div content
    
}

