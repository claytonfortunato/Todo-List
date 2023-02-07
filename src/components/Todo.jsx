import React, { useState } from "react";
import Modal from "react-modal";

import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";

import "./Todo.scss";
import "./Modal.scss";
import { addTaskToList } from "../redux/task/actions";

const Todos = () => {
  const { todos } = useSelector((rootReducer) => rootReducer.taskReducer);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todo,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTaskToList(todoObj));
  };

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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const handleTaskClick = () => {
    dispatch(addTaskToList(TodoItem));
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
        onAfterOpen={afterOpenModal}
      >
        <form className="container__modal" onSubmit={handleSubmit}>
          <h1>Adicionar Tarefa</h1>
          <div className="container__modal__title">
            <h4>Title</h4>
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
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
