import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { removeTaskFromList } from "../redux/task/actions";

import {
  MdModeEditOutline,
  MdDelete,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";

import "./TodoItem.scss";

const TodoItem = ({ todos }) => {
  const dispatch = useDispatch();
  console.log(todos);

  const [cheked, isCheked] = useState(false);

  const handleRemoveClick = () => {
    dispatch(removeTaskFromList(TodoItem.id));
  };

  return (
    <div className="container__todoitem">
      <div className="container__todoitem__task">
        <div className="container__todoitem__task__list">
          <div className="container__todoitem__task__list__check">
            {todos ? (
              <MdCheckBoxOutlineBlank size={26} />
            ) : (
              <MdCheckBox size={26} />
            )}
          </div>
          <div className="container__todoitem__task__list__tasks">
            <p
              style={
                todos.completed === true
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              Estudar Javascript
            </p>
            <small>3:33 AM, 01/01/2023</small>
          </div>
        </div>
        <div className="container__todoitem__task__list__icon">
          <MdDelete size={22} color="red" onClick={handleRemoveClick} />
          <MdModeEditOutline size={22} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
