import React, { useState } from "react";

import {
  MdModeEditOutline,
  MdDelete,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";

import "./TodoItem.scss";

const TodoItem = ({ todo }) => {
  const [cheked, isCheked] = useState(false);

  return (
    <div className="container__todoitem">
      <div className="container__todoitem__task">
        <div className="container__todoitem__task__list">
          <div className="container__todoitem__task__list__check">
            {todo ? (
              <MdCheckBoxOutlineBlank size={26} />
            ) : (
              <MdCheckBox size={26} />
            )}
          </div>
          <div className="container__todoitem__task__list__tasks">
            <p>Estudar Javascript</p>
            <small>3:33 AM, 01/01/2023</small>
          </div>
        </div>
        <div className="container__todoitem__task__list__icon">
          <MdDelete size={22} color="red" />
          <MdModeEditOutline size={22} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
