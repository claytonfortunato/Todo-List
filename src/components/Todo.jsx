import React, { useState } from "react";
import Modal from "react-modal";
import { v4 as uuid } from "uuid";

import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/task/actions";

import "./Todo.scss";
import "./Modal.scss";

const Todos = () => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!modalIsOpen);
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
      <div className="container__todo__button">
        <button className="container__todo__button__left" onClick={openModal}>
          Adicionar Tarefa
        </button>
        <select className="container__todo__button__right">
          <option value="All">All</option>
          <option value="Incompleted">Incompleted</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={openModal}
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
            <select>
              <option value="Incompleted">Incompleto</option>
              <option value="completed">Completo</option>
            </select>
          </div>
          <div className="container__modal__button">
            <button className="container__modal__button__add" type="submit">
              Adicionar
            </button>
            <button className="container__modal__button__cancel">
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Todos;
