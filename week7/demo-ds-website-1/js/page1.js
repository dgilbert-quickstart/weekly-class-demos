
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
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    const list1 = [18.46,16,7.3,25,3,80,3]  //numberic 
    const list2 = ["item11","item2","item3","item1"] //string - ie: todo-list

    const list3 = [{"id":1,"name":"item11"}, {"id":2,"name":"item12"}] //json object - ie: todo-list - can have duplicate data
    
    const list4 = ["item11", 1,"item2",23.5,"item3",1,"item1"] //numeric and string  

    const list5 = [{"id":1,"name": "itema", "price":87.1}] //ie: shopping cart item, json object array , can heve duplicate data 

    const set1 = ["item11","item2","item3"] //set, does not contain duplicates  

    const map_example_1 = [{"key1": 1,"keya": 23.6}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_2 = [{"key1": [1,2],"keya": {"itema":1}}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_3 = [{"key1":"value1"},{"keya":5.2}] //dictionary/map - key/value - or json object array - no duplicate key

    //can list have dupliactes - list/array, tuple, stack, queue
    //can have no duplicates or unique items - set, dictionary/map 
    //can hae read-only, non-updatable list - tuple - initalize data, however, can not add, update, delete after iniiialze

    console.log("list1: \n",list1)
    console.log("list2: \n",list2)
    console.log("list3: \n",list3)
    console.log("list4': \n",list4)
    console.log('list5"": \n',list5)

    console.log(`set_example_1: \n`,set1)

    console.log(`map_example_1: \n`,map_example_1)
    console.log(`map_example_2: \n`,map_example_2)
    console.log(`map_example_3: \n`,map_example_3)

    //array size 

    //array index 

    //loop - for, foreach

    //CRUD, add, update, delete 

    //add

    //update 

    //delete 

    //lookup 
}

function array_demo_2()
{
    let msgText = "#page1::array_demo_2"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    const list1 = [18.46,16,7.3,25,3,80,3]  //numberic 
    const list2 = ["item11","item2","item3","item1"] //string - ie: todo-list
    const list3 = [{"id":1,"name":"item11"}, {"id":2,"name":"item12"}] //json object - ie: todo-list - can have duplicate data
    
    const list4 = ["item11", 1,"item2",23.5,"item3",1,"item1"] //numeric and string  

    const list5 = [{"id":1,"name": "itema", "price":87.1}] //ie: shopping cart item, json object array , can heve duplicate data 

    const set1 = ["item11","item2","item3"] //set, does not contain duplicates  

    const map_example_1 = [{"key1": 1,"keya": 23.6}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_2 = [{"key1": [1,2],"keya": {"itema":1}}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_3 = [{"key1":"value1"},{"keya":5.2}] //dictionary/map - key/value - or json object array - no duplicate key

    //can list have dupliactes - list/array, tuple, stack, queue
    //can have no duplicates or unique items - set, dictionary/map 
    //can hae read-only, non-updatable list - tuple - initalize data, however, can not add, update, delete after iniiialze

    console.log("list1: \n",list1)
    console.log("list2: \n",list2)
    console.log("list3: \n",list3)
    console.log("list4': \n",list4)
    console.log('list5"": \n',list5)

    console.log(`set_example_1: \n`,set1)

    console.log(`map_example_1: \n`,map_example_1)
    console.log(`map_example_2: \n`,map_example_2)
    console.log(`map_example_3: \n`,map_example_3)

    //array size/length 
    console.log("--- array length -- ")

    console.log("list1.length: \n",list1.length)
    console.log("list2.length: \n",list2.length)
    console.log("list3.length: \n",list3.length)
    console.log("list4.length': \n",list4.length)
    console.log('list5.length"": \n',list5.length)

    console.log(`set_example_1.length: \n`,set1.length)

    console.log(`map_example_1.length: \n`,map_example_1.length)
    console.log(`map_example_2.length: \n`,map_example_2.length)
    console.log(`map_example_3.length: \n`,map_example_3.length)

    console.log("")

    //array index 
    console.log("--- array index -- ")

    //index outp of bound error - enter index not within the array size/length

    //access index is same for update , ie: update array at index
    //example - update 
    //list1[0] = 10
    //list2[0] = "itemc"
    //list_other[0] = {"id":23"name":"itemc"}
    
    console.log("list1[0]: \n",list1[0])
    console.log("list2[0]: \n",list2[0])
    console.log("list3[0]: \n",list3[0])
    console.log("list4[0]': \n",list4[0])
    console.log('list5[0]"": \n',list5[0])

    console.log(`set_example_1[0]: \n`,set1[0])

    console.log(`map_example_1[0]: \n`,map_example_1[0])
    console.log(`map_example_2[0]: \n`,map_example_2[0])
    console.log(`map_example_3[0]: \n`,map_example_3[0])

    console.log("")

    // \ escape caharacter - enter special ascii code/character in strind
    // \n - new line 
    // \t - tab 
    // \\n - literal escape character in string 

    console.log("\\n")
    
    console.log("")

    //loop - for, while, foreach, array.map - ie: recursion 

    //for
    //while, 
    //foreach, 
    //array.map 

    //CRUD, add, update, delete 

    //add

    //update 

    //delete 

    //lookup 
}

function array_loop_demo_1()
{
    let msgText = "#page1::array_loop_demo_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    const list1 = [18.46,16,7.3,25,3,80,3]  //numberic 

    //list2
    const todolist1 = ["item1","item2","item3","item1"] //string - ie: todo-list
    //list3
    const todolist2 = [{"id":1,"name":"itema", "complete":true}, {"id":2,"name":"itemb","complete":false}] //json object - ie: todo-list - can have duplicate data
    
    const list4 = ["item11", 1,"item2",23.5,"item3",1,"item1"] //numeric and string  

    const list5 = [{"id":1,"name": "itema", "price":87.1}] //ie: shopping cart item, json object array , can heve duplicate data 

    const set1 = ["item11","item2","item3"] //set, does not contain duplicates  

    const map_example_1 = [{"key1": 1,"keya": 23.6}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_2 = [{"key1": [1,2],"keya": {"itema":1}}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_3 = [{"key1":"value1"},{"keya":5.2}] //dictionary/map - key/value - or json object array - no duplicate key

    //can list have dupliactes - list/array, tuple, stack, queue
    //can have no duplicates or unique items - set, dictionary/map 
    //can hae read-only, non-updatable list - tuple - initalize data, however, can not add, update, delete after iniiialze

    console.log("list1: \n",list1)
    //list2
    console.log("todolist1: \n",todolist1)
    //list3
    console.log("todolist2: \n",todolist2)
    console.log("list4': \n",list4)
    console.log('list5"": \n',list5)

    console.log(`set_example_1: \n`,set1)

    console.log(`map_example_1: \n`,map_example_1)
    console.log(`map_example_2: \n`,map_example_2)
    console.log(`map_example_3: \n`,map_example_3)

    //array size/length 
    console.log("--- array length -- ")

    console.log("list1.length: \n",list1.length)
    //list2
    console.log("todolist1.length: \n",todolist1.length)
    //list3
    console.log("todolist2.length: \n",todolist2.length)
    console.log("list4.length': \n",list4.length)
    console.log('list5.length"": \n',list5.length)

    console.log(`set_example_1.length: \n`,set1.length)

    console.log(`map_example_1.length: \n`,map_example_1.length)
    console.log(`map_example_2.length: \n`,map_example_2.length)
    console.log(`map_example_3.length: \n`,map_example_3.length)

    console.log("")

    //array index 
    console.log("--- array index -- ")

    //index outp of bound error - enter index not within the array size/length

    //access index is same for update , ie: update array at index
    //example - update 
    //list1[0] = 10
    //list2[0] = "itemc"
    //list_other[0] = {"id":23"name":"itemc"}
    
    console.log("list1[0]: \n",list1[0])
    //list2
    console.log("todolist1[0]: \n",todolist1[0])
    //list3
    console.log("todolist2[0]: \n",todolist2[0])
    console.log("list4[0]': \n",list4[0])
    console.log('list5[0]"": \n',list5[0])

    console.log(`set_example_1[0]: \n`,set1[0])

    console.log(`map_example_1[0]: \n`,map_example_1[0])
    console.log(`map_example_2[0]: \n`,map_example_2[0])
    console.log(`map_example_3[0]: \n`,map_example_3[0])

    console.log("")

    // \ escape caharacter - enter special ascii code/character in strind
    // \n - new line 
    // \t - tab 
    // \\n - literal escape character in string 

    console.log("\\n")
    
    console.log("")

    //loop - for, while, foreach, array.map - ie: recursion 

    let _output_string = "";

    //---- todolist1 ---

    //for (counter-variable; stop loop condition ; increase/decrease counter-variable)
    for(index=0; index<todolist1.length; index++)
    {
        _output_string = _output_string + todolist1[index] + " \n"
    }

    console.log("\n --output_string --\n", _output_string, "\n")
    
    divdisplay.innerText = _output_string;

    _output_string = "\n"

    //---- todolist2 ---
    //for (counter-variable; stop loop condition ; increase/decrease counter-variable)
    for(i=0; i<todolist2.length; i++)
    {
        //tolist2 - items = json object - access field  ie: arry[index].field 

        //_output_string = _output_string + todolist2[i].name + " \n"
        //or
        _output_string += todolist2[i].name + " \n"
    }

    console.log("\n --output_string --\n", _output_string, "\n")

    //divdisplay.innerText = divdisplay.innerText  + _output_string;
    //or
    divdisplay.innerText += _output_string;

    //while, 
    //array.foreach, 
    //array.map 

    //---------------------------------------
    //CRUD, add, update, delete 
    //---------------------------------------

    //add, array.push()

    //update, ie: array[index] = "...update data" 

    //delete , array.splice(x,y) - x = index, y = number of item to delete

    //lookup , indexof, find, filter 

}

function array_loop_demo_2()
{
    let msgText = "#page1::array_loop_demo_2"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    const list1 = [18.46,16,7.3,25,3,80,3]  //numberic 

    //list2
    const todolist1 = ["item1","item2","item3","item1"] //string - ie: todo-list
    //list3
    const todolist2 = [{"id":1,"name":"itema", "complete":true}, {"id":2,"name":"itemb","complete":false}] //json object - ie: todo-list - can have duplicate data
    
    const list4 = ["item11", 1,"item2",23.5,"item3",1,"item1"] //numeric and string  

    const list5 = [{"id":1,"name": "itema", "price":87.1}] //ie: shopping cart item, json object array , can heve duplicate data 

    const set1 = ["item11","item2","item3"] //set, does not contain duplicates  

    const map_example_1 = [{"key1": 1,"keya": 23.6}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_2 = [{"key1": [1,2],"keya": {"itema":1}}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_3 = [{"key1":"value1"},{"keya":5.2}] //dictionary/map - key/value - or json object array - no duplicate key

    //can list have dupliactes - list/array, tuple, stack, queue
    //can have no duplicates or unique items - set, dictionary/map 
    //can hae read-only, non-updatable list - tuple - initalize data, however, can not add, update, delete after iniiialze

    console.log("list1: \n",list1)
    //list2
    console.log("todolist1: \n",todolist1)
    //list3
    console.log("todolist2: \n",todolist2)
    console.log("list4': \n",list4)
    console.log('list5"": \n',list5)

    console.log(`set_example_1: \n`,set1)

    console.log(`map_example_1: \n`,map_example_1)
    console.log(`map_example_2: \n`,map_example_2)
    console.log(`map_example_3: \n`,map_example_3)

    //array size/length 
    console.log("--- array length -- ")

    console.log("list1.length: \n",list1.length)
    //list2
    console.log("todolist1.length: \n",todolist1.length)
    //list3
    console.log("todolist2.length: \n",todolist2.length)
    console.log("list4.length': \n",list4.length)
    console.log('list5.length"": \n',list5.length)

    console.log(`set_example_1.length: \n`,set1.length)

    console.log(`map_example_1.length: \n`,map_example_1.length)
    console.log(`map_example_2.length: \n`,map_example_2.length)
    console.log(`map_example_3.length: \n`,map_example_3.length)

    console.log("")

    //array index 
    console.log("--- array index -- ")

    //index outp of bound error - enter index not within the array size/length

    //access index is same for update , ie: update array at index
    //example - update 
    //list1[0] = 10
    //list2[0] = "itemc"
    //list_other[0] = {"id":23"name":"itemc"}
    
    console.log("list1[0]: \n",list1[0])
    //list2
    console.log("todolist1[0]: \n",todolist1[0])
    //list3
    console.log("todolist2[0]: \n",todolist2[0])
    console.log("list4[0]': \n",list4[0])
    console.log('list5[0]"": \n',list5[0])

    console.log(`set_example_1[0]: \n`,set1[0])

    console.log(`map_example_1[0]: \n`,map_example_1[0])
    console.log(`map_example_2[0]: \n`,map_example_2[0])
    console.log(`map_example_3[0]: \n`,map_example_3[0])

    console.log("")

    // \ escape caharacter - enter special ascii code/character in strind
    // \n - new line 
    // \t - tab 
    // \\n - literal escape character in string 

    console.log("\\n")
    
    console.log("")

    let _output_string = "";
    
    //loop - for, while, foreach, array.map - ie: recursion 

    //---- todolist1 ---

    /*
    
    //for (counter-variable; stop loop condition ; increase/decrease counter-variable)
    for(index=0; index<todolist1.length; index++)
    {
        _output_string = _output_string + todolist1[index] + " \n"
    }

    console.log("\n --output_string --\n", _output_string, "\n")
    
    divdisplay.innerText = _output_string;

    _output_string = "\n"

    //---- todolist2 ---
    //for (counter-variable; stop loop condition ; increase/decrease counter-variable)
    for(i=0; i<todolist2.length; i++)
    {
        //tolist2 - items = json object - access field  ie: arry[index].field 

        //_output_string = _output_string + todolist2[i].name + " \n"
        //or
        _output_string += todolist2[i].name + " \n"
    }

    console.log("\n --output_string --\n", _output_string, "\n")

    //divdisplay.innerText = divdisplay.innerText  + _output_string;
    //or
    divdisplay.innerText += _output_string;

    */

    let counter = 0;

    //while (stop condifiton), 
    while(counter < todolist1.length){

        _output_string += todolist1[counter] + " \n"

        //avoid endless loop - increment/decrement counter 
        //counter = counter + 1
        //or
        counter++;
    }
    
    divdisplay.innerText = _output_string;

    //--- todolist2  --- 
    _output_string = "\n"
    let counter2 = 0;

    //do while (stop condifiton), 
    do{

        _output_string += `${todolist2[counter2].name}, complete: ${todolist2[counter2].complete}\n`

        //avoid endless loop - increment/decrement counter 
        //counter2 = counter2 + 1
        //or
        counter2++;

    }while(counter2 < todolist2.length)
    
    //divdisplay.innerText = divdisplay + _output_string
    //or
    divdisplay.innerText += _output_string;

    //array.foreach, 
    //array.map 

    //---------------------------------------
    //CRUD, add, update, delete 
    //---------------------------------------

    //add, array.push()

    //update, ie: array[index] = "...update data" 

    //delete , array.splice(x,y) - x = index, y = number of item to delete

    //lookup , indexof, find, filter 

}

function array_loop_demo_3()
{
    let msgText = "#page1::array_loop_demo_3"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    const list1 = [18.46,16,7.3,25,3,80,3]  //numberic 

    //list2
    const todolist1 = ["item1","item2","item3","item1"] //string - ie: todo-list
    //list3
    const todolist2 = [{"id":1,"name":"itema", "complete":true}, {"id":2,"name":"itemb","complete":false}] //json object - ie: todo-list - can have duplicate data
    
    const list4 = ["item11", 1,"item2",23.5,"item3",1,"item1"] //numeric and string  

    const list5 = [{"id":1,"name": "itema", "price":87.1}] //ie: shopping cart item, json object array , can heve duplicate data 

    const set1 = ["item11","item2","item3"] //set, does not contain duplicates  

    const map_example_1 = [{"key1": 1,"keya": 23.6}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_2 = [{"key1": [1,2],"keya": {"itema":1}}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_3 = [{"key1":"value1"},{"keya":5.2}] //dictionary/map - key/value - or json object array - no duplicate key

    //can list have dupliactes - list/array, tuple, stack, queue
    //can have no duplicates or unique items - set, dictionary/map 
    //can hae read-only, non-updatable list - tuple - initalize data, however, can not add, update, delete after iniiialze

    console.log("list1: \n",list1)
    //list2
    console.log("todolist1: \n",todolist1)
    //list3
    console.log("todolist2: \n",todolist2)
    console.log("list4': \n",list4)
    console.log('list5"": \n',list5)

    console.log(`set_example_1: \n`,set1)

    console.log(`map_example_1: \n`,map_example_1)
    console.log(`map_example_2: \n`,map_example_2)
    console.log(`map_example_3: \n`,map_example_3)

    //array size/length 
    console.log("--- array length -- ")

    console.log("list1.length: \n",list1.length)
    //list2
    console.log("todolist1.length: \n",todolist1.length)
    //list3
    console.log("todolist2.length: \n",todolist2.length)
    console.log("list4.length': \n",list4.length)
    console.log('list5.length"": \n',list5.length)

    console.log(`set_example_1.length: \n`,set1.length)

    console.log(`map_example_1.length: \n`,map_example_1.length)
    console.log(`map_example_2.length: \n`,map_example_2.length)
    console.log(`map_example_3.length: \n`,map_example_3.length)

    console.log("")

    //array index 
    console.log("--- array index -- ")

    //index outp of bound error - enter index not within the array size/length

    //access index is same for update , ie: update array at index
    //example - update 
    //list1[0] = 10
    //list2[0] = "itemc"
    //list_other[0] = {"id":23"name":"itemc"}
    
    console.log("list1[0]: \n",list1[0])
    //list2
    console.log("todolist1[0]: \n",todolist1[0])
    //list3
    console.log("todolist2[0]: \n",todolist2[0])
    console.log("list4[0]': \n",list4[0])
    console.log('list5[0]"": \n',list5[0])

    console.log(`set_example_1[0]: \n`,set1[0])

    console.log(`map_example_1[0]: \n`,map_example_1[0])
    console.log(`map_example_2[0]: \n`,map_example_2[0])
    console.log(`map_example_3[0]: \n`,map_example_3[0])

    console.log("")

    // \ escape caharacter - enter special ascii code/character in strind
    // \n - new line 
    // \t - tab 
    // \\n - literal escape character in string 

    console.log("\\n")
    
    console.log("")

    let _output_string = "";
    
    //loop - for, while, foreach, array.map - ie: recursion 

    //---- todolist1 ---

    /*
    
    //for (counter-variable; stop loop condition ; increase/decrease counter-variable)
    for(index=0; index<todolist1.length; index++)
    {
        _output_string = _output_string + todolist1[index] + " \n"
    }

    console.log("\n --output_string --\n", _output_string, "\n")
    
    divdisplay.innerText = _output_string;

    _output_string = "\n"

    //---- todolist2 ---
    //for (counter-variable; stop loop condition ; increase/decrease counter-variable)
    for(i=0; i<todolist2.length; i++)
    {
        //tolist2 - items = json object - access field  ie: arry[index].field 

        //_output_string = _output_string + todolist2[i].name + " \n"
        //or
        _output_string += todolist2[i].name + " \n"
    }

    console.log("\n --output_string --\n", _output_string, "\n")

    //divdisplay.innerText = divdisplay.innerText  + _output_string;
    //or
    divdisplay.innerText += _output_string;

    */

    let counter = 0;

    /*
    //while (stop condifiton), 
    while(counter < todolist1.length){

        _output_string += todolist1[counter] + " \n"

        //avoid endless loop - increment/decrement counter 
        //counter = counter + 1
        //or
        counter++;
    }
    
    divdisplay.innerText = _output_string;

    //--- todolist2  --- 
    _output_string = "\n"
    let counter2 = 0;

    //do while (stop condifiton), 
    do{

        _output_string += `${todolist2[counter2].name}, complete: ${todolist2[counter2].complete}\n`

        //avoid endless loop - increment/decrement counter 
        //counter2 = counter2 + 1
        //or
        counter2++;

    }while(counter2 < todolist2.length)
    
    //divdisplay.innerText = divdisplay + _output_string
    //or
    divdisplay.innerText += _output_string;
    */

    _output_string = ""

    //-- array.foreach - functional programming 
    //-- array.foreach - input a function ie: ananymous function or callback function
    //array.foreach, -- also for nested looping 
    //-- array.foreach(current_item, [optional: index], [optional: original_array])

    //function myfunction(current_item, index, origin_array) {}
    //todolist1.forEach(myfunction)

    //todolist1.forEach(function(current_item)
    todolist1.forEach(function(current_item, index, origin_array)
    {
        _output_string += `${index} - ${current_item}  \n`
    });

    divdisplay.innerText = _output_string;
    
    _output_string = "\n"

    todolist2.forEach(function(item)
    {
        _output_string += `${item.name} - ${item.complete}  \n`
    });

    divdisplay.innerText += _output_string;
    
    //array.map - create anew array from existing array 
    //-- new_array = array.map(current_item, [optional: index], [optional: original_array])
    //-- loop through new array = for, while, foreach  

    //nested loop and map - create new array then assign array to foreach ie: function chaining
    //array1.map(function(item)){}).foreach(function(item))

    //---------------------------------------
    //CRUD, add, update, delete 
    //---------------------------------------

    //add, array.push()

    //update, ie: array[index] = "...update data" 

    //delete , array.splice(x,y) - x = index, y = number of item to delete
    //array.pop() -- remove item from the end of the array 

    //lookup , indexof, find, filter 

}

function array_loop_demo_4()
{
    let msgText = "#page1::array_loop_demo_4"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    const list1 = [18.46,16,7.3,25,3,80,3]  //numberic 

    //list2
    const todolist1 = ["item1","item2","item3","item1"] //string - ie: todo-list
    //list3
    const todolist2 = [{"id":1,"name":"itema", "complete":true}, {"id":2,"name":"itemb","complete":false}] //json object - ie: todo-list - can have duplicate data
    
    const list4 = ["item11", 1,"item2",23.5,"item3",1,"item1"] //numeric and string  

    const list5 = [{"id":1,"name": "itema", "price":87.1}] //ie: shopping cart item, json object array , can heve duplicate data 

    const set1 = ["item11","item2","item3"] //set, does not contain duplicates  

    const map_example_1 = [{"key1": 1,"keya": 23.6}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_2 = [{"key1": [1,2],"keya": {"itema":1}}] //dictionary/map - key/value - or json object array - no duplicate key
    const map_example_3 = [{"key1":"value1"},{"keya":5.2}] //dictionary/map - key/value - or json object array - no duplicate key

    //can list have dupliactes - list/array, tuple, stack, queue
    //can have no duplicates or unique items - set, dictionary/map 
    //can hae read-only, non-updatable list - tuple - initalize data, however, can not add, update, delete after iniiialze

    console.log("list1: \n",list1)
    //list2
    console.log("todolist1: \n",todolist1)
    //list3
    console.log("todolist2: \n",todolist2)
    console.log("list4': \n",list4)
    console.log('list5"": \n',list5)

    console.log(`set_example_1: \n`,set1)

    console.log(`map_example_1: \n`,map_example_1)
    console.log(`map_example_2: \n`,map_example_2)
    console.log(`map_example_3: \n`,map_example_3)

    //array size/length 
    console.log("--- array length -- ")

    console.log("list1.length: \n",list1.length)
    //list2
    console.log("todolist1.length: \n",todolist1.length)
    //list3
    console.log("todolist2.length: \n",todolist2.length)
    console.log("list4.length': \n",list4.length)
    console.log('list5.length"": \n',list5.length)

    console.log(`set_example_1.length: \n`,set1.length)

    console.log(`map_example_1.length: \n`,map_example_1.length)
    console.log(`map_example_2.length: \n`,map_example_2.length)
    console.log(`map_example_3.length: \n`,map_example_3.length)

    console.log("")

    //array index 
    console.log("--- array index -- ")

    //index outp of bound error - enter index not within the array size/length

    //access index is same for update , ie: update array at index
    //example - update 
    //list1[0] = 10
    //list2[0] = "itemc"
    //list_other[0] = {"id":23"name":"itemc"}
    
    console.log("list1[0]: \n",list1[0])
    //list2
    console.log("todolist1[0]: \n",todolist1[0])
    //list3
    console.log("todolist2[0]: \n",todolist2[0])
    console.log("list4[0]': \n",list4[0])
    console.log('list5[0]"": \n',list5[0])

    console.log(`set_example_1[0]: \n`,set1[0])

    console.log(`map_example_1[0]: \n`,map_example_1[0])
    console.log(`map_example_2[0]: \n`,map_example_2[0])
    console.log(`map_example_3[0]: \n`,map_example_3[0])

    console.log("")

    // \ escape caharacter - enter special ascii code/character in strind
    // \n - new line 
    // \t - tab 
    // \\n - literal escape character in string 

    console.log("\\n")
    
    console.log("")

    let _output_string = "";
    
    //loop - for, while, foreach, array.map - ie: recursion 

    //---- todolist1 ---

    /*
    
    //for (counter-variable; stop loop condition ; increase/decrease counter-variable)
    for(index=0; index<todolist1.length; index++)
    {
        _output_string = _output_string + todolist1[index] + " \n"
    }

    console.log("\n --output_string --\n", _output_string, "\n")
    
    divdisplay.innerText = _output_string;

    _output_string = "\n"

    //---- todolist2 ---
    //for (counter-variable; stop loop condition ; increase/decrease counter-variable)
    for(i=0; i<todolist2.length; i++)
    {
        //tolist2 - items = json object - access field  ie: arry[index].field 

        //_output_string = _output_string + todolist2[i].name + " \n"
        //or
        _output_string += todolist2[i].name + " \n"
    }

    console.log("\n --output_string --\n", _output_string, "\n")

    //divdisplay.innerText = divdisplay.innerText  + _output_string;
    //or
    divdisplay.innerText += _output_string;

    */

    let counter = 0;

    /*
    //while (stop condifiton), 
    while(counter < todolist1.length){

        _output_string += todolist1[counter] + " \n"

        //avoid endless loop - increment/decrement counter 
        //counter = counter + 1
        //or
        counter++;
    }
    
    divdisplay.innerText = _output_string;

    //--- todolist2  --- 
    _output_string = "\n"
    let counter2 = 0;

    //do while (stop condifiton), 
    do{

        _output_string += `${todolist2[counter2].name}, complete: ${todolist2[counter2].complete}\n`

        //avoid endless loop - increment/decrement counter 
        //counter2 = counter2 + 1
        //or
        counter2++;

    }while(counter2 < todolist2.length)
    
    //divdisplay.innerText = divdisplay + _output_string
    //or
    divdisplay.innerText += _output_string;
    */

    _output_string = ""

    //-- array.foreach - functional programming 
    //-- array.foreach - input a function ie: ananymous function or callback function
    //array.foreach, -- also for nested looping 
    //-- array.foreach(current_item, [optional: index], [optional: original_array])

    //function myfunction(current_item, index, origin_array) {}
    //todolist1.forEach(myfunction)

    //todolist1.forEach(function(current_item)
    /*
    todolist1.forEach(function(current_item, index, origin_array)
    {
        _output_string += `${index} - ${current_item}  \n`
    });

    divdisplay.innerText = _output_string;
    
    _output_string = "\n"

    todolist2.forEach(function(item)
    {
        _output_string += `${item.name} - ${item.complete}  \n`
    });

    divdisplay.innerText += _output_string;
    */

    //array.map - create anew array from existing array 
    //-- new_array = array.map(current_item, [optional: index], [optional: original_array])
    //-- loop through new array = for, while, foreach  
    
    //nested loop and map - create new array then assign array to foreach ie: function chaining
    //array1.map(function(item)){}).foreach(function(item))
    
    //return same number of rows as the array

    const new_todolist1 = todolist1.map(function(item){
        //return each array row - create any formatted row
        //return item
        return `item_${item}`
    });

    console.log("--- new_todolist1 -- \n", new_todolist1, "\n");
    
    _output_string = ""

    new_todolist1.forEach(function(item){
        _output_string += item + "\n"
    })

    divdisplay.innerText = _output_string;

    //-- another way to write same code above ie: arr=map , loop arr 
    //-- nested functions or function chaning foreach.map code -- 

    _output_string = "\n"

    todolist2.map(function(current_row_item){
        //return each array row - create any formatted row
        //return item
        return `item2_${current_row_item.name}, completed: ${current_row_item.complete}`
    }).forEach(function(item){
        _output_string += item + "\n"
    });

    divdisplay.innerText += _output_string;

    //---------------------------------------
    //CRUD, add, update, delete 
    //---------------------------------------

    //add, array.push()

    //update, ie: array[index] = "...update data" 

    //delete , array.splice(x,y) - x = index, y = number of item to delete
    //array.pop() -- remove item from the end of the array 

    //lookup , indexof, find, filter 

}

function array_crud_demo_1()
{
    let msgText = "#page1::array_crud_demo_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    //list2
    const todolist1 = ["item1","item2","item3","item1"] //string - ie: todo-list
    //list3
    const todolist2 = [{"id":1,"name":"itema", "complete":true}, {"id":2,"name":"itemb","complete":false}] //json object - ie: todo-list - can have duplicate data
    
    //list2
    console.log("todolist1: \n",todolist1)
    //list3
    console.log("todolist2: \n",todolist2)
    
    
    //array size/length 
    console.log("--- array length -- ")

    //list2
    console.log("todolist1.length: \n",todolist1.length)
    //list3
    console.log("todolist2.length: \n",todolist2.length)
    
    
    console.log("")

    //array index 
    console.log("--- array index -- ")
    
    //list2
    console.log("todolist1[0]: \n",todolist1[0])
    //list3
    console.log("todolist2[0]: \n",todolist2[0])
    
    console.log("")


    console.log("\\n")
    
    console.log("")

    //---------------------------------------
    //CRUD, add, update, delete 
    //---------------------------------------

    //add, array.push()
    todolist1.push("item5")

    let _str_display = "";

    //loop and display items to the screen 
    todolist1.forEach(function(item){
        _str_display += `${item} \n`
    });

    divdisplay.innerText = _str_display;

    //add josn object
    let _new_item = {"id":3,"name":"itemc","complete":false}
    todolist2.push(_new_item)

    //modern javascript - spread, rest operators 
    //-- another way add items add spread operator ... include all existing items and append to array 
    //todolist2.push(..._new_item)

    _str_display = "\n";

    //loop and display items to the screen 
    todolist2.forEach(function(item){
        _str_display += `${item.name} , ${item.complete}\n`
    });

    divdisplay.innerText += _str_display;

    //update, ie: array[index] = "...update data" 
    todolist1[2] = "update-item3"
    
    _str_display = "\n---update---\n";

    //loop and display items to the screen 
    todolist1.forEach(function(item){
        _str_display += `${item}\n`
    });

    divdisplay.innerText += _str_display;

    _str_display = "\n";

    //update, ie: array[index] = json object  
    const _update_item = {"id":2, "name":"update item b", "complete":true}
    todolist2[1] = _update_item;
    
    _str_display = "\n---update-josn object--\n";

    //loop and display items to the screen 
    todolist2.forEach(function(item){
        _str_display += `${item.name}, ${item.complete}\n`
    });

    divdisplay.innerText += _str_display;

    //delete , array.splice(x,y) - x = index, y = number of item to delete
    //array.pop() -- remove item from the end of the array 

    todolist1.splice(1,1)

    _str_display = "\n---delete todolist1 item--\n";

    //loop and display items to the screen 
    todolist1.forEach(function(item){
        _str_display += `${item}\n`
    });

    divdisplay.innerText += _str_display;
    
    //deleye from todolist2
    todolist2.splice(1,1)

    _str_display = "\n---delete todolist2 item--\n";

    //loop and display items to the screen 
    todolist2.forEach(function(item){
        _str_display += `${item.name} , ${item.complete}\n`
    });

    divdisplay.innerText += _str_display;

    //lookup , indexof, find, filter 

}

function array_search_demo_1()
{
    let msgText = "#page1::array_search_demo_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    //list2
    const todolist1 = ["item1","item2","item3","item1"] //string - ie: todo-list
    //list3
    const todolist2 = [{"id":1,"name":"itema", "complete":true}, 
        {"id":2,"name":"itemb","complete":false},
        {"id":3,"name":"itema","complete":true},] 
        //json object - ie: todo-list - can have duplicate data
    
    //list2
    console.log("todolist1: \n",todolist1)
    //list3
    console.log("todolist2: \n",todolist2)
    
    
    //array size/length 
    console.log("--- array length -- ")

    //list2
    console.log("todolist1.length: \n",todolist1.length)
    //list3
    console.log("todolist2.length: \n",todolist2.length)
    
    
    console.log("")

    //array index 
    console.log("--- array index -- ")
    
    //list2
    console.log("todolist1[0]: \n",todolist1[0])
    //list3
    console.log("todolist2[0]: \n",todolist2[0])
    
    console.log("")


    console.log("\\n")
    
    console.log("")

    //lookup , indexof, find, filter 

    //manual loop - for, do, while 
    let _search_text = "item2" //string or number 
    let _text_found = false;

    for(let i=0;i<todolist1.length;i++)
    {
        //-- todolist2
        //if(todolist2[i].name.trim().toLowerCase() == _search_text.toLowerCase())

        //todolist1
        if(todolist1[i].trim().toLowerCase() == _search_text.toLowerCase())
        {
            //found item 
            _text_found = true;

            msgText =`# ${_search_text} found at index: ${i}`
            console.log(msgText)
            divdisplay.innerText = msgText;
            //exit for , while loops
            break;
        }
    }

    //-- disply item not found 
    if(_text_found == false)
    {        
        msgText =`# ${_search_text} NOT found `
        console.log(msgText)
        divdisplay.innerText = msgText;
    }

    //lookup , indexOf, -- string, integer, float - n/a - json objects 
    
    divdisplay.innerText += "\n\n -- indeOf search -- \n"

    //indexof return -1 if not found else return ind , 1st item 
    //todolist1.inclues() -- like or contains search 
    //-- indexOf - case sensitive - 
    let _found_index = todolist1.indexOf(_search_text.toLowerCase()) 

    if(_found_index > -1)
    {
        msgText =`# ${_search_text} found at index: ${_found_index} \n`
        console.log(msgText)
        divdisplay.innerText += msgText;
    }
    else
    {
        
        msgText =`\n # ${_search_text} NOT found `
        console.log(msgText)
        divdisplay.innerText += msgText;
    }

    //lookup , findIndex  - json object 

    divdisplay.innerText += "\n\n -- findIndex search -- \n"

    _search_text = "itema"

    //indexof return -1 if not found else return ind , 1st item 
    _found_index = todolist2.findIndex(function(item){        
       if (item.name.trim().toLowerCase() == _search_text.toLowerCase())
       {
            //exit findIndex when item found
            return true;
       }
    }) 

    if(_found_index > -1)
    {
        msgText =`# ${_search_text} found at index: ${_found_index} \n`
        console.log(msgText)
        divdisplay.innerText += msgText;
    }
    else
    {
        
        msgText =`\n # ${_search_text} NOT found `
        console.log(msgText)
        divdisplay.innerText += msgText;
    }

    //lookup, find - find 1 or 1st item 
    divdisplay.innerText += "\n\n -- find search -- \n"

    _search_text = "itema"

    const _item_found = todolist2.find(function(item){        
       if (item.name.trim().toLowerCase() == _search_text.toLowerCase())
       {
            //exit find when item found
            return true;
       }
    }) 

    if(_item_found != undefined | _item_found != null)
    {
        msgText =`# ${_search_text} found \n`
        console.log(msgText)
        divdisplay.innerText += msgText;
    }
    else
    {        
        msgText =`\n # ${_search_text} NOT found `
        console.log(msgText)
        divdisplay.innerText += msgText;
    }

    //lookup, filter - find multiple items 

    divdisplay.innerText += "\n\n -- filter search -- \n"

    _search_text = "itema"

    const _items_found = todolist2.filter(function(item){        
       if (item.name.trim().toLowerCase() == _search_text.toLowerCase())
       {
            //exit find when item found
            return true;
       }
    }) 

    if(_items_found != undefined | _items_found != null)
    {
        msgText =`# ${_search_text} found \n`
        console.log(msgText)
        divdisplay.innerText += msgText;

        //display items found
        _str_display = "\n"
        _items_found.forEach(function(item){
            _str_display += `${item.id} - ${item.name} - ${item.complete} \n`
        })

        divdisplay.innerText += _str_display
    }
    else
    {        
        msgText =`\n # ${_search_text} NOT found `
        console.log(msgText)
        divdisplay.innerText += msgText;
    }


}

function demo_array_add_1()
{
    let msgText = "#page1::demo_array_add_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    //-----------------------------------
    // define and initialize arrays
    //-----------------------------------

    //list2
     const todolist1 = ["item1","item2","item3","item1"] //string - ie: todo-list
     //list3
     const todolist2 = [{"id":1,"name":"itema", "complete":true}, {"id":2,"name":"itemb","complete":false}] //json object - ie: todo-list - can have duplicate data
     
     //list2
     console.log("todolist1: \n",todolist1)
     //list3
     console.log("todolist2: \n",todolist2)
     
     
     //array size/length 
     console.log("--- array length -- ")
 
     //list2
     console.log("todolist1.length: \n",todolist1.length)
     //list3
     console.log("todolist2.length: \n",todolist2.length)
     
     
     console.log("")
 
     //array index 
     console.log("--- array index -- ")
     
     //list2
     console.log("todolist1[0]: \n",todolist1[0])
     //list3
     console.log("todolist2[0]: \n",todolist2[0])
     
     console.log("")
 
 
     console.log("\\n")
     
     console.log("")
    
    //-----------------------------------
    // add data to arrays
    //-----------------------------------

    //-----------------------------------------
    // display array data to screen and log
    //----------------------------------------
    
    //---------------------------------------
    //CRUD, add, update, delete 
    //---------------------------------------

    //add, array.push()
    todolist1.push("item5")

    let _str_display = "";

    //loop and display items to the screen 
    todolist1.forEach(function(item){
        _str_display += `${item} \n`
    });

    divdisplay.innerText = _str_display;

    //add josn object
    let _new_item = {"id":3,"name":"itemc","complete":false}
    todolist2.push(_new_item)

    //modern javascript - spread, rest operators 
    //-- another way add items add spread operator ... include all existing items and append to array 
    //todolist2.push(..._new_item)

    _str_display = "\n";

    //loop and display items to the screen 
    todolist2.forEach(function(item){
        _str_display += `${item.name} , ${item.complete}\n`
    });

    divdisplay.innerText += _str_display;

}

function demo_array_update_1()
{
    let msgText = "#page1::demo_array_update_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    //-------------------------------
    // define and initialize arrays 
    //-------------------------------

    //list2
    const todolist1 = ["item1","item2","item3","item1"] //string - ie: todo-list
    //list3
    const todolist2 = [{"id":1,"name":"itema", "complete":true}, {"id":2,"name":"itemb","complete":false}] //json object - ie: todo-list - can have duplicate data

    //list2
    console.log("todolist1: \n",todolist1)
    //list3
    console.log("todolist2: \n",todolist2)


    //array size/length 
    console.log("--- array length -- ")

    //list2
    console.log("todolist1.length: \n",todolist1.length)
    //list3
    console.log("todolist2.length: \n",todolist2.length)


    console.log("")

    //array index 
    console.log("--- array index -- ")

    //list2
    console.log("todolist1[0]: \n",todolist1[0])
    //list3
    console.log("todolist2[0]: \n",todolist2[0])

    console.log("")


    console.log("\\n")

    console.log("")
    
    //-----------------------------------------------------
    // update arrays and display array update to screen 
    //-----------------------------------------------------
    
    //update, ie: array[index] = "...update data" 
    todolist1[2] = "update-item3"
    
    _str_display = "\n---update---\n";

    //loop and display items to the screen 
    todolist1.forEach(function(item){
        _str_display += `${item}\n`
    });

    divdisplay.innerText += _str_display;

    _str_display = "\n";

    //update, ie: array[index] = json object  
    const _update_item = {"id":2, "name":"update item b", "complete":true}
    todolist2[1] = _update_item;
    
    _str_display = "\n---update-josn object--\n";

    //loop and display items to the screen 
    todolist2.forEach(function(item){
        _str_display += `${item.name}, ${item.complete}\n`
    });

    divdisplay.innerText += _str_display;


}

function demo_array_delete_1()
{
    let msgText = "#page1::demo_array_delete_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    //list2
    const todolist1 = ["item1","item2","item3","item1"] //string - ie: todo-list
    //list3
    const todolist2 = [{"id":1,"name":"itema", "complete":true}, {"id":2,"name":"itemb","complete":false}] //json object - ie: todo-list - can have duplicate data
    
    //list2
    console.log("todolist1: \n",todolist1)
    //list3
    console.log("todolist2: \n",todolist2)
    
    //array size/length 
    console.log("--- array length -- ")

    //list2
    console.log("todolist1.length: \n",todolist1.length)
    //list3
    console.log("todolist2.length: \n",todolist2.length)
    console.log("")

    //array index 
    console.log("--- array index -- ")
    //list2
    console.log("todolist1[0]: \n",todolist1[0])
    //list3
    console.log("todolist2[0]: \n",todolist2[0])
    console.log("")

    console.log("\\n")    
    console.log("")

    //-----------------------------------
    // array delete, udpate screen
    //-----------------------------------

        //delete , array.splice(x,y) - x = index, y = number of item to delete
    //array.pop() -- remove item from the end of the array 

    todolist1.splice(1,1)

    _str_display = "\n---delete todolist1 item--\n";

    //loop and display items to the screen 
    todolist1.forEach(function(item){
        _str_display += `${item}\n`
    });

    divdisplay.innerText += _str_display;
    
    //deleye from todolist2
    todolist2.splice(1,1)

    _str_display = "\n---delete todolist2 item--\n";

    //loop and display items to the screen 
    todolist2.forEach(function(item){
        _str_display += `${item.name} , ${item.complete}\n`
    });

    divdisplay.innerText += _str_display;

}

function array_search_manual_1()
{
    let msgText = "#page1::array_search_manual_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    //---------------------------------
    // define/initialize array
    //---------------------------------
    
    //------------------------------------------
    // manual saarch and array screen display 
    //------------------------------------------
    
}

function array_search_indexof_1()
{

    let msgText = "#page1::array_search_indexof_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    //---------------------------------
    // define/initialize array
    //---------------------------------

    //------------------------------------------
    // indexof search and array screen display 
    //------------------------------------------

}

function array_search_findindex_1()
{

    let msgText = "#page1::array_search_findindex_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    //---------------------------------
    // define/initialize array
    //---------------------------------

    //------------------------------------------
    // findindex search and array screen display 
    //-----------------------------------------
}

function array_search_find_1()
{

    let msgText = "#page1::array_search_find_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    //---------------------------------
    // define/initialize array
    //---------------------------------

    //------------------------------------------
    // find search and array screen display 
    //-----------------------------------------
}

function array_search_filter_1()
{

    let msgText = "#page1::array_search_filter_1"
    const divdisplay = document.getElementById("divdisplay"); //HTMLElement or null

    if(divdisplay == null | divdisplay == undefined){

        msgText = "#page1::divdisplay not found"
        console.log(msgText)
        console.error(msgText) //display error in console 
        return false; //exit function , stop button click 
    }

    console.log(msgText.toUpperCase())

    //if element object does not exit, js generate errro 
    divdisplay.innerText = msgText;

    //---------------------------------
    // define/initialize array
    //---------------------------------

    //------------------------------------------
    // filter search and array screen display 
    //-----------------------------------------
}


