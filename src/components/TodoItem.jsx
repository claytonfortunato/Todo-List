import React from "react";

import {
  MdModeEditOutline,
  MdDelete,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";

import "./TodoItem.scss";

const TodoItem = () => {
  return (
    <div className="container__todoitem">
      <div className="container__todoitem__list">
        <div className="container__todoitem__list__tasks">
          <MdCheckBoxOutlineBlank size={20} />
          <MdCheckBox size={20} />
        </div>
        <div>
          <p>Estudar Javascript</p>
          <p>Data</p>
        </div>
        <div className="container__todoitem__icon">
          <MdDelete size={20} />
          <MdModeEditOutline size={20} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
