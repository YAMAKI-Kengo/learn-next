"use client";

import React, { useState } from "react";
import {
  VStack,
  Input,
  Checkbox,
  Text,
  StackDivider,
  Box,
} from "@chakra-ui/react";

import Button from "@/components/button";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    handleIncrement();
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <VStack spacing={4} p={4}>
        <Text fontSize="24px" fontWeight="bold" textAlign="center">
          ToDo List
        </Text>
        <p className="text-2xl mb-4">
          Completed Tasks: {count}
          <Button onClick={reset} style={{ marginLeft: "16px" }}>
            Reset
          </Button>
        </p>
        <Input
          placeholder=" Add new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          bg="black"
          h="40px"
        />
        <Button onClick={addTodo} style={{ margin: "8px" }}>
          Add
        </Button>
        <VStack
          divider={<StackDivider />}
          spacing={4}
          align="stretch"
          overflowY="auto"
        >
          {todos.map((todo, index) => (
            <Box key={index} display="flex" justifyContent="space-between">
              <Checkbox
                isChecked={todo.completed}
                onChange={() => toggleTodo(index)}
              >
                <Text textDecoration={todo.completed ? "line-through" : "none"}>
                  {todo.text}
                </Text>
              </Checkbox>
              <Button
                onClick={() => deleteTodo(index)}
                style={{ margin: "8px" }}
              >
                Delete
              </Button>
            </Box>
          ))}
        </VStack>
      </VStack>
    </div>
  );
};

export default TodoList;
