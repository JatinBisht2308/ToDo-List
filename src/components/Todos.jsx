import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Add local state to manage the editing status and text for each todo
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState("");

  const handleEditClick = (todo) => {
    // Set the editingTodoId and pre-fill the input with the current todo text
    setEditingTodoId(todo.id);
    setEditedTodoText(todo.text);
  };

  const handleUpdateClick = (todo) => {
    // Dispatch the updateTodo action with the edited text
    dispatch(updateTodo({ id: todo.id, text: editedTodoText }));
    // Clear the editing status
    setEditingTodoId(null);
  };

  return (
    <div>
      <div className="flex justify-center mt-5 text-lg font-semibold">
        Todos List
      </div>
      <ul className="list-none px-5">
        {todos.map((todo) => (
          <li
            className="mt-5 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingTodoId === todo.id ? (
              // Render an input field for editing
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                  className="text-white bg-zinc-700 p-1 rounded"
                />
                <button
                  onClick={() => handleUpdateClick(todo)}
                  className="text-white bg-teal-500 border-0 py-1 px-4 focus:outline-none hover:bg-teal-600 rounded text-md ml-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 12l-4-4-4 4M12 16V9" />
                  </svg>
                </button>
              </div>
            ) : (
              // Render todo text and buttons for edit and delete
              <div className="text-white">{todo.text}</div>
            )}
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleEditClick(todo)}
                className="text-white bg-amber-500 border-0 py-1 px-4 focus:outline-none hover:bg-amber-600 rounded text-md ml-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                </svg>
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md ml-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
