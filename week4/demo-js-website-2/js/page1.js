//javascript single line comment 

/*
javascript multi 
line comment 
*/

//global pr page level variables - defined outside a function, access by any functoin 

function display_info1(){
    console.log("# page1 - display info"); 
}

function page_load(){
  console.log("# page1 - page load")
  display_info1();
}

function demo_link1() {
    console.log("# page1 - link1");
    alert("# page1 - link1")
}

function demo_button1() 
{
    console.log("# page1 - button1")
    alert("# page1 - button1")
}

function demo_variables1(){

    console.log("# page1 - variables1")
    //alert("# page1 - variables1")

    //variable - in-memory data, to use later in your code 
    //data type - type odf data stored in memory - string, number, boolean, true/false, other, other 

    //define memory variable to be used later in code 
    //global variables - accessed by other function 
    //global or page level variables - defined outside a function, access by any functoin 
    //function variables - access only by current function 

    var1 = "intro to javascrpt";  //data-type - string
    var_2 = "6"; //data-type - string
    var2 = 6  //data-type - number integer
    var3 = 6.1  //data-type - number floating point including decimal point 
    var4 = true //data-type - boolean - true/false

    //other data types - boolean = true/false, object

    //can convert string to number 

    //when function end - memory variable is removed from memory

    //use variable 
    console.log(var1)

    //combine string variables = concatination 
    console.log(var1 + var_2)

    //combine string and number  = concatination 
    console.log(var1 + var2)

    //combine string and number  = concatination 
    console.log(var1 + " " + var2)

    //combine varables  = concatination 
    console.log(var1,var2,var3)

    //update varible 
    var3 = 6.3 //data type = float, can update to any other data type 

    //combine varables  = concatination 
    console.log(var1,var2,var3)
    
}


function demo_variables2(){

    console.log("# page1 - variables2")
    //alert("# page1 - variables1")

    //variable - in-memory data, to use later in your code 
    //data type - type odf data stored in memory - string, number, boolean, true/false, other, other 

    //define memory variable to be used later in code 
    //global variables - accessed by other function 
    //global or page level variables - defined outside a function, access by any functoin 
    //function variables - access only by current function 

    //var - javascript es1-4 - 1997-2008
    //var - define a local/function in-memory variable 
    //not including var keyword is same as var 
    var var1 = "intro to javascrpt";  //data-type - string
    var var_2 = "6"; //data-type - string
    var var2 = 6  //data-type - number integer
    var var3 = 6.1  //data-type - number floating point including decimal point 
    var var4 = true //data-type - boolean - true/false

    //other data types - boolean = true/false, object

    //can convert string to number 

    //when function end - memory variable is removed from memory

    //use variable 
    console.log(var1)

    //combine string variables = concatination 
    console.log(var1 + var_2)

    //combine string and number  = concatination 
    console.log(var1 + var2)

    //combine string and number  = concatination 
    console.log(var1 + " " + var2)

    //combine varables  = concatination 
    console.log(var1,var2,var3)

    //update varible 
    var3 = 6.3 //data type = float, can update to any other data type 

    //combine varables  = concatination 
    console.log(var1,var2,var3)
    
}


