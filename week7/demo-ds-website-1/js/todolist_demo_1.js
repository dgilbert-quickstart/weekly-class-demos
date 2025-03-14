//gloab or page level scope - memory veariable - accessble by any function on the page 
//remove form memory when close page or morev to anoter page

let todolist = [{"id":126,"name":"item one", "complete":false},
    {"id":843,"name":"item two", "complete":true},
    {"id":2356,"name":"item one", "complete":false}
]

function page_load()
{
    const msgText = "todolist::page_load()"
    console.log(msgText.toLowerCase())

    //ie: make api call to reriee todolist from api / database  

    display_todolist()
}

//-- reduse/call function code in different functions 
function display_todolist()
{
    const msgText = "todolist::display_todolist()"
    console.log(msgText.toLowerCase())

    const msgdisplay = document.getElementById("msgdisplay");
    const divdisplay = document.getElementById("divdisplay");

    let _str_output = "";

    console.log("## todolist ## \n", todolist)

    if(divdisplay == null | divdisplay == undefined){
        msgText = "# divdisplay not found";
        console.error(msgText)
        console.log(msgText)
        return false;
    }

    if(msgdisplay == null | msgdisplay == undefined){
        msgText = "# msgdisplay not found";
        console.error(msgText)
        console.log(msgText)
        return false;
    }

    todolist.forEach(function(item, index){
        //html string 
        //_str_output += `<label>${item.name}</label> <button onclick='btnDelete(${index})'>x</button> <br>`
        _str_output += `<label>${item.name}</label> <button>x</button> <br>`
    })

    //-- build html using DOM - document.creaetElement and document.appendChild

    //divdisplay.innerText = _str_output;
    divdisplay.innerHTML = _str_output;

}

function btnDelete(index)
{
    //delete item from array 
    //todlist.splice(index,1)

    //refresh divdisplay 
    //display_todolist()
}

function btnAdd()
{
    let msgText = "todolist::btnAdd"
    
    const msgdisplay = document.getElementById("msgdisplay");
    const txtadd = document.getElementById("txtadd");
    
    if(msgdisplay == null | msgdisplay == undefined){
        msgText = "# msgdisplay not found";
        console.error(msgText)
        console.log(msgText)
        return false;
    }
    
    if(txtadd == null | txtadd == undefined){
        msgText = "# txtadd not found";
        console.error(msgText)
        console.log(msgText)
        return false;
    }

    //validate if a add text is entered 

    console.log(msgText)

    //add todlist item code 

    //refresh screen, divdisplay 

}



