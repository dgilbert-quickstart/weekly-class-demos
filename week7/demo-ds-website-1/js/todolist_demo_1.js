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
        //_str_output += `<label>${item.name}</label> <button>x</button> <br>`
        _str_output += `<label>${item.name}</label> <button onclick='btnDelete(${index})'>x</button> <br>`
    })

    //-- build html using DOM - document.creaetElement and document.appendChild

    //divdisplay.innerText = _str_output;
    divdisplay.innerHTML = _str_output;

}

function btnDelete(index)
{
    console.log(`# delete index: ${index}`)
    
    if(confirm("delete item ?")){
        //delete item from array 
        todolist.splice(index,1)
    
        //refresh divdisplay 
        display_todolist()
    }
        
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
    if(txtadd.value.trim().length == 0){

        msgText = "# please enter a text to add"
        console.log(msgText)
        msgdisplay.innerText = msgText
        return false
    }

    //add todolist item code 
    const _new_item = {"id":283,"name":txtadd.value, "complete":false}
    todolist.push(_new_item)

    msgText = "# text added"
    console.log(msgText)
    msgdisplay.innerText = msgText
    txtadd.value = ""

    //refresh screen, divdisplay 
    display_todolist();

}

function lnkClearAdd()
{
    let msgText = "todolist::lnkClearAdd"
    console.log(msgText)

    //select msgdisplay div 
    //select txtadd 
    //validate if msgdisplay exist
    //validaet if txtadd exists 
    //clear txtadd 

}

function lnkClearSearch()
{
    let msgText = "todolist::lnkClearSearch"
    console.log(msgText)

    //select msgdisplay div 
    //select txtsearch 
    //validate if msgdisplay exist
    //validaet if txtsearch exists 
    //clear txtsearch

}

function btnSearch()
{
    let msgText = "#todolist::btnSearch"

    console.log(msgText)

    //select msgdisplay 
    //select dvidisplay
    //select txtsearch
    const msgdisplay = document.getElementById("msgdisplay")
    const divdisplay = document.getElementById("divdisplay")
    const txtsearch = document.getElementById("txtsearch")

    //validate if msgdisplay  found
    //validate if dvidisplay found
    //validate if txtsearch found 
    
    if(msgdisplay == null | msgdisplay == undefined){
        msgText = "# msgdisplay not found"
        console.log(msgText)
        return false;
    }

    if(divdisplay == null | divdisplay == undefined){
        msgText = "# divdisplay not found"
        console.log(msgText)
        return false;
    }

    if(txtsearch == null | txtsearch == undefined){
        msgText = "# txtsearch not found"
        console.log(msgText)
        return false;
    }

    //valid if a valid search text is entered 
    if(txtsearch.value.trim().length == 0){
        msgText = "# please enter valid text to search"
        console.log(msgText)
        msgdisplay.innerText = msgText
        return false;
    }

    // create new array using array.filter 
    const _filtered_todlist = todolist.filter(function(item){
        if(item.name.trim().toLowerCase() == txtsearch.value.trim().toLowerCase())
        {
            return true
        }
    })

    //if filterd array is not null    
    //loop throuh filtered array and display in divdisplay 

    console.log("\n # filtered todolist \n", _filtered_todlist);

    let _str_output = "";

    _filtered_todlist.forEach(function(item, index){
        _str_output += `<label>${item.name}</label> <button onclick='btnDelete(${index})'>x</button> <br>`
    })

    divdisplay.innerHTML = _str_output;

    txtsearch.value = ""
}


