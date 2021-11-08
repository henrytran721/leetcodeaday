import react, { useState, useEffect, useRef } from "react";

const TodoItem = (props) => {
  const { todo, id, setTodoList, todoList } = props;

  function deleteItem(e) {
    // no mutation because we make a copy
    const copy = [...todoList];
    copy.splice(Number(e.target.id), 1);
    setTodoList(copy);
  }
  return (
    <>
      <h3>{todo.todo}</h3>
      <button onClick={deleteItem} id={id}>
        Delete
      </button>
    </>
  );
};

export default TodoItem;
