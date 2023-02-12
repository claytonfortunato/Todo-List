import React, { useState } from "react";
import Modal from "react-modal";
import { v4 as uuid } from "uuid";

import { useDispatch } from "react-redux";

import { addTodo } from "../redux/task/actions";

import { handleFilter } from "../redux/task/actions";

import "./Todo.scss";
import "./Modal.scss";

const Todos = (props) => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");
  const [status, setStatus] = useState();

  const updateFilter = (e) => {
    dispatch(handleFilter(e.target.value));
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      transition: "500ms",
      maxWidth: "500px",
    },
  };

  const statusFilter = (filter) => {
    if (filter === "Incompleted") {
      return status.filter((todo) => todo.completed === false);
    }
    if (filter === "completed") {
      return status.filter((todo) => todo.completed === true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuid(),
        todo: todoValue,
        completed: false,
        time: new Date().toLocaleString(),
      })
    );

    setTodoValue("");
    setIsOpen(false);
  };

  return (
    <div className="container__todo">
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        style={customStyles}
      >
        <form className="container__modal" onSubmit={handleSubmit}>
          <h1>Adicionar Tarefa</h1>
          <div className="container__modal__title">
            <h4>Title</h4>
            <input
              type="text"
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
              required
            />
          </div>
          <div className="container__modal__status">
            <h4>Status</h4>
            <select
              id="type"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Incompleted" onClick={() => setStatus(false)}>
                Incompleto
              </option>
              <option value="completed" onClick={() => setStatus(true)}>
                Completo
              </option>
            </select>
          </div>
          <div className="container__modal__button">
            <button
              className="container__modal__button__add"
              type="submit"
              onClick={props.onClick}
            >
              Adicionar
            </button>
            <button
              className="container__modal__button__cancel"
              onClick={props.onRequestClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Todos;
