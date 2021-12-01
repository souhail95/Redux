import React from 'react'
import { useSelector } from 'react-redux';


const TotalItems = () => {
    const completedTodos = useSelector((state) => state.todos.filter((todo) => todo.isDone === true));

     return(
         <h4 className='mt-3' >Totalitems : {completedTodos.length}</h4>
     );
};

export default TotalItems;