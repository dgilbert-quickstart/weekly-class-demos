function page_load(){

    const msgText = "# page1: page load"

    console.log(msgText.toUpperCase())
}

function lnkNonArrayDemo1(){

    let msgText = "# page1: lnkNonArrayDemo1" 

    console.log(msgText.toUpperCase())

    const item1 = 5;
    const item2 = 10
    const item3 = 15.1
    const item4 = 20
    const item5 = 25;

    const total = (item1 + item2 + item3 + item4 + item5)

    console.log("total: ", total);
    console.log(`total: , ${total}`)

    //rount floating point number , ie: 2 decimal points 
    console.log(`round total: , ${total.toFixed(2)}`)
}

//function name should not be a javascript keyword: onclick, click, submit, other 
function lnkArrayDemo1(){

    let msgText = "# page1: lnkArrayDemo1" 

    console.log(msgText.toUpperCase())

    const items = [5,10,15.1,20,25]
    const item_names = ["iteama","iteamb","iteamc","iteamd","iteame",]
    const item_names_and_values = [5,"iteama",15,"iteamb",15.1,"iteamc","iteamd","iteame",]

    /*
    --- array index start at 0 = 1st item, ...
    --column index = 0...1..2
    --or
    -- index = row starting at 0

    0 = 5
    1 = 10
    2 = 15.1
    3 = 20
    4 = 25

    */

    //access element index starting at index 0
    //#-- index not found or index out of bound 
    //#-- access and index not in range ie: -1, 5, ... 10 ..
    const total = (items[0] + items[1] + items[2] + items[3] + items[4])

    console.log(`total: , ${total}`)

    //rount floating point number , ie: 2 decimal points 
    console.log(`round total: , ${total.toFixed(2)}`)

    //access item index 
    console.log(item_names[0], item_names_and_values[2])
}

function lnkArrayLoopDemo1(){

    let msgText = "#page1 : lnkArrayLoopDemo1"

    console.log(msgText.toUpperCase())

    const items = [5,10,15.1,20,25]
    
    console.log("array length: ", items.length);

    let total = 0;

    //for loop is used to loop through a fixed number of items
    //for loop - uses a counter i , incremented for each loop
    //counter start loop
    //loop stop when counter is > then items.length

    //for(counter/start=0;loop stop condition;increase/decrease counter)

    //i = i + 1
    //or
    //i++
    //or
    //i--

    //-
    //- start at i = 0; loop while i < array.lngth; count i each time through loop
    //- can have endless/infinate or out of memory loop 
    //-

    for(i=0; i<items.length; i++) {
        
        //total = total + current item[index]
        //or any valid javascript code 
        
        //total = total + items[i]
        total += items[i]
        console.log("* i = ", i)
    }

    console.log(`total: , ${total}`)

    //rount floating point number , ie: 2 decimal points 
    console.log(`round total: , ${total.toFixed(2)}`)

}

function lnkArrayAddRemoveLoopDemo1()
{
    let msgText = "# page1 : lnkArrayAddRemoveLoopDemo1"
    console.log(msgText.toUpperCase())

    const items = [5,10,15.1,20,25]
    const item_names = ["iteama","iteamb","iteamc","iteamd","iteame",]
    const item_names_and_values = [5,"iteama",15,"iteamb",15.1,"iteamc","iteamd","iteame",]

    //print arrays 
    print("---- arrays ---------")
    print(items)
    
    print("-------------")
    print(item_names)
    
    print("-------------")
    print(item_names_and_values)

    print("-------------")
    print("")
    
    //add item to array 

    //array loop 

    //remove item from array 

    //array loop

    //other loop do loop, while loop , foreach 
}

