
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
        return false;
    }

    console.log(msgText.toUpperCase())
    divdisplay.innerText = msgText;
}


