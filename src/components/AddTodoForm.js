import React , { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addTodo,filter1 } from '../app/todoSlice';
 


const AddTodoForm = ({isDone}) => {
    const todos = useSelector((state) => state.todos);
    const [value, setValue] = useState('');
    const [searchText, setSearchText] = useState("");
 
    
   /* const [data1, setData1] = useState(todos);*/
    console.log(todos);
    const dispatch = useDispatch();
    localStorage.setItem('text4',value);
    const handleChange = value   => {
          setSearchText(value);
          dispatch(filter1(value ));
    };
   
   
    const onSubmit = (event) => {
        event.preventDefault();
        
        if  (value.charAt(0) ===' ' ||  value.length === 0  || value.length > 100  ) 
        {return}
        else
        {console.log('user entered:' + value);
        dispatch(
            addTodo({
                description: value,
            })
        );}
       
    };


    return(
        <div>
                    <div>
                        <button  
                        type="text"
                        value={searchText}
                        onClick={e => handleChange(e.target.value)}
                        className="btn btn-primary"
                        >Reset</button>
                    </div>   
        <form className='form-inline' onSubmit={onSubmit}>
         <label className='sr-only' style={{display:'flex',justifyContent:'center'}} >Description</label>
         <input
         type='text'
         placeholder='add todo...'
         className='form-control mb-2 mr-sm-2'
         value={value}
         onChange={(event) => setValue(event.target.value)}
         ></input>
         <div style={{display:'flex',justifyContent:'center',marginBottom:'1%'}}><button className='btn btn-primary' type='submit' style={{display:'flex',justifyContent:'center'}}>Submit</button></div>
        </form>
        </div>
    );
};

export default AddTodoForm;