import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import  { toggleComplete, deleteTodo,updatetodo} from '../app/todoSlice'



const TodoItem = ({ id, description, isDone}) => {
    const dispatch =useDispatch();
    const [editable, setEditable] = useState(false);
    const [name,setName] = useState(description);
    const handleCompleteClick = () => {
        dispatch(toggleComplete({id: id, isDone: !isDone }))
        
        
    };
    const handleDeleteClick = () =>{
        dispatch(deleteTodo({id: id}))
    };



    return(
        <div style={{color: "rgb(1, 1, 82)" }}>

        <div style={{color: "rgb(1, 1, 82)" }}>
        <li className='list-group-item'>
            <div className='d-flex justify-content-between'>
                <span className='d-flex align-items-center'>
                    <input type='checkbox' className='mr-3' checked={isDone } style={{marginRight:"3px" }} onChange={handleCompleteClick} />
                    {id}</span>
                    <span>{editable ? <input type="text"   className='mr-3'  value={name}   onChange={(e) => setName(e.target.value)}   /> : description } </span>
                <div >
                <button onClick={() => { if  (name.charAt(0) ===' ' ||  name.length === 0  || name.length > 100  ) {dispatch(updatetodo({ id: id, name: description })); setEditable(!editable);} else {dispatch(updatetodo({ id: id, name: name })); setEditable(!editable); }}}style={{marginRightt:"3px" }} className="btn btn-primary">{editable?"Update":"Edit"}</button>
                <button onClick={handleDeleteClick} className='btn btn-primary' style={{marginLeft:"3px" }} >Delete</button>
                </div>
            </div>
        </li>
        </div>
        </div>
    );
};

export default TodoItem;