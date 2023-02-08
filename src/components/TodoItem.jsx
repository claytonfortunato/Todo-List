import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteAll, removeTodo } from "../redux/task/actions";

import {
  MdModeEditOutline,
  MdDelete,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";

import "./TodoItem.scss";

const TodoItem = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);
  return (
    <>
      <div className="container__todoitem">
        {todos.map((todo) => (
          <div className="container__todoitem__task">
            <div key={todo.id} className="container__todoitem__task__list">
              <div className="container__todoitem__task__list__check">
                <input type="checkbox" checked={todo.completed}></input>
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
                <small>3:33 AM, 01/01/2023</small>
              </div>
            </div>
            <div className="container__todoitem__task__list__icon">
              <MdModeEditOutline />

              <MdDelete color="red" onClick={() => dispatch(removeTodo())} />
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
