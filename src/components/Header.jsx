import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Todo from "./Todo";

import "./Todo.scss";

import { handleFilter } from "../redux/task/actions";

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="container__todo">
      <div className="container__todo__button">
        <button
          className="container__todo__button__left"
          onClick={() => setIsOpen(true)}
        >
          Adicionar Tarefa
        </button>
        <select className="container__todo__button__right">
          <option value="All">All</option>
          <option value="Incompleted">Incompleted</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <Todo isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Header;
