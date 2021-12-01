import React from 'react';
import './App.css';
import AddTodoForm  from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalItems from './components/TotalItems';
import './bootstrap.min.css'


function App() {
  return (
    <div className='box1' style={{backgroundColor: "rgb(1, 1, 82)"}}>
    <header style={{marginBottom:"4.5%"}} className="box9"></header>
    <div className="container bg-white p-4 mt-5" style={{marginBottom:"4.5%",height:"200%" ,color: "rgb(1, 1, 82)"}}>
       <h1 style={{display:'flex',justifyContent:'center'}}>My Todo List</h1>
       <AddTodoForm />
       <TodoList />
       <div style={{display:'flex',justifyContent:'center'}}><TotalItems /></div>
    </div>
    <div style={{backgroundColor: "rgb(1, 1, 82)",height:'300px'}}></div>
    <footer className="box10" ></footer>
    </div>
  );
}

export default App;
