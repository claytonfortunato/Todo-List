import Todo from "./components/Todo";
import TodoItem from "./components/TodoItem";

import "./styles.scss";

function App() {
  return (
    <div className="container">
      <h1 className="container__todo__title">Lista de Tarefas</h1>
      <Todo />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
