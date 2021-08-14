import React, { createRef } from "react";
import { todoAction, useAppDispatch } from "../store";

export const AddForm = () => {
  const inputRef = createRef<HTMLInputElement>();

  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      dispatch(todoAction.addTodo({ title: inputValue, completed: false }));
    }
  };

  return (
    <div>
      <input ref={inputRef} /> <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
