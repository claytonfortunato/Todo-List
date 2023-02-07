import React, { useState } from "react";
import Modal from "react-modal";

import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";

import "./Todo.scss";
import "./Modal.scss";
import { addTaskToList } from "../redux/task/actions";

const Todos = () => {
  const { taskReducer } = useSelector((rootReducer) => rootReducer.taskReducer);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleChange = (e) => {
    setTodo(e.targte.value);
  };

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      marginRight: "-20%",
      transform: "translate(-50%, -50%)",
      transition: "500ms",
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
      <h1 className="container__todo__title">Lista de Tarefas</h1>
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
      {taskReducer.map((list) => (
        <TodoItem key={list.id} list={list} />
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={openModal}
        style={customStyles}
        onAfterOpen={afterOpenModal}
      >
        <form className="container__modal">
          <h1>Adicionar Tarefa</h1>
          <div className="container__modal__title">
            <h4>Title</h4>
            <input type="text" />
          </div>
          <div className="container__modal__status">
            <h4>Status</h4>
            <select>
              <option value="Incompleted">Incompleto</option>
              <option value="completed">Completo</option>
            </select>
          </div>
          <div className="container__modal__button">
            <button
              className="container__modal__button__add"
              onClick={handleTaskClick}
            >
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
