import { createSlice } from "@reduxjs/toolkit";

let arr =[
    { id: 1, description: 'first todo item', isDone: false},
    { id: 2, description: 'second todo item', isDone: false},
    { id: 3, description: 'third todo item', isDone: false},
    { id: 4, description: 'fourth todo item', isDone: false},
    { id: 5, description: 'fifth todo item', isDone: false},
];
const todoSlice = createSlice({
    name:'todos',
    initialState: [
        { id: 1, description: 'first todo item', isDone: false},
        { id: 2, description: 'second todo item', isDone: false},
        { id: 3, description: 'third todo item', isDone: false},
        { id: 4, description: 'fourth todo item', isDone: false},
        { id: 5, description: 'fifth todo item', isDone: false},
    ],

    
    reducers: {
        addTodo: (state,action) => {
            const newTodo = {
                id: state[state.length-1].id+1,
                description: action.payload.description,
                isDone: false,
            };
            state.push(newTodo);
            
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].isDone = action.payload.isDone;
            
 
        },
        deleteTodo: (state, action) => {
             
             return state.filter((todo) => todo.id !== action.payload.id);
             
        },
        filterdone: (state, action) => {
            
            return state.filter((todo) => todo.isDone === true);
        },
        filternotdone: (state, action) => {
           
            return state.filter((todo) => todo.isDone === false);     
       },
        filter1: (state, action) => {
        return(arr);
        },

        
        updatetodo: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].description = action.payload.name;
            
        }
    },
});

export const { addTodo, toggleComplete, deleteTodo ,filter ,filterdone, filternotdone,updatetodo,filterData , filter1} = todoSlice.actions;

export default todoSlice.reducer;