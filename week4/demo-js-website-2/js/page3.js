function page_load(){

    const msgText = "# page3: page load";

    console.log(msgText.toUpperCase())

}

function btnSubmit(){

    let msgText = "# page3: btnSubmit";

    console.log(msgText.toUpperCase())
  
    /*
        div-display-info:
            1- select div-display-info using document.getElementById
            2- validate if div-display-info is not null or undefined, if so, display element not found message and exit function
    */

   const divdisplayinfo = document.getElementById("divdisplayinfo");

   if(divdisplayinfo == null | divdisplayinfo == undefined) {
     msgText = "# divdisplayinfo not found"
     console.log(msgText)    
     return false; //prevent form submit/ext function 
   }

   console.log("-- validate firstname --")

    /*
        firtname:
            1- select firstname field using document.getElementById
            2- validate if firstname field is not null or undefined, if so, display field not found message and exit function
            3- validate if firstname field is empty, if so, display invalid field entry message and exit function
    */
            
   const txtfirstname = document.getElementById("txtfirstname");

   if(txtfirstname == null | txtfirstname == undefined) {
     msgText = "# firstname not found"
     console.log(msgText)    
     divdisplayinfo.innerText = msgText;  
     return false; //prevent form submit/exit function 
   }

   if(txtfirstname.value.trim().length == 0) {
        msgText = "# firstname is required"
        console.log(msgText)      
        divdisplayinfo.innerText = msgText;  
        return false; //prevent form submit/exit function 
    }

   console.log("-- get lastname  element --")

    /*
        lastname:
            1- select lastname field using document.getElementById
            2- validate if lastname field is not null or undefined, if so, display invalid field entry message and exit function
    */

    const txtlastname = document.getElementById("txtlastname");

    if(txtlastname == null | txtlastname == undefined) {
        msgText = "# lastname not found"
        console.log(msgText)    
        divdisplayinfo.innerText = msgText;  
        return false; //prevent form submit/exit function 
    }

    console.log("-- get email element --")

    /*
        email:
            1- select email field using document.getElementById
            2- validate if email field is not null or undefined, if so, display field not found message and exit function
            3- validate if email field is empty, if so, display invalid field entry message and exit function
    */

       const txtemail = document.getElementById("txtemail");

       if(txtemail == null | txtemail == undefined) {
            msgText = "# email not found"
            console.log(msgText)    
            divdisplayinfo.innerText = msgText;  
            return false; //prevent form submit/exit function 
        }

        if(txtemail.value.trim().length == 0) {
            msgText = "# email is required"
            console.log(msgText)      
            divdisplayinfo.innerText = msgText;  
            return false; //prevent form submit/exit function 
        }

        //other validation: validate if email string/text is a valid email pattern ie: javascript regular expressions
        //or HTML5 - <input type="email">

        console.log("-- get comment element --")

    /*
        comment:
            1- select comment field using document.getElementById
            2- validate if comment field is not null or undefined, if so, display field not found message and exit function
            3- validate if comment field is empty, if so, display invalid field entry message and exit function
    */

    /*
        //- display form field information in log ie: 

            msgText = "# form submitted: firstname: " + txtfirstname.value + ", lastname: " + 
            txtlastname.value + ", email: " + txtemail.value + ", comment: ";
    */

    //console.log("# firstname: ", txtfirstname.value)
    //console.log("# lastname: " + txtlastname.value)
    //msgText = "email: " + txtemail
    //console.log(msgText)

    msgText = "# form submitted: firstname: " + txtfirstname.value  + ", lastname: " + 
    txtlastname.value + txtlastname.value + ", email: " + txtemail.value

    //optimize string concatination - es6+ template literal string 

    console.log(msgText)

    msgText = "form submitted"
    divdisplayinfo.innerText = msgText

    //clear each field value 
    txtfirstname.value = "";
    txtlastname.value = "";
    txtemail.value = "";

    /*
        txtcomment.value = "";
    */

    txtfirstname.focus();

    //prevent form post/reload
    return false

}

function btnClear(){

    const msgText = "# page3: btnClear";

    console.log(msgText.toUpperCase())

}



