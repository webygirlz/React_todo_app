import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, done: false }]);
      setInputValue('');
    }
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      ) 
    );
  };

  return (
    <div className="container mx-auto py-8 bg-slate-600 h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="w-full px-2 py-2 mx-5 border rounded mr-2"
          placeholder="Add new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="px-4 py-2 mr-5 bg-black text-white rounded"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center mb-2 mx-5">
            <span
              className={`flex-grow ${todo.done ? 'line-through text-gray-500' : ''}`}
            >
              {todo.text}
            </span>
            <button
              className="px-2 py-1 bg-green-500 text-white rounded mr-2"
              onClick={() => toggleDone(index)}
            >
              {todo.done ? 'Undo' : 'Done'}
            </button>
          
            <button
              className="px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
