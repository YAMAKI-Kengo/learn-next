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
  const [completedCount, setCompletedCount] = useState(0);
  const [tasksCount, setTasksCount] = useState(0);

  const handleCompletedIncrement = () => {
    setCompletedCount(completedCount + 1);
  };

  const handleTasksIncrement = () => {
    setTasksCount(tasksCount + 1);
  };

  const handleDecrement = () => {
    setTasksCount(tasksCount - 1);
    setCompletedCount(completedCount - 1);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
      handleTasksIncrement();
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    handleCompletedIncrement();
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    handleDecrement();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <VStack spacing={4} p={4}>
        <Text fontSize="24px" fontWeight="bold" textAlign="center">
          ToDo List
        </Text>
        <p className="text-2xl mb-4">
          Completed Tasks: {completedCount} / {tasksCount}
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
