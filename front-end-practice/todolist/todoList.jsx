import react, { useState, useEffect, useRef } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  function addTodo() {
    if (todo.length) {
      const todoItem = { todo, id: todoList.length };
      setTodoList([...todoList, todoItem]);
      setTodo("");
    }
  }

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        className="todoItem"
        placeholder="Todo Item"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="button" onClick={addTodo}>
        Add Todo
      </button>
      {todoList.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            setTodoList={setTodoList}
            todoList={todoList}
            todo={todo}
            id={todo.id}
          />
        );
      })}
    </>
  );
};

export default TodoList;
