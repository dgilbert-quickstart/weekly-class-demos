//https://coderslegacy.com/javascript-sqlite3-tutorial-for-beginners-node-js/

const sqlite3 = require('sqlite3').verbose();

//windwos or macos or linux 
//let _dbname = `src\\data\\demodb1.db`
let _dbname = "src\\data\\dashboard.db"

//macos, linux os 
//let _dbname = "src/data/demodb1.db"
//let _dbname = "src/data/dashboard.db"

//connect to db function
let db = new sqlite3.Database(_dbname, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected successfully.');
});

//insert user function 
//insert row 
insert_query = "INSERT INTO user(username, password) VALUES(?, ?)"
values = ["usereeight", "pwd8"]
//db.run(insert_query, values)

//-- log to a file 
console.log("# row inserted")

//-- create displayAll function -- 
//returns all rows 
db.all("SELECT * FROM user", [], (err, rows) => {
    console.log(rows)
})

//-- create getUser function -- 
//returns first row
//db.get("SELECT * FROM user", [], (err, row) => {
db.get("SELECT * FROM user where username=? and password=?", ["userfour","pwd4"], (err, row) => {
    if (err) {
        throw err; 
    }
    console.log(row);
});


//-- call functuions
//-- connecttodb
//-- inseruser
//--displayAll
//--getuser

