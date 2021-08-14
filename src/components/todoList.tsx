import React from "react";
import { useAppSelector } from "../store";

export const TodoList = () => {
  const todo = useAppSelector((state) => state.todo);

  return (
    <ul>
      {todo.map((el) => (
        <li key={el.title}>{el.title}</li>
      ))}
    </ul>
  );
};
