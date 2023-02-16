import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilter } from "./components/VisibilityFilter";
import "./styles.scss";

function App() {
  return (
    <div className="container">
      <h1 className="container__todo__title">Lista de Tarefas</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </div>
  );
}

export default App;
