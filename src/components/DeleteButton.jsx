import { Box, Button } from "@chakra-ui/react";

import { deleteAll } from "../redux/actions";
import { useDispatch } from "react-redux";

export const DeleteButton = () => {
  const dispatch = useDispatch();

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
