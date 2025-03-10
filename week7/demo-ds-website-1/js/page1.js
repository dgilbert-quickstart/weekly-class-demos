
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


