function page_load(){

    const msgText = "# page3: page load"

    console.log(msgText.toUpperCase())
}


function lnkJqueryJsonApiDemo1()
{
    
    let msgText = "# page3: lnkJqueryJsonApiDemo1"

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

    //callback functions or ananymous functions - week 7-8-9
    //learn more from w3school.com 
    //example: 
    // function getdata(data, statue) -- developer call function
    // or
    // callback or ananyomous 
    // some function use callback/ananymous function -- javascript calls callback/ananymous
    // -- when the data is available javascript call the callback/ananymnous function
    //
    //$.getJSON(_api_url_endpoint_users, function(data, status)    
    $.get(_api_url_endpoint_users, function(data, status)
    {
        console.log("Jquery - Json API Data: " + "\nStatus: " + status)
        console.log(data); //jquery converts data to json object
    
        console.log("")
        console.log("-------- json data as string ----")
        //console.log(JSON.stringify(data))
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

function lnkFetchJsonApiDemo1()
{
    
    let msgText = "# page3: lnkFetchJsonApiDemo1"

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

    //fetch - then - promise - non-blocking - javascript call then when data is available 
    //another way of implementing promise = async/await 

    fetch(_api_url_endpoint_users)
    .then(response => {
      if (!response.ok) {
        //throw/raise - generate or a error and descrption 
        throw new Error('Network response was not ok');
      }
      //-- convert data from text to json 
      return response.json();
    })
    .then(data => {

        console.log("#### fetch.promise then - post data ###")
        console.log(data);

        console.log("")
        console.log("-------- json data as string ----")
        //console.log(JSON.stringify(data))
        console.log("")

        //retrieve data 
        const _name_email = `data[0] ==> firstname: ${data[0].firstname}, 
        email: ${data[0].email} , login.username: ${data[0].login.username}`;

        divdisplayinfo.innerText = _name_email
        
    })
    .catch(error => {
      console.error('## There was a problem with the fetch operation:', error);
      divdisplayinfo.innerText = error;
    });

    console.log("..continue fetching data...demo of non-blocking code")
    divdisplayinfo.innerText = "..continue fetching data...demo of non-blocking code";

    //verify root or starting element can be a [] or {}

    //verify invalid, valid document 

    //retieve nested json document fields

    //loop through json documents , nested loops 
    
    //verify element level or starting element can be a [] or {}

    //retiieve nested json document fields or array fields reference
    
    //verify element level or starting element can be a [] or {}

    //convert json string to json object 

}

