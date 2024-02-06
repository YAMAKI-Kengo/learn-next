"use client";

import React, { useState } from "react";
import { VStack, Checkbox, Text, StackDivider } from "@chakra-ui/react";

import Button from "@/components/button";
import Input from "@/components/input";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

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
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      TODO
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="ToDoを追加"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={addTodo}>追加</Button>
        <VStack
          divider={<StackDivider />}
          spacing={4}
          align="stretch"
          maxH="400px"
          overflowY="auto"
        >
          {todos.map((todo, index) => (
            <Checkbox
              key={index}
              isChecked={todo.completed}
              onChange={() => toggleTodo(index)}
            >
              <Text textDecoration={todo.completed ? "line-through" : "none"}>
                {todo.text}
              </Text>
              <Button size="xs" onClick={() => deleteTodo(index)}>
                削除
              </Button>
            </Checkbox>
          ))}
        </VStack>
      </VStack>
    </div>
  );
};

export default TodoList;
