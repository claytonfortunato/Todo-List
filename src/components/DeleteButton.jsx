import { Box, Button } from "@chakra-ui/react";

import { deleteAll } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const DeleteButton = () => {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todos);
  console.log(todo);

  return (
    <Box>
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => dispatch(deleteAll())}
        width="100%"
      >
        Deletar Todos
      </Button>
    </Box>
  );
};
