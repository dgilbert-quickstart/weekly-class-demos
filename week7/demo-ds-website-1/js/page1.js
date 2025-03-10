
function page_load()
{
    const msgText = "#page1::page_load"

    console.log(msgText.toUpperCase())
}


function array_demo_1()
{
    let msgText = "#page1::array_demo_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;
}


