import React, { useEffect, useState } from 'react'

const Todo = () => {
    const[todos,setTodos]=useState([]);
    const[filter,setFilter]=useState([]);
    const[isVisible,setVisible]= useState(false);
    const[inputVal,setInputVal]=useState('');
    const[issearching,setSearching]=useState(false);
    useEffect(()=>{
        async function fetchApi(){
const response = await fetch('https://jsonplaceholder.typicode.com/todos')
let results =await response.json();
setTodos(()=>([
    ...results
]))
    
        }
        fetchApi();
        setVisible(true);
    },[]);
   
    const handleInput=(e)=>{
        setInputVal(e.target.value)
    }
    const handleSearch=()=>{
        setSearching(true);
        // console.log(inputVal);
        let filterData = todos.filter((item,index)=>{
            
            if(inputVal == item.title  || inputVal == item.id ){
                console.log(item);
                return item
            }
            else if(inputVal==''){
                return todos
            }
        })
        console.log(filterData);
        setFilter(()=>([
            ...filterData
        ]))
        
        console.log('button clicked');
    }
      
    const mapData=todos.map((item,index)=>{
        return(
<div key={index}>
    <h3>Id:{item.id}</h3>
    <h3 style={{display:'inline'}}>Title:</h3><span><p style={{display:'inline'}}>{item.title}</p></span>
    <h4>Completed:{item.completed?'yes':'no'}</h4>
<hr/>
</div>
        )
    })
    const filterData=filter.map((item,index)=>{
        return(
<div key={index}>
    <h3>Id:{item.id}</h3>
    <h3 style={{display:'inline'}}>Title:</h3><span><p style={{display:'inline'}}>{item.title}</p></span>
    <h4>Completed:{item.completed?'yes':'no'}</h4>
<hr/>
</div>
        )
    })
    
  return (
    <div>
        Todo App
        {
        isVisible?
        <>
        <input placeholder='enter id'
        onChange={handleInput}/>
        <button onClick={handleSearch}>search</button>
        </>:null
        }
        {issearching?filterData:mapData}
        
    </div>
   
  )
}

export default Todo
// https://jsonplaceholder.typicode.com/todos