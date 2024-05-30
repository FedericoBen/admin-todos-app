"use client";
import { FormEvent, useState } from "react";
import styles from "./NewTodo.module.scss";
import Input from "@/components/basics/Input/Input";
import Button from "@/components/basics/Button/Button";
import { addTodo, deleteCompleted } from "@/actions/todo-actions/todo-actions";

const NewTodo = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().length == 0) return;
    await addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} className={styles.container_new_todo}>
      <span style={{ color: "#ffffff" }}>Server actions</span>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className={styles.container_buttons}>
        <Button type={"onSubmit"} disable={!inputValue}>
          Add
        </Button>
        <Button onClick={() => deleteCompleted()} type={"reset"}>
          Delete
        </Button>
      </div>
    </form>
  );
};

export default NewTodo;
