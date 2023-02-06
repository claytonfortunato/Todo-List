import React, { useState } from "react";
import Modal from "react-modal";

import "./Todo.scss";
import TodoItem from "./TodoItem";

const Todos = () => {
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
      <TodoItem />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={openModal}
        style={customStyles}
        onAfterOpen={afterOpenModal}
      >
        <div className="container__modal">
          <h4>Title</h4>
          <input type="text" />
        </div>
      </Modal>
    </div>
  );
};

export default Todos;
