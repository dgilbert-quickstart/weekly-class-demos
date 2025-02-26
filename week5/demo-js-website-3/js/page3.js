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

    const _api_url_endpoint_users = "https://jsonplaceholder.org/users";
    const _api_url_endpoint_comments = "https://jsonplaceholder.org/comments";
    const _api_url_endpoint_posts = "https://jsonplaceholder.org/posts";

    //api key example url
    //const _api_url_endpoint_users_apikey = "https://jsonplaceholder.org/users/apik=youra-apikey";

    //$.getJSON(_api_url_endpoint_users, function(data, status)
    $.get(_api_url_endpoint_users, function(data, status)
    {
        console.log("Jquery - Json API Data: " + "\nStatus: " + status)
        console.log(data); //jquery converts data to json object
    
        console.log("")
        console.log("-------- json data as string ----")
        console.log(JSON.stringify(data))
        console.log("")

        //retrieve data 
        const _name_email = `data[0] ==> firstname: ${data[0].firstname}, 
        email: ${data[0].email} , login.username: ${data[0].login.username}`;

        //for loop example

        divdisplayinfo.innerText = _name_email

    });


    //verify root or starting element can be a [] or {}

    //verify invalid, valid document 

    //retieve nested json document fields

    //loop through json documents , nested loops 
    
    //verify element level or starting element can be a [] or {}

    //retiieve nested json document fields or array fields reference
    
    //verify element level or starting element can be a [] or {}

    //convert json string to json object 

}

