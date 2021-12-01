import React from 'react';
import TodoItem from './TodoItem';
import { useSelector , useDispatch} from 'react-redux';
import { filterdone, filternotdone} from '../app/todoSlice'


const TodoList = ({ id, description, isDone}) => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    
      /*const todos = [
          { id: 1, description: 'first todo item', isDone: 'not'},
          { id: 2, description: 'second todo item', isDone: 'not'},
          { id: 3, description: 'third todo item', isDone: 'done'},
          { id: 4, description: 'fourth todo item', isDone: 'not'},
          { id: 5, description: 'fifth todo item', isDone: 'not'},
      ];*/

        const handlefilterdone = () =>{
            
            dispatch(filterdone({isDone: isDone}))
        };
        const handlefilternotdone = () =>{
            
            dispatch(filternotdone({isDone: isDone}))
        };
        
       return (
           <div style={{marginBottom:"2%" , color: "rgb(1, 1, 82)" }}>         
           <h1 style={{display:'flex',justifyContent:'center'}}>Filtering according Done / Not done</h1>
           <div style={{display:'flex',justifyContent:'space-between',marginBottom:"2%", color: "rgb(1, 1, 82)"}}>
           <button onClick={handlefilternotdone} className='btn btn-primary'>Not done</button>   
           <button onClick={handlefilterdone} className='btn btn-primary' > Done </button>
           </div > 
           <ul className='list-group' style={{backgroundColor: "rgb(1, 1, 82)" }}>
               {todos.map((todo) => (
                   <TodoItem  id={todo.id}   description={todo.description} isDone={todo.isDone} />
               ))}
           </ul>
           </div>
       );
};

export default TodoList;