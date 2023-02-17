import { Container, Heading } from "@chakra-ui/react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilter } from "./components/VisibilityFilter";
import { DeleteButton } from "./components/DeleteButton";

function App() {
  return (
    <Container>
      <Heading my="4" textAlign="center">
        Lista de Tarefas
      </Heading>
      <VisibilityFilter />
      <AddTodo />
      <TodoList />
      <DeleteButton />
    </Container>
  );
}

export default App;
