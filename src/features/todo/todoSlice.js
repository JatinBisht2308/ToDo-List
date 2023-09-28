import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid is a function that is provided by reduxjs/toolkit to generate a unique id
const initialState = {
  todos: [{ id: 1, text: "Hello to my todo!" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
        // here we are updating the todos object with a new state where there is no todo which we get from the action.payload
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo:(state,action) => {
      const updatedTodo = action.payload;
          state.todos = state.todos.map((todo) => {
            if(todo.id === updatedTodo.id)
            {
              return updatedTodo;
            }
            else{
              return todo;
            }
          }
          )
    },
  },
});

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions;
export default todoSlice.reducer