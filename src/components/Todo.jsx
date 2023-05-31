// Aqui vamos utilizar o atalho da Extensão ES7 snippet (rafce)
//Cria o component funcional pra mim

import React from "react";

//vamos utilizar o props para fazer o chamado do objeto no component pai para isso vamos desestruturar usando {}
const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <button className="complete" onClick={() => completeTodo(todo.id)}>
        Completar
      </button>
      <button className="remove" onClick={() => removeTodo(todo.id)}>
        X
      </button>
    </div>
  );
};

export default Todo;
