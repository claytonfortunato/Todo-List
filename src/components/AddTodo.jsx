import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex m={4}>
        <FormControl>
          <Input type="text" value={value} onChange={handleInput} />
        </FormControl>
        <Button colorScheme="teal" type="submit" ml={4}>
          Adicionar
        </Button>
      </Flex>
    </form>
  );
};
