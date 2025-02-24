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
}

