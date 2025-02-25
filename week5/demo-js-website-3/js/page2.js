function page_load(){

    const msgText = "# page2: page load"

    console.log(msgText.toUpperCase())
}


function lnkJsonDemo1()
{
    
    const msgText = "# page2: lnkJsonDemo1"

    console.log(msgText.toUpperCase())

    //json object variable 
    const user1 = {"id":1,"name":"ann","email":"ann@gmail.com"} //json object 
    
    //json document can be a string, convert string to json object 
    const str_user2 = `{"id":2,"name":"sam","email":"sam@gmail.com"}` //string 
    const user2 = JSON.parse(str_user2); //convert json string to json object ie: api result 

    //example json document 1 {} , example json document 2 - [{},{}] , other nested document examples

    //verify root or starting element can be a [] or {}

    //display json data as string 
    console.log("-- user1 ---")
    console.log(JSON.stringify(user1))

    console.log("-- user2 ---")
    console.log(str_user2)  //string 
    console.log(JSON.stringify(user2)) //json object to string

    //retieve document field data 

    //if (user == null | user.name == undefined)
    console.log("user1.name: ",user1.name)
    console.log("user2.name: ",user2.name)

    //verify invalid, valid document 

    //retieve nested json document fields

    //loop through json documents , nested loops 
    
    //verify element level or starting element can be a [] or {}

    //retiieve nested json document fields or array fields reference
    
    //verify element level or starting element can be a [] or {}

    //convert json string to json object 

}


