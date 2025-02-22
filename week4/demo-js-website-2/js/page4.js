function Page_Load(){
    const msgText="Page Loaded"
    console.log(msgText.toUpperCase())
}

//-- javascript function can be a javascript keyword
function Submit()
{
    let msgText="Form Submitted";
    console.log(msgText.toUpperCase())
    const div_info = document.getElementById("div_info");

    if(div_info == null| div_info == undefined){
        msgText = "div_info not found"
        console.log(msgText)
        return false;
    }

    console.log("--Please Fill out First Name--")

    /*
        addiotnal code 
    */

        
    return false;
}