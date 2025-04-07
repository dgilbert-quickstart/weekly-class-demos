import { useEffect, useState } from "react"

const initial_todo_items = [
{id:1,name:"item one", completed:false},
{id:2,name:"item two", completed:false},
{id:3,name:"item three", completed:true},
{id:4,name:"item four", completed:false},
{id:5,name:"item five", completed:false}
];

function Home() {

const [tmptasks, setTmpTasks] = useState(initial_todo_items);
const [tasks, setTasks] = useState(null);
const [newTask, setNewTask] = useState("");

function handleInputChange(event){
  setNewTask(event.target.value);
}


function addTask(){

  if (newTask.trim().length == 0) {
    alert("Please enter a task");
  return true;
  }

  const _newitem = {id:new Date().getTime(),name:newTask,completed:false};

  setTmpTasks((prevval)=>{
      
      const _lst = [...prevval,_newitem]
      setTasks((prevval)=>[..._lst]);    
      return _lst;
  });

  setNewTask("");
}


function deleteTask(index) {


if(!window.confirm("delete item?")){

return false;

}

/*
const updatedTasks = tasks.filter((_, i) => i !== index);

setTasks(updatedTasks);
*/

setTmpTasks((prevval)=>{

  const _lst = [...prevval]
  
  const _index = _lst.findIndex((item)=>{
    if (item.id == index)
    {
      return true;
    }
  })

  if(_index !=-1)
  {
    _lst.splice(_index,1)
  }

  setTasks((prevval)=>[..._lst]);    
  return _lst;
});

}


function clearFields() {

let msgText = "clearFields";

console.log(msgText);

setNewTask("");

}


const handleAll = (e) => {


e.preventDefault();

const filteredlist = tmptasks;
      
setTasks(filteredlist);

}


const handleComplete = (e) => {


e.preventDefault();


const filteredlist = tmptasks.filter((item)=>{
  return item.completed
})


setTasks(filteredlist);

}


const handleIncomplete = (e) => {

  e.preventDefault()

  const filteredlist = tmptasks.filter((item)=>{
    return !item.completed
  })

  setTasks(filteredlist);

}

const handleItemToggle = (e, id) => {


  let _lst1 = tmptasks.map((item)=>{
      return   (item.id == id)?                  
            {...item,completed:!item.completed}
        :
            {...item};                
    });

    let _lst2 = tasks.map((item)=>{
      return   (item.id == id)?                  
            {...item,completed:!item.completed}
        :
            {...item};                
    });

    setTmpTasks(_lst1);
    setTasks(_lst2);

    setNewTask("")

}

useEffect(()=>{


console.log("#App::Home page load")


//setTodoList(tmplist)

//or -- spread operator -- append/include latest data 

setTasks([...tmptasks])


//page load [] -- 1 time

//-- always refresh page on state update -- setTodoList , updated caused a page refresh, = endless loop page refresh


},[]) //[] - run only 1 time 


return (

<>

<div className="div-main">

<h2>To-Do List</h2>

<div> 

<input className="user-input" type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}></input> {" "}

<button className="add-btn" onClick={addTask}>Add</button> {" "}

<a className="clear-btn" onClick={clearFields}>Clear</a><br/>

</div>

<br/>

<div className="div-filter">

<a href="#" onClick={(e)=>handleAll(e)}>all</a> {" | "}

<a href="#" onClick={(e)=>handleComplete(e)}>complete</a> {" | "}

<a href="#" onClick={(e)=>handleIncomplete(e)}>in-complete</a> 

</div>

<p></p>

<div className="div-tasks">

{tasks && tasks.map((task, index) =>

<div key={index}>

<input onChange={(e)=>handleItemToggle(e,task.id)} type="checkbox" checked={task.completed}/>{" "}
  
<span>{task.name}</span> {" "}

<button className="delete-btn"onClick={() => deleteTask(task.id)}>x</button>

</div>

)}

</div>

</div>

</>

);

}


export default Home;
