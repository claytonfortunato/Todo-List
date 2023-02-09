import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

import {
  deleteAll,
  removeTodo,
  handleCheckbox,
  handleEditSubmit,
} from "../redux/task/actions";

import { MdModeEditOutline, MdDelete } from "react-icons/md";

import "./TodoItem.scss";

const TodoItem = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);
  console.log(todos);

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };
  return (
    <>
      <div className="container__todoitem">
        {todos.map((todo) => (
          <div className="container__todoitem__task">
            <div key={todo.id} className="container__todoitem__task__list">
              <div className="container__todoitem__task__list__check">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(handleCheckbox(todo.id))}
                ></input>
              </div>
              <div className="container__todoitem__task__list__tasks">
                <p
                  style={
                    todo.completed === true
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  {todo.todo}
                </p>
                <small> {format(new Date(todo.time), "p, MM/dd/yyyy")}</small>
              </div>
            </div>
            <div className="container__todoitem__task__list__icon">
              <MdModeEditOutline onClick={() => handleUpdate()} />

              <MdDelete
                color="red"
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </div>
          </div>
        ))}
      </div>
      {todos.length > 0 && (
        <div className="container__todoitem__deleteall">
          <button onClick={() => dispatch(deleteAll())}>Deletar Todos</button>
        </div>
      )}
    </>
  );
};

export default TodoItem;
