import { Box, Checkbox, Text, Button, Flex } from "@chakra-ui/react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions";
import { format } from "date-fns";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);

  const handleCheked = () => dispatch(toggleTodo(todo.id));

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (
    <Box
      mb={2}
      bgColor="lightcoral"
      p={3}
      display="flex"
      justifyContent="space-between"
    >
      <Checkbox onChange={handleCheked} isChecked={cheked}>
        <Text as={todo.completed && "del"}>{todo.content}</Text>
        {/* <Text>{format(new Date(todo), "p, MM/dd/yyyy")}</Text> */}
      </Checkbox>
      <Box>
        <DeleteIcon />
      </Box>
    </Box>
  );
};
