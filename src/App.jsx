import { Container, Heading, Box } from "@chakra-ui/react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilter } from "./components/VisibilityFilter";

function App() {
  return (
    <Container
      bgGradient={[
        "linear(to-tr, teal.300, yellow.400)",
        "linear(to-t, blue.200, teal.500)",
        "linear(to-b, orange.100, purple.300)",
      ]}
    >
      <Heading my="4">Lista de Tarefas</Heading>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </Container>
  );
}

export default App;
