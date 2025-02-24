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

    /*
    --- array index start at 0 = 1st item, ...
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

}

