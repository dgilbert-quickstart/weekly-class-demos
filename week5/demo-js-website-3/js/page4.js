function page_load(){

    const msgText = "# page4: page load"

    console.log(msgText.toUpperCase())
}


function giphyApiDemo1()
{
    
    let msgText = "# page4: giphyApiDemo1"

    console.log(msgText.toUpperCase())

    const divdisplayinfo = document.getElementById("divdisplayinfo");

    if (divdisplayinfo == null | divdisplayinfo == undefined){       
        msgText = "## Page3 - divdisplayinfo not found"
        console.log(msgText) 
        return false;
    }

    divdisplayinfo.innerText = msgText;

    //giphy url and api key  
    
    const _search_text = "cars" //input text fields
    const _giphy_ApiKey = ""
    const _giphy_result_data_file = "./data/giphy2.json";
    const _giphyApi_Url = `https://api.giphy.com/v1/gifs/search?api_key=${_giphy_ApiKey}.&q=${_search_text}&limit=25&rating=g`; 

    //fetch - then - promise - non-blocking - javascript call then when data is available 
    //another way of implementing promise = async/await 

    //inline or 1 line if statement 
    let _request_url = (_giphy_ApiKey.trim().length == 0)? _giphy_result_data_file : _giphyApi_Url;

    console.log("---- _request_url---- ");
    console.log(_request_url)
    console.log("")

    fetch(_request_url)
    .then(response => {
      if (!response.ok) {
        //throw/raise - generate or a error and descrption 
        throw new Error('Network response was not ok');
      }
      //-- convert data from text to json 
      return response.json();
    })
    .then(data => {

        console.log("#### giphy fetch.promise then - post data ###")
        console.log(data);

        console.log("")
        console.log("-------- giphy json data as string ----")
        //console.log(JSON.stringify(data))
        console.log("")

        //retrieve giphy data 
        const giphapi_image = `## get giphy api image data##`

        divdisplayinfo.innerText = giphapi_image
        
    })
    .catch(error => {
      console.error('## There was a problem with the fetch operation:', error);
      divdisplayinfo.innerText = error;
    });

    console.log("..continue fetching gphy data...demo of non-blocking code")
    divdisplayinfo.innerText = "..continue fetching giphy data...demo of non-blocking code";

    
    //verify root or starting element can be a [] or {}

    //verify invalid, valid document 

    //retieve nested json document fields

    //loop through json documents , nested loops 
    
    //verify element level or starting element can be a [] or {}

    //retiieve nested json document fields or array fields reference
    
    //verify element level or starting element can be a [] or {}

    //convert json string to json object 

}


