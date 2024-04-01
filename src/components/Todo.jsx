import React, { useState } from "react";

const Todo = () => {
  // creating an empty array and passing in props
  const [todos, settodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
    {
      id: 2,
      text: "Learn Redux",
      completed: false,
    },
  ]);

  // creating a useState and function that adds a new todo, removes and ticks todo to the array

  const [Newtodo, setNewtodo] = useState("");

  // setting the value of the input value
  const handleclick = (event) => {
    setNewtodo(event.target.value);
  };

  // / adding a new todo to the array
  const addTodo = (todo) => {
    if (Newtodo.trim() !== "") {
      settodos([
        ...todos,
        { id: todos.length + 1, text: Newtodo, completed: false },
      ]); // adding a new todo to the array
      setNewtodo("");
    }
  };

  // creating a functions for the checked form which controls the todo.completed
  const HandleToggleTodo = (index) => {
    const NewTodos = [...todos];
    NewTodos[index].completed = !NewTodos[index].completed;
    settodos(NewTodos);
  };

  // creating a function that removes a todo from the array
  const removeTodo = (index) => {
    const NewTodos = [...todos];
    NewTodos.splice(index, 1);
    settodos(NewTodos);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-500 w-full h-screen ">
        <div className="w-96  bg-slate-100 rounded-3xl flex flex-col items-center justify-center shadow-lg shadow-white-500/50">
          <h1 className="font-[Poppins] pb-5  text-gray-700 pt-5">
            TODO LIST{" "}
          </h1>
          <div className="flex items-center gap-5 mb-9">
            <input
              type="text"
              placeholder="Type here"
              className="input  w-[220px] shadow-lg shadow-gray-500/50 "
              value={Newtodo}
              onChange={handleclick}
            />
            <button
              type="submit"
              className="btn mb- shadow-lg shadow-gray-900/50"
              onClick={addTodo}
            >
              ADD
            </button>
          </div>
          <div>
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={todo.id}
                  className="flex flex-row items-center justify-center gap-[10px] shadow-lg shadow-gray-900/50 px-5 mb-5 rounded-2xl"
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => HandleToggleTodo(index)}
                  />
                  {todo.text}
                  <button
                    type="button"
                    onClick={() => removeTodo(index)}
                    className="btn btn-danger w-[70px]"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
